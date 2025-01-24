import { PATH } from "@constants/path";
import { Link } from "react-router";

export default function MainNavigation() {
  return (
    <nav className="flex items-center justify-between">
      <h1>
        <Link to={PATH.home}>
          <img src="/images/campstory-logo.png" />
        </Link>
      </h1>
      <ul className="flex gap-[40px] text-[18px]">
        <li>
          <Link to={PATH.camping}>캠핑</Link>
        </li>
        <li>
          <Link to={PATH.event}>행사</Link>
        </li>
        <li>
          <Link to={PATH.restaurant}>음식점</Link>
        </li>
        <li>
          <Link to={PATH.shopping}>쇼핑몰</Link>
        </li>
        <li>
          <Link to={PATH.community}>커뮤니티</Link>
        </li>
      </ul>
      <div className="flex gap-[40px] items-center text-[18px]">
        <Link to={PATH.login}>로그인</Link>
        <Link
          to={PATH.signUp}
          className="w-30 bg-primary-500 text-center px-5 py-2 rounded text-gray-scale-0"
        >
          회원가입
        </Link>
      </div>
    </nav>
  );
}
