import React from 'react';
import H2Title from '../common/H2Title'; //제목컴포넌트
import { Link } from 'react-router-dom'; //페이지이동 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import styled from 'styled-components';

//스타일 컴포넌트 생성
const TvingBestBlock = styled.section`
    position: relative; top: -100px; z-index: 3000;
    padding: 30px 0 0 60px; margin-bottom: 50px;
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
        font-size: 15px; color: rgba(255,255,255,0.87);
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        opacity: 0;
    }
    .swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;


//티빙TOP20 전체리스트를 보여주는 프레젠테이셔널 컴포넌트
function TvingBestList({tvingbests}) {
    return (
        <TvingBestBlock>
            <H2Title name="티빙에서 꼭 봐야하는 컨텐츠" />
            <Swiper 
                navigation={true}
                modules={[Navigation]}
                slidesPerView={7.2}
                spaceBetween={10}
            >
                {
                    tvingbests.map(tvingbest => (
                        <SwiperSlide key={tvingbest.id}>
                            {/* 루트주소/tvingbest/1 */}
                            <Link to={`/tvingbest/${tvingbest.id}`}>
                                <figure>
                                    <div className="img_wrap">
                                        <img src={tvingbest.poster} alt={tvingbest.name} />
                                    </div>
                                    <figcaption>{tvingbest.name}</figcaption>
                                </figure>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </TvingBestBlock>
    );
}

export default TvingBestList;