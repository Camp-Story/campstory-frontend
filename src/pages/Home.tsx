import { apiInstance, goCampingInstance, tourApiInstance } from "../utils/axiosInstance";

function Home() {
  const handleClickGoCamping = async () => {
    apiInstance
      .post("/login", {
        email: "sypark041754@gmail.com",
        password: "qwe123!@#",
      })
      .then((response) => {
        console.log(response.statusText);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
    const response = await goCampingInstance.get("/basedList", {
      params: {
        numOfRows: 5,
      },
    });
    const tour = await tourApiInstance.get("/searchKeyword1", {
      params: {
        keyword: "파크",
      },
    });

    console.log(response.data);
    console.log(tour.data);
  };

  return (
    <div>
      <div className="text-highlight">강조</div>
      <div className="text-banner">배너</div>
      <div className="text-title">제목</div>
      <div className="text-sub-title">서브타이틀</div>
      <div className="text-body">본문</div>
      <div className="text-explain">설명</div>

      <button className="p-2 border rounded-lg m-3 bg-red-100" onClick={handleClickGoCamping}>
        api test (console 창으로 확인)
      </button>
    </div>
  );
}

export default Home;
