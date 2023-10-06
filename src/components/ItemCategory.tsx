// import img1 from "../assets/sec01.png";
// import img2 from "../assets/sec02.png";
// // import img3 from "../../public/assets/experience/ex3.jpg";
// import img4 from "../assets/sec04.png";
import "../styles/itemcategory.css";
import { Link } from "react-router-dom";

function ItemCategory() {
  return (
    <section className="item-category">
      <Link to="/work">
        <div className="category-list">
        <img
            src={`${process.env.PUBLIC_URL}/assets/sec01.png`}
            alt=""
          />
          <div className="category-list-background"></div>
          <h3>공예</h3>
        </div>
      </Link>
      <Link to="/work">
        <div className="category-list">
        <img
            src={`${process.env.PUBLIC_URL}/assets/sec02.png`}
            alt=""
          />
          <div className="category-list-background"></div>
          <h3>식품</h3>
        </div>
      </Link>
      <Link to="/work">
        <div className="category-list">
          <img
            src={`${process.env.PUBLIC_URL}/assets/sec03.png`}
            alt=""
          />
          <div className="category-list-background"></div>
          <h3>의류</h3>
        </div>
      </Link>
      <Link to="/work">
        <div className="category-list">
        <img
            src={`${process.env.PUBLIC_URL}/assets/sec04.png`}
            alt=""
          />
          <div className="category-list-background"></div>
          <h3>가구</h3>
        </div>
      </Link>
    </section>
  );
}

export default ItemCategory;
