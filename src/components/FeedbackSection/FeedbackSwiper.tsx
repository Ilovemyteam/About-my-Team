"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import feedbacks from "./feedbackData.json";
import Image from "next/image";

interface FeedbackCard {
    name: string;
    image: string;
    video?: string;
    type: string;
    discription: string;
    id: string;
}
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
                {feedbacks.map(
                    ({
                        image,

                        name,
                        type,
                        id,
                        discription,
                    }: FeedbackCard) => (
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
                                <p>{type}</p>
                                <p>{discription}</p>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default FeedbackSwiper;
