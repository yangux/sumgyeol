import { Swiper, SwiperSlide } from "swiper/react";
import ExperienceItem from "../components/ExperienceItem";
import { exListArr } from "../utils/experienceList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../styles/experienceitem.css";

export default function ExperienceSlide() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        className="experience-item"
      >
        {exListArr.map((data, i) => (
          <SwiperSlide>
            <ExperienceItem
              className=""
              name={data.name}
              where={data.where}
              startDate={data.startDate}
              endDate={data.endDate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
