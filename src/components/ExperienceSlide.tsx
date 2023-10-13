import { Swiper, SwiperSlide } from "swiper/react";
import ExperienceItem from "../components/ExperienceItem";
import { exListArr } from "../utils/experienceList";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../styles/experienceitem.css";

export default function ExperienceSlide() {
  return (
    <div className="swiper">
      <i className="icon-arrow-long-right swiper-button-next"></i>
      <i className="icon-arrow-long-left swiper-button-prev"></i>
      <div className="experience-slide">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={40}
          slidesPerView={3}
          className="experience-item"
        >
          {exListArr.map((data, i) => (
            <SwiperSlide>
              <Link to="/experience">
              <ExperienceItem
                className=""
                name={data.name}
                where={data.where}
                startDate={data.startDate}
                endDate={data.endDate}
                category={data.category}
                image={data.image}
                key={i}
              /></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
