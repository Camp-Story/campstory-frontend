import UserProfile from "../UserProfile";

export default function Comment() {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <UserProfile nickname="사용자 닉네임" profileUrl="" />
        <div className="text-gray-scale-300">1달 전</div>
      </div>
      <div className="text-gray-scale-400 font-medium ml-[40px] mt-3 leading-5">
        캠프하세요. 등유난로가 켜고 끌때 기름냄새는 당연한거고 연소중에는 냄새 안나요. 또 난로
        열기가 위로 올라가는거 위에 팬달거나 그러지말고 유동력 무동력 퍈을 사용햐서 순환시켜보세요
        급이 달라져요. 단점은 비싸다는거...
      </div>
    </div>
  );
}
