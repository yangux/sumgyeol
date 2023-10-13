import "../styles/limitedquantity.css";
import MainSlider from "../components/MainSlider";
import "../styles/buttons.css";
import { Link } from "react-router-dom";

export default function LimitedQuantity() {
  return (
    <section className="limitedquantity">
      <div className="limitedquantity-title">
        <h4>
          장인들의 <br />
          한정수량 상품을
          <br />
          지금 바로 만나보세요
        </h4>
        <p className="">
          마감임박 상품들을
          <br />
          놓치지마세요.
        </p>
        <Link to="work">
          <button className="primary">더 많은 상품 보기</button>
        </Link>
      </div>
      <div>
        <MainSlider />
      </div>
    </section>
  );
}
