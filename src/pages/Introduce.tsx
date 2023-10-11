import Header from "../components/Header";
import Footer from "../components/Footer";
import BestIntroduce from "../components/BestIntroduce";
import "../styles/introducepage.css";
import KakaoMap from "../components/KakaoMap";

export default function Introduce() {
  return (
    <div>
      <Header />
      <div className="wrapper ">
        <div className="introduce-page">
          <BestIntroduce></BestIntroduce>
        </div>
        <KakaoMap />
        <div className="interview-card">
          <div className="interview-card-text">
            <p className="sub-title">서울시 무형문화재 제 37호</p>
            <h5 className="title">옥장 엄익평</h5>
            <p className="paragraph">
              충남 논산에서 태어났다. 1974년 옥공예에 입문하여, 수 많은 어려움이
              있었지만, 묵묵히 옥 다루는 기능을 연마, 78년 독립을 하여 공장을
              운영하였다. 깊이 있는 옥 기능인이 되기 위해 많은 공구를 개발하고
              연구 해야 했다.
            </p>
            <p className="paragraph">
            많은 고심 끝에 옥 다루는 어려움을 극복할 수 있었고, 다양한 옥
              장식품, 장신구를 만들어 낼 수가 있었다. 그러한 열정과 노력으로,
              89년 ‘서울공예품대전’을 시작으로 ‘대한민국 전승공예대전 문화부
              장관상’, ‘문화재위원장상’, ‘국무총리상’을 수상하며, 노동부에서
              선정하는 ‘대한민국 기능전승자’가 되어 활동하였다.
            </p>
            <p className="paragraph">
            옥에 금속 상감을 하는 기술 개발로 특허를 획득하고, 이러한 기술들을
              활용한 작품으로 ‘산업포장의 훈장’을 받기도 하였다. 2006년 ‘서울시
              무형문화재 제 37호 옥장’으로 지정되었다.
            </p>
            <p className="paragraph">
            현재까지 우리 전통의 맥을 잇는 옥장으로서, 작품활동을 통해 옥공예
              양성교육 및 활성화, 전통문화의 올바른 계승발전에 대한 인식을
              확산하기 위해 활발한 활동을 하고 있다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
