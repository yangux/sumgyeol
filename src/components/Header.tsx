// import img1 from "../assets/sumgyeol.svg";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <h1>
          <img
            src={`${process.env.PUBLIC_URL}/assets/sumgyeol.svg`}
            alt=""
            className="logo"
          />
        </h1>
      </Link>
      <ul className="header-menu">
        <li>
          <Link to="/introduce">장인소개</Link>
        </li>
        <li>
          <Link to="/work">장인작품</Link>
        </li>
        <li>
          <Link to="/experience">체험하기</Link>
        </li>
      </ul>
      <div className="login-flex" onClick={(e) => setIsActive(!isActive)}>
        <div>
          <button className="plain round">로그인</button>
        </div>
        <div className="person-icon">
          <img src={`${process.env.PUBLIC_URL}/assets/person.svg`} alt="" />
        </div>

        {isActive && (
          <div className="login-content">
            <div className="login-content-menu">
              <div>장인작품</div>
              <div className="login-content-menu-aside-line"></div>
              <div>체험하기</div>
            </div>
            <hr className="login-content-menu-bottom-line" />
            <div className="login-content-select">
              <div>
                <div className="login-content-wish-list">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/workitem/12각 찻상.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="login-content-wish-list-text">
                    <p className="login-content-wish-list-title">구매하기</p>
                    <p className="login-content-wish-list-item">
                      [박숨결 장인] 나비문양 나전칠기 찻상
                    </p>
                    <p className="login-content-wish-list-buy">60,000원</p>
                  </div>
                  <div className="login-content-wish-list-x"></div>
                </div>
                <div className="login-content-wish-list">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/workitem/12각 찻상.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="login-content-wish-list-text">
                    <p className="login-content-wish-list-title">구매하기</p>
                    <p className="login-content-wish-list-item">
                      [박숨결 장인] 나비문양 나전칠기 찻상
                    </p>
                    <p className="login-content-wish-list-buy">60,000원</p>
                  </div>
                  <div className="login-content-wish-list-x"></div>
                </div>
                <div className="login-content-select-total">총 금액 : 120,000원</div>
              </div>
              <div>
                <button className="primary login-content-select-btn">구매하기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
