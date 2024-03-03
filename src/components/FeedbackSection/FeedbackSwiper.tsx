"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Image from "next/image";
import { FeedbackData, FeedbackDataItem } from "./feedbackData";

const FeedbackSwiper = () => {
    const feedbackData = FeedbackData();

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={2}
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
                                    width={540}
                                    height={312}
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
