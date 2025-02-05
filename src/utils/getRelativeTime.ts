export default function getRelativeTime(timestamp: string): string {
  const createdDate: Date = new Date(timestamp);
  // 날짜가 유효하지 않으면 fallback 문자열 반환
  if (isNaN(createdDate.getTime())) {
    return "알 수 없음";
  }

  const now: Date = new Date();
  const diffMs: number = now.getTime() - createdDate.getTime();

  // 미래의 날짜일 경우 "방금 전" 처리
  if (diffMs < 0) {
    return "방금 전";
  }

  // 분 단위 차이 계산
  const diffMinutes: number = Math.floor(diffMs / (1000 * 60));

  // 24시간 미만이면 "X시간 Y분 전"으로 표시
  if (diffMinutes < 1440) {
    const hours: number = Math.floor(diffMinutes / 60);
    const minutes: number = diffMinutes % 60;

    if (hours >= 10) {
      return `${hours}시간 전`;
    }

    let result: string = "";

    if (hours > 0) {
      result += `${hours}시간 `;
    }
    result += `${minutes}분 전`;
    return result;
  } else {
    // 24시간 이상이면 일수 단위로 계산
    const diffDays: number = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays < 7) {
      const days: number = Math.floor(diffDays);
      return `${days}일 전`;
    } else {
      // 1주(7일) 이상이면 주 단위로 표시
      const weeks: number = Math.floor(diffDays / 7);
      return `${weeks}주 전`;
    }
  }
}
