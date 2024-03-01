"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { feedbackData, FeedbackDataItem } from "./feedbackData";
import Image from "next/image";

const FeedbackSwiper = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
            >
                {feedbackData.map(
                    ({
                        image,
                        name,
                        siteView,
                        id,
                        description,
                    }: FeedbackDataItem) => (
                        <SwiperSlide key={id}>
                            <div>
                                <h4>{name}</h4>
                                <Image
                                    src={image}
                                    alt={name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                                <p>{siteView}</p>
                                <p>{description}</p>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default FeedbackSwiper;
