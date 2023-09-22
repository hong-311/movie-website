import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

function SwiperTest() {
    return (
        <div>
            {/* 스와이퍼 기능을 전체 묶는 컴포넌트 */}
            <Swiper
                effect={"fade"}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
            >
                {/* 슬라이드 한장한장의 의미하는 컴포넌트 */}
                <SwiperSlide>슬라이드1</SwiperSlide>
                <SwiperSlide>슬라이드2</SwiperSlide>
                <SwiperSlide>슬라이드3</SwiperSlide>
                <SwiperSlide>슬라이드4</SwiperSlide>
                <SwiperSlide>슬라이드5</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperTest;