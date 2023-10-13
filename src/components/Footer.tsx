import Wave from "react-wavify";
import "../styles/footer.css";
import DropDown from "./DropDown";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-flex-row">
        <div>
          <h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/sumgyeol.svg`}
              alt=""
              className="logo"
            />
          </h1>
          <p>서울특별시 강동구 고덕로 429 4층 강동캠퍼스: 02-6249-1602</p>
          <p>COPYRIGHT 2023 숨결 ALL RIGHT RESERVED.</p>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
      <Wave
        fill="var(--main-brown-20)"
        paused={false}
        style={{ display: "flex" }}
        className="footer-wave"
        options={{
          height: 80,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </footer>
  );
}
