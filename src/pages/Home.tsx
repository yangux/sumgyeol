import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import { Link } from "react-router-dom";
import LimitedQuantity from "../components/LimitedQuantity";
import ItemCategory from "../components/ItemCategory";
import IntroduceCard from "../components/IntroduceCard";
import ExperienceSlide from "../components/ExperienceSlide";
import YouTubeList from "../components/YouTubeList";

function Home() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="wrapper">
        {/* 1. 메인 배너 */}
        <Link to="introduce">
          <MainBanner />
        </Link>
        {/* 2. 내 주변 위치 */}
        {/* 3. 띠 배너 */}
        {/* 4. 주제별 트레킹 */}
      </main>
      <ItemCategory/>
      <LimitedQuantity/>
      <section className="wrapper">
        <YouTubeList/>
        <IntroduceCard></IntroduceCard>
        <ExperienceSlide/>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
