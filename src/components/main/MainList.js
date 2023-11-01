import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
//스와이퍼 처리
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

//스타일 컴포넌트 생성
const MainBannerBlock = styled.main`
    width: 100%;
    .swiper-button-next:after, .swiper-button-prev:after{
        color: #fff; opacity: 0.5; font-size: 28px;
        transition: 0.2s;
    }
    .swiper-button-next:hover:after, .swiper-button-prev:hover:after{
        opacity: 1;
    }
    .swiper-slide{ position: relative; }
    .swiper-slide img {
        width: 100%; 
        height: auto;
    }
    .swiper-slide::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px; /* 블러 효과의 높이 조절*/
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
        pointer-events: none;
    }
    p{
        position: absolute; left: 80px; bottom: 150px; z-index: 5500;
        font-size: 15px; font-weight: 500; 
    }
    a{
        position: absolute; right: 50px; bottom: 120px; z-index: 5500;
        padding: 15px 40px; border: 1px solid rgba(255,255,255,0.5);
        border-radius: 5px; background-color: rgba(255,255,255,0.15);
        transition: 0.3s;
    }
    a:hover{
        border: 1px solid rgba(255,255,255,1); 
        background-color: rgba(255,255,255,0.3);
    }
    .swiper-pagination{
        width: auto; left: 105px; bottom: 120px; 
    }
    .swiper-pagination-bullet{
        width: 12px; height: 12px; 
        background-color: #fff; opacity: 0.2;
    }
    .swiper-pagination-bullet-active{
        background-color: #fff; opacity: 1; 
    }
    .swiper-playpause{
        position: absolute; z-index: 300;
        left: 80px; bottom: 120px;
        width: 20px; height: 20px;
        cursor: pointer;
        span{
            display: block; width: 12px; height: 14px; margin: 3px 4px;
            &.active{ display: none; }
        }
        .btn_pause{
            border-left: 4px solid #fff; border-right: 4px solid #fff;
        }
        .btn_play{
            background-image: url(https://www.tving.com/img/icon_play_arow.svg);
            background-repeat: no-repeat; background-position: center;
        }
    }
`;

//메인이미지 슬라이더를 표시하는 프레젠테이셔널 컴포넌트
function MainList({ mains }) {
    //swiper요소(메인이미지)를 담는 state선언
    const [swiper, setSwiper] = useState(null); //초기 값은 비워두기

    //play/pause관련 state선언
    const [cnt, setCnt] = useState(false); //play상태를 false, pause를 true상태로 처리

    //특정 객체 선택 - ref로 처리
    const btnPause = useRef();
    const btnPlay = useRef();

    //초기 실행시 메인이미지 스와이퍼를 담을 예정
    useEffect(() => {
        const swiperinstance = document.querySelector('.mainSwiper').swiper;
        setSwiper(swiperinstance);
    },[]);

    //버튼의 클릭 이벤트 함수
    const onHandleClick = () => {
        if(cnt){ //일시정지 상태 => 플레이버튼이 보이는 상태
            btnPause.current.classList.remove('active');
            btnPlay.current.classList.add('active');
            swiper.autoplay.resume(); //재실행
        }else{ //플레이 상태
            btnPause.current.classList.add('active');
            btnPlay.current.classList.remove('active');
            swiper.autoplay.pause(); //일시정지
        }
        setCnt(!cnt); //cnt값을 클릭할 때마다 반전
    }

    return (
        <MainBannerBlock>
            <Swiper
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mainSwiper"
            >
                {
                    mains.map(main => (
                        <SwiperSlide key={main.id}>
                            <img src={main.url} alt="메인이미지" />
                            <p>{main.explain}</p>
                            <a href={main.link}>자세히보기</a>
                        </SwiperSlide>
                    ))
                }

                {/* play/pause처리 */}
                <div className="swiper-playpause">
                    <span 
                        className="btn_pause"
                        ref={btnPause}
                        onClick={onHandleClick}
                    ></span>
                    <span 
                        className="btn_play active" 
                        ref={btnPlay}
                        onClick={onHandleClick}
                    ></span>
                </div>
            </Swiper>
        </MainBannerBlock>
    );
}

export default MainList;