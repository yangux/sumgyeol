import { Swiper, SwiperSlide } from "swiper/react";
import MasterIntroduce from "../components/MasterIntroduce";
import { listArr } from "../utils/masterIntroduceList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../styles/masterintroduce.css";

export default function IntroduceCard() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        className="master-introduce"
      >
        {listArr.map((data, i) => (
          <SwiperSlide>
            <MasterIntroduce
              className=""
              name={data.name}
              master={data.master}
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
