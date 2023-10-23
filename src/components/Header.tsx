// import "../styles/header.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyPage from "./MyPage";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  height: 32px;
  img {
    height: 100%;
  }
`;
const Gnb = styled.ul`
  display: flex;

  li {
    margin-right: 5.6rem;
    color: var(--text-gray-60);
  }
  li:last-child {
    margin-right: 0;
  }
  li:hover {
    color: var(--text-gray-70);
  }
  li::after {
    margin-top: 0.12rem;
    display: block;
    content: "";
    border-bottom: solid 1.5px var(--text-gray-70);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
  li:hover::after,
  li:active::after {
    transform: scaleX(1);
  }
`;
const GnbLink = styled(Link)`
  font-family: "Pretendard-Regular";
  font-size: 1rem;
`;

const UserMenu = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 1rem;
  }
  li.iconCart {
    width: 24px;
    height: 24px;
    margin-right: 0;
    cursor: pointer;
  }
`;

const BtnLogin = styled.button`
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--text-gray-50);
  border-radius: 25px;
  padding: 0.3em 1em;
  font-size: 12px;
`;

export default function Header() {
  const [modal, setModal] = useState(false);
  return (
    <HeaderContainer>
      <Inner>
        <Link to="/">
          <Logo>
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="숨결" />
          </Logo>
        </Link>
        <Gnb>
          <li>
            <GnbLink to="/introduce">장인소개</GnbLink>
          </li>
          <li>
            <GnbLink to="/work">장인작품</GnbLink>
          </li>
          <li>
            <GnbLink to="/experience">체험하기</GnbLink>
          </li>
        </Gnb>
        <UserMenu onClick={() => setModal(true)}>
          <li>
            <BtnLogin>로그인</BtnLogin>
          </li>
          <li className="iconCart">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icon_cart.png`}
              alt="cart icon"
            />
          </li>
        </UserMenu>
      </Inner>
      {modal && <MyPage setModal={setModal} />}
    </HeaderContainer>
  );
}
