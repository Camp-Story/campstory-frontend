// 좌표 변환 결과를 위한 인터페이스 정의
export interface LatLon {
  lat: number;
  lon: number;
}

export interface GridCoord {
  nx: number;
  ny: number;
}

class KmaCoordConverter {
  // 상수 정의
  private readonly RE: number = 6371.00877; // 지구 반경(km)
  private readonly GRID: number = 5.0; // 격자 간격(km)
  private readonly SLAT1: number = 30.0; // 투영 위도1(degree)
  private readonly SLAT2: number = 60.0; // 투영 위도2(degree)
  private readonly OLON: number = 126.0; // 기준점 경도(degree)
  private readonly OLAT: number = 38.0; // 기준점 위도(degree)
  private readonly XO: number = 43; // 기준점 X좌표(GRID)
  private readonly YO: number = 136; // 기준점 Y좌표(GRID)
  private readonly DEGRAD: number = Math.PI / 180.0;
  private readonly RADDEG: number = 180.0 / Math.PI;

  /**
   * 위경도를 기상청 좌표(nx, ny)로 변환
   * @param lat 위도
   * @param lon 경도
   * @returns {GridCoord} 변환된 nx, ny 좌표
   */
  public convertToNx(lat: number, lon: number): GridCoord {
    const re: number = this.RE / this.GRID;
    const slat1: number = this.SLAT1 * this.DEGRAD;
    const slat2: number = this.SLAT2 * this.DEGRAD;
    const olon: number = this.OLON * this.DEGRAD;
    const olat: number = this.OLAT * this.DEGRAD;

    let sn: number =
      Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    let sf: number = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    let ro: number = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);

    let ra: number = Math.tan(Math.PI * 0.25 + lat * this.DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    let theta: number = lon * this.DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;

    const nx: number = Math.floor(ra * Math.sin(theta) + this.XO + 0.5);
    const ny: number = Math.floor(ro - ra * Math.cos(theta) + this.YO + 0.5);

    return { nx, ny };
  }

  /**
   * 기상청 좌표(nx, ny)를 위경도로 변환
   * @param nx 기상청 X좌표
   * @param ny 기상청 Y좌표
   * @returns {LatLon} 변환된 위도, 경도
   */
  public convertToLatLon(nx: number, ny: number): LatLon {
    const re: number = this.RE / this.GRID;
    const slat1: number = this.SLAT1 * this.DEGRAD;
    const slat2: number = this.SLAT2 * this.DEGRAD;
    const olon: number = this.OLON * this.DEGRAD;
    const olat: number = this.OLAT * this.DEGRAD;

    let sn: number =
      Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    let sf: number = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    let ro: number = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);

    const xn: number = nx - this.XO;
    const yn: number = ro - ny + this.YO;
    let ra: number = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) ra = -ra;
    let alat: number = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    let theta: number = 0.0;
    if (Math.abs(xn) <= 0.0) {
      theta = 0.0;
    } else {
      if (Math.abs(yn) <= 0.0) {
        theta = Math.PI * 0.5;
        if (xn < 0.0) theta = -theta;
      } else {
        theta = Math.atan2(xn, yn);
      }
    }
    const alon: number = theta / sn + olon;

    return {
      lat: alat * this.RADDEG,
      lon: alon * this.RADDEG,
    };
  }
}

export default KmaCoordConverter;
