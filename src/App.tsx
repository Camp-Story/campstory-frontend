import { FormEvent, useState } from "react";
import { apiInstance } from "./utils/axiosInstance";

function App() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    // apiInstance
    //   .post("/login", { email, password })
    //   .then((response: { statusText: string }) => {
    //     if (response.statusText === "OK") {
    //       alert("로그인 성공");
    //     } else {
    //       alert("로그인 실패");
    //     }
    //   })
    //   .catch((e: Error) => {
    //     console.log(e);
    //   });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 ring-4 ring-yellow-400 ring-offset-2"
      >
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit">submit</button>
      </form>
      <div className="text-highlight">강조조</div>
      <div className="text-banner">배너너</div>
      <div className="text-title">제목</div>
      <div className="text-sub-title">서브타이틀</div>
      <div className="text-body">본문</div>
      <div className="text-explain">설명</div>
    </div>
  );
}

export default App;
