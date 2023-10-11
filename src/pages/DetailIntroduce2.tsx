import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/detailintroduce.css";
import WorkItemGrid from "../components/work/WorkItemGrid";

function DetailIntroduce2() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="detail-introduce">
        <div className="detail-introduce-title">
          <h3>도예공방 장인, 플로머드의 류보선 작가</h3>
          <h6>4계절 먹어 보았던 꽃을 도자기에 담아내는 작업을 합니다. 도자기마다 다른 모양과 색을 통해 색다른 맛을 느낄 수 있습니다.</h6>
          <h6>(담양 특산품 죽세 공예품 판매장 속 도예공방 플로머드)</h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-1.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-img-part">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-2.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-3.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-4.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-5.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-title">
          <h6>
            담양에서 생활도자전문 플로머드 도예공방은 작품 하나하나 작가의 메시지가 듬뿍 담겨있고 
            <br />
            교육과 체험도 할 수 있으며 맛있는 드립 커피도 함께 할 수 있는 공방 겸 카페입니다.
            <br />
            전시장은 작품 주제인 사계를 작품으로 구현한 공간으로 여러 작품이 모여 
            <br />
            하나의 계절을 표현했기 때문에 다양한 디스플레이를 제공합니다.
          </h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int2-6.png`}
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

export default DetailIntroduce2;
