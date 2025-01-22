
export default function TodaySection() {

    return (
        <div className="flex mx-[106px] my-[100px]">
            <div className="flex-1">
                <div className="text-highlight text-[52px] text-gray-scale-500">
                    새해를 여는 밝은 희망, 감악산 해맞이
                </div>
                <div className="text-[20px] text-gray-scale-300">
                    2025년, 새해의 첫 태양과 함께 희망을 품어보세요! 감악산 해맞이에서 풍물패 공연, 소원 적기, 떡국 시식 등 다채로운 즐거움을 만나보세요
                </div>
                <div className="text-[20px] text-gray-scale-300 font-bold">
                    <img src="/images/festival/event-tag-star.png" alt="별 모양 태그" className="inline-block mr-2"/>
                    핫플레이스
                </div>
                <div className="mt-4">
                    <button className="border p-2 rounded-xl text-gray-scale-400 font-bold bg-gray-scale-100 w-[302px] h-[58px]">
                        더 알아보기
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/images/festival/event-dummy.png" alt="오늘의 행사 이미지" className="max-w-full"/>
            </div>
        </div>
    )
}
