
export default function Banner() {
    return (
      <>
        <div className="relative">
          <img src="/public/festival/festival-banner.png" alt="이미지" className="w-full object-cover" />
          <div className=" w-[800px] mx-auto absolute bottom-[140px] left-[50%] -translate-x-[50%] text-[32px] text-white">
            <div className="-my-1">자연속 특별한 순간을 만나는 캠핑,</div>
            <div className=" font-extrabold">지금 바로 떠날 준비 되셨나요?</div>
          </div>
        </div>
      </>
    );
  }