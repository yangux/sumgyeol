import { List } from "../utils/masterIntroduceList";
import "../styles/masterintroduce.css";

export default function BestIntroduceCare(props: List) {
  const { name, master, category, image, className } = props;
  return (
    <div className="master-introduce-card">
      <img src={image} alt="" />
      <div className="master-introduce-card-background"></div>
      <div className="master-introduce-text">
        <h6 className="">{master}</h6>
        <hr />
        <p>{name}</p>
      </div>
    </div>
  );
}