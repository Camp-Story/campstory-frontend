interface CardButtonProps {
    src: string;
    children: string;
}

export default function CardButton({ src, children }: CardButtonProps) {
    return (
        <div>
            <img src={src} alt="CampingImage" className="w-[300px]" />
            <div className="text-[26px] font-bold my-4">{children}</div>
        </div>
    );
}
  