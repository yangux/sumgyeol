import { ExList } from "../utils/experienceList";
import "../styles/experienceitem.css";
import { Link } from "react-router-dom";


export default function ExperienceItem(props: ExList) {
  const { name, where, startDate, endDate, category, image, className } = props;
  return (
    <section className="experience-item">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="experience-item-name">{name}</div>
      <hr />
      <div className="flex-row">
        <div>
          {startDate}~{endDate}
        </div>
        <div>{where}</div>
      </div>
      <Link to="experience">
      <button className="info">자세히보기</button>
      </Link>
    </section>
  );
}
