"use client";

import { feedbackData } from "./feedbackData";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import { feedbackData, FeedbackDataItem } from "./feedbackData";
// import Image from "next/image";

const FeedbackSwiper = () => {
    console.log(feedbackData);
    return (
        <div>
            <h1>Swiper Swiper</h1>
            {/* <Swiper
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
                                    sizes="50px, 100px"
                                    fill
                                />
                                <p>{siteView}</p>
                                <p>{description}</p>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper> */}
        </div>
    );
};

export default FeedbackSwiper;
