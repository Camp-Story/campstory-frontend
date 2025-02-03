import { PATH } from "@constants/path";
import { Form, Link } from "react-router-dom";

export default function MainNavigation({ token }: { token: string }) {
  return (
    <nav className="w-[1440px] mx-auto px-main flex items-center justify-between">
      <h1>
        <Link to={PATH.home}>
          <img src="/images/campstory-logo.png" />
        </Link>
      </h1>
      <ul className="flex gap-10 text-sub-title font-normal">
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
      {!token ? (
        <div className="flex gap-5 items-center text-sub-title">
          <Link to={PATH.login}>로그인</Link>
          <Link
            to={PATH.signUp}
            className="w-30 bg-primary-500 text-center px-5 py-2 rounded text-gray-scale-0"
          >
            회원가입
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 items-center text-sub-title font-normal">
          <Link
            to={PATH.information}
            className="w-10 h-10 rounded-full bg-gray-scale-100 flex items-center justify-center overflow-hidden"
          >
            <img src="/public/vite.svg" alt="프로필 이미지" className="size-full object-cover" />
          </Link>
          <Form
            action={PATH.logout}
            method="post"
            className="bg-gray-scale-100 text-center px-5 py-2 rounded text-gray-scale-400 cursor-pointer"
          >
            <button type="submit">로그아웃</button>
          </Form>
        </div>
      )}
    </nav>
  );
}
