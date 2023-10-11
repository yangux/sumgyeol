import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/detailintroduce.css";
import WorkItemGrid from "../components/work/WorkItemGrid";

function DetailIntroduce1() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="detail-introduce">
        <div className="detail-introduce-title">
          <h3>나무를 사랑한 목공예가, 송명목공예 김진용명인</h3>
          <h6>
            담양에서 전통짜맞춤기법을 통해 전통가구, 차실가구, 옻칠제품 등을
            자체 제작하는 김진용 명인
          </h6>
          <h6>(담양군공예명인 제 7호 김진용)</h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int1-1.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-img-part">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int1-2.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int1-3.png`}
            alt=""
          />
        </div>
        <div className="detail-introduce-title">
          <h6>
            우리나라의 부채는 형태상으로 크게 둥근 모양의 부채와 접고 펼 수 있는
            접(摺)부채로 나눌 수 있습니다
            <br />
            그 중 접부채인 합죽선(合竹扇)은 현재까지 전승되는 최고 수준의
            정교함과 세련미를 갖춘 부채로서,
            <br />
            고려시대부터 나전, 금속, 칠, 옥공예 등과 접목되어 나라를 대표하는
            공예품이었습니다.
          </h6>
        </div>
        <div className="detail-introduce-img-100">
          <img
            src={`${process.env.PUBLIC_URL}/assets/introduce/int1-4.png`}
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

export default DetailIntroduce1;
