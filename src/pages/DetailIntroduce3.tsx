import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/detailintroduce.css";
import WorkItemGrid from "../components/work/WorkItemGrid";

function DetailIntroduce3() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="detail-introduce">
        <div className="detail-introduce-title">
          <h3>오묘한 옥의 매력에 빠진 장인, 가원공방의 엄익평 명인</h3>
          <h6>
          옥은 한 덩어리라도 결이 고르지 않고 강도도 다르기에 결을 읽는 눈이 필요합니다.
          </h6>
          <h6>(서울시 무형문화재 제 37호 엄익평)</h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int3-1.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-img-part">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int3-2.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int3-3.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-title">
          <h6>
          넓게는 ‘아름다운 돌’을 이르는 옥은 광물학적으로 보자면 광택이 있는 백색의 연옥, 푸른빛의 경옥으로 나뉩니다.
            <br />
            옥 자체의 영롱한 아름다움이 드러날 수 있도록 선을 위주로 디자인해 간결한 아름다움을 표현했습니다.
            <br />
            또한 옥을 가늘게 파내고 금・은・동을 두드려 입히는 옥 상감법을 개발해 특허를 취득했습니다.
          </h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int3-4.png`}
            alt=""
          />
        </div>
      </main>
      <WorkItemGrid />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default DetailIntroduce3;
