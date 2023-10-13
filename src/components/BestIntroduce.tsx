import BestIntroduceCard from "../components/BestIntroduceCard";
import { listArr } from "../utils/masterIntroduceList";
import { Link } from "react-router-dom";

import "../styles/masterintroduce.css";

export default function BestIntroduce() {
  return (
    <>
      <h4 className="best-introduce-title bold">인기장인들</h4>
      <div className="wrapper">
   
          <div className="best-introduce-page">
            {listArr.map((data, i) => (
              <BestIntroduceCard
                className=""
                name={data.name}
                workPlace={data.workPlace}
                brand={data.brand}
                image={data.image}
                key={i}
              />
            ))}
          </div>
      </div>
    </>
  );
}
