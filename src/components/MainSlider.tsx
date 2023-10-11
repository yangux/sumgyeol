import React, { useRef, useState } from "react";
// import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkItem from "../components/work/WorkItem";
import { itemArr } from "../utils/workItemsdata";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../styles/mainslider.css";

export default function App() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={2.7}
        navigation
      >
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
              category={data.category}
              image={data.image}
              key={i}
            />
          </SwiperSlide>
        ))}
        {itemArr.map((data, i) => (
          <SwiperSlide>
            <WorkItem
              className="mainSize"
              name={data.name}
              brand={data.brand}
              originalPrice={data.originalPrice}
              discountRate={data.discountRate}
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
