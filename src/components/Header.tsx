import img1 from "../assets/sumgyeol.svg";
import "../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <header className="header">
      <h1><img src={img1} alt="" className="logo"/></h1>
      <ul className="header-menu">
        <li>
          <a href="">장인소개</a>
        </li>
        <li>
          <a href="">장인작품</a>
        </li>
        <li>
          <a href="">체험하기</a>
        </li>
      </ul>
      <div>
      <a href="#"><FontAwesomeIcon icon={faBars} /></a>
      </div>
    </header>
  );
}
