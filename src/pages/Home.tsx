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
        <Link to="introduce">
          <MainBanner />
        </Link>
      <main className="wrapper">
      </main>
      <ItemCategory />
      <LimitedQuantity />
      <section className="wrapper">
        <YouTubeList />
        <IntroduceCard></IntroduceCard>
      </section>
      <ExperienceSlide />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
