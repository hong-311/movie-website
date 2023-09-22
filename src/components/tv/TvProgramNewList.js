import React from 'react';
import H2Title from '../common/H2Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; 

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import styled from 'styled-components';

const TvProgramNewBlock = styled.section`
    position: relative; top: -100px; z-index: 3000;
    padding: 20px 0 0 60px; margin-bottom: 50px;
    .swiper, swiper-container{ padding-top: 20px; }
    .swiper-slide{
        position: relative; transition: ease-in transform 0.2s;
        &:hover{
            transform: translateY(-15px);
        }
    }
    .swiper-slide .img_wrap{
        width: 100%; border-radius: 5px; overflow: hidden;
        margin-bottom: 10px;
    }
    .swiper-slide img{
        display: block; width: 100%;
    }
    .swiper-slide figcaption{ 
        font-size: 18px; color: rgba(255,255,255,0.87);
        width: 100%; height: 24px; line-height: 24px;
        overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        opacity: 0;
    }
    .swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;



function TvProgramNewList({ tvprogramnews }) {
    return (
        <TvProgramNewBlock>
            <H2Title name="새로 시작한 프로그램" />
            <Swiper
                slidesPerView={7.2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {tvprogramnews.map(tvprogramnew => (
                    <SwiperSlide key={tvprogramnew.id}>
                        <Link to={`/tvprogramnew/${tvprogramnew.id}`}>
                            <figure>
                                <div className="img_wrap">
                                    <img src={tvprogramnew.poster} alt={tvprogramnew.name} />
                                </div>
                                <figcaption>{tvprogramnew.name}</figcaption>
                            </figure>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TvProgramNewBlock>
    );
}

export default TvProgramNewList;