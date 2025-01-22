interface SubTitleProps {
    mainText: string;
    subText: string;
}

export default function SubTitle({ mainText, subText }: SubTitleProps) {
    return (
        <div className="mb-4">
            <div className="text-highlight text-[36px] text-[#333333]">
                {mainText}
            </div>
            <div className="text-[20px] text-[#676767]">
                {subText}
            </div>
        </div>
    );
}
