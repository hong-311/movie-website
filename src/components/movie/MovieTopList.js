import React from 'react';
import H2Title from '../common/H2Title';
import { Link } from 'react-router-dom'; //페이지 이동 컴포넌트 처리
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

//스타일 컴포넌트 생성
const MovieTopBlock = styled.section`
position: relative; top: -100px; z-index: 3000;
padding: 20px 0 0 60px; margin-bottom: 50px;
.swiper, swiper-container{ padding-top: 20px; }
.swiper-slide{ 
    position: relative; transition: ease-in transform 0.2s;
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
        padding-left: 50px; 
        font-size: 18px; color: rgba(255,255,255,0.87);
        width: 100%; height: 24px; line-height: 24px;
        overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
    }
    .lanking{
        position: absolute; bottom: 0; 
        font-size: 60px; font-weight: bold; 
        line-height: 60px; font-style: italic;
    }

    /* hover effect */
    &:hover{
        transform: translateY(-15px);
        .hover_box{ opacity: 1; }
    }
    .hover_box{
        position: absolute; top: 0; left: 0;
        width: 100%; height: calc(100% - 24px);
        border-radius: 5px; overflow: hidden;
        padding: 30px 20px; background-color: #222;  

        opacity: 0; transition: 0.2s;

        h3{
            width: 100%; height: 30px;
            font-size: 24px; margin-bottom: 10px;
            overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
        }
        .type{
            color: rgb(163, 163, 163); margin-bottom: 10px;
            
        }
        .explain{
            width: 100%; height: 150px; line-height: 30px;
            color: rgb(110, 110, 110); text-align: justify;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }
    }
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity: 0;
}
.swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;



//무비TOP20 전체데이터 가져오는 것이 성공했을 때 보여주는 프레젠테이셔널 컴포넌트
function MovieTopList({movietops}) {
    return (
        <MovieTopBlock>
            <H2Title name="티빙 TOP 10 영화" />
            <Swiper
                slidesPerView={7.2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    movietops.map(movietop => (
                        <SwiperSlide key={movietop.id}>
                            <Link to={`/movietop/${movietop.id}`}>
                                <figure>
                                    <div className="img_wrap">
                                        <img src={movietop.poster} alt={movietop.name} />
                                    </div>
                                    <figcaption>{movietop.name}</figcaption>
                                </figure>
                                <div className="hover_box">
                                    <h3>{movietop.name}</h3>
                                    <p className="type">{movietop.type}</p>
                                    <p className="explain">{movietop.explain}</p>
                                </div>
                                <span className="lanking">{movietop.id}</span>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </MovieTopBlock>
    );
}

export default MovieTopList;