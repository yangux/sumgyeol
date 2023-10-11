import "../styles/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DropDown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>
        관련기관
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
      {isActive && (

      <div className="dropdown-content">
        <div className="dropdown-item">양수연</div>
        <div className="dropdown-item">서유민</div>
        <div className="dropdown-item">최가은</div>
        <div className="dropdown-item">김지윤</div>
      </div>
      )}
    </div>
  );
}
