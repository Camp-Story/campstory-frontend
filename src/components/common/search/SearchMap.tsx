import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/Dialog";
import CustomMap from "./CustomMap";
import { MapProps } from "types/common";

const LABEL = {
  camping: "캠핑",
  event: "행사",
  restaurant: "음식점",
};

export default function SearchMap({ markers, type }: MapProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
          <img src="/images/map-small.png" alt="map small" />
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="w-fit text-xl bg-info-500 text-gray-scale-100 rounded px-[23px] py-[13px]">
              지도 보기
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="h-full">
        <DialogHeader>
          <DialogTitle>{`${LABEL[type]} 지도 상세보기`}</DialogTitle>
          <DialogDescription>
            지도에서 한눈에 확인하고, 위치별 정보를 바로 확인하세요!
          </DialogDescription>
        </DialogHeader>
        <CustomMap markers={markers} type={type} />
      </DialogContent>
    </Dialog>
  );
}
