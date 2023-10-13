import { List } from "../utils/masterIntroduceList";
import "../styles/masterintroduce.css";  


export default function BestIntroduceCare(props: List) {
  const { name, master, brand, workPlace, category, image, className } = props;
  return (
    <div className="master-introduce-card best-int-grid">
      <img src={image} alt="" />
      <div className="master-introduce-card-background"></div>
      <div className="best-master-introduce-text">
        <h6 className="">{workPlace}</h6>
        <hr />
        <p>{brand}</p>
      </div>
    </div>
  );
}
