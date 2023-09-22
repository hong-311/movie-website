import React from 'react';
import H2Title from '../common/H2Title';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import styled from 'styled-components';

const LiveSeriesBlock = styled.main`
    padding-bottom: 60px; margin-bottom: 50px;
    .swiper, swiper-container{ padding-top: 20px; }
    .swiper-slide{ 
        position: relative; transition: ease-in transform 0.2s;
        &:hover{
            transform: translateY(-15px);
        }
        &:nth-child(n+10){
            figcaption{ padding-left: 90px;  }
        }
        .img_wrap{
            width: 100%; border-radius: 5px; overflow: hidden;
            margin-bottom: 10px;
            img{
                display: block; width: 100%;
            }
        }
        figcaption{ 
            padding-left: 60px; 
            width: 100%; height: 60px; line-height: 30px;
            overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
            h3{ font-size: 18px; font-weight: normal; color: rgba(255,255,255,0.87); }
            p{ font-size: 16px; font-weight: normal;  color: rgba(255,255,255,0.87);}
        }
        .lanking{
            position: absolute; bottom: 5px; 
            font-size: 60px; font-weight: bold; 
            line-height: 60px; font-style: italic;
           
        }
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        opacity: 0;
    }
    .swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;

function LiveSeriesList({ liveseries }) {
    return (
        <LiveSeriesBlock>
            <H2Title name="인기 정주행 채널" />
            <Swiper
                navigation={true}
                slidesPerView={5.2}
                spaceBetween={10}
                modules={[Navigation]} 
            >
                {liveseries.map(liveserie => (
                    <SwiperSlide key={liveserie.id}>
                        <a href={liveserie.link} target="_blank" rel="noopener noreferrer">
                            <figure>
                                <div className="img_wrap">
                                    <img src={liveserie.poster} alt={liveserie.name} />
                                </div>
                                <figcaption>
                                    <h3>{liveserie.name}</h3>
                                    <p>{liveserie.ratings}</p>
                                </figcaption>
                            </figure>
                            <span className="lanking">{liveserie.id}</span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </LiveSeriesBlock>
    );
}

export default LiveSeriesList;