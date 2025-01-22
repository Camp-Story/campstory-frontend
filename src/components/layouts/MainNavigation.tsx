import { Link } from "react-router";

export default function MainNavigation() {
  return (
    <nav className="flex items-center justify-between">
      <h1>
        <Link to="/">CAMPSTORY</Link>
      </h1>
      <ul className="flex gap-[40px] text-body1">
        <li>
          <Link to="/">캠핑</Link>
        </li>
        <li>
          <Link to="/">행사</Link>
        </li>
        <li>
          <Link to="/">음식점</Link>
        </li>
        <li>
          <Link to="/">쇼핑몰</Link>
        </li>
        <li>
          <Link to="/">커뮤니티</Link>
        </li>
      </ul>
      <div className="flex gap-[40px] items-center">
        <Link to="/">로그인</Link>
        <Link
          to="/"
          className="w-24 bg-primary-500 text-center px-5 py-2 rounded text-gray-scale-0"
        >
          회원가입
        </Link>
      </div>
    </nav>
  );
}
