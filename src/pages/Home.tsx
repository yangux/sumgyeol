import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main_Banner from "../components/Main_Banner";

function Home() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="wrapper">
        <Main_Banner/>
        {/* 1. 메인 섹션 */}
        {/* 2. 내 주변 위치 */}
        <h1>main page</h1>
        {/* 3. 띠 배너 */}
        {/* 4. 주제별 트레킹 */}

      </main>
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default Home;
