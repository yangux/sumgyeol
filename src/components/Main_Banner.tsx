import "../styles/main_banner.css";

export default function Main_Banner() {
  return (
    <section className="main-banner">
      <div className="main-banner-text">
        <h6 className="sub-banner-title">한산모시짜기 국가무형문화재 14호</h6>
        <p className="sub-banner-desc">
          맑은 시냇물 흰 비단 펼쳐놓은 듯, 멀리 별포로 통해 흐르고, 밭두둑
          수놓은 듯 착잡 하여 긴 방죽에 둘렀구나”라고 노래한 한산에서, <br />{" "}
          바로 그 이름도 유명한 모시가 생산된다
        </p>
        <h1>바람을 입다</h1>
        <h5>2023.09.22 - 10.13</h5>
        <p className="sub-banner-address">충청남도 서천시 한산면 한산모시관 </p>
      </div>
    </section>
  );
}
