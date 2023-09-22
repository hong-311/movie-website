import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

//styled
import styled from 'styled-components';

//스타일컴포넌트생성
const LoadingBlock = styled.section`
position: relative; top: -100px; z-index: 3000;
padding: 20px 0 0 60px; margin-bottom: 50px;
overflow: hidden;
h2{ width: 500px; height: 35px; margin-bottom: 20px; background-color: #222; text-indent: -999em; }
.swiper, swiper-container{ padding-top: 20px; }
.swiper-slide{
    position: relative; transition: ease-in transform 0.2s;
    &:hover{
        transform: translateY(-15px);
    }
}
.swiper-slide .img_wrap{
    width: 100%; height: 17vw; border-radius: 5px; overflow: hidden;
    margin-bottom: 10px; background-color: #222;  
}
.swiper-slide img{
    display: block; width: 100%;
}
.swiper-slide figcaption{ 
    width: 100%; height: 26px; 
    background-color: #222; 
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity: 0;
}
.swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;

//리스트들이 로딩중일 때 보여질 프레젠테이셔널 컴포넌트
function LoadingList() {
    //for문은 JSX에서 직접 사용할 수 없어서 따로 위에서 함수로 만들어서 처리해줘야 함
    const repeatLoading = () => {
        let loadingArray = []; //빈배열 처리 - for문을 통해 생성

        for(let i=0;i<10;i++){
            loadingArray.push(
                <SwiperSlide key={i}>
                    <figure>
                        <div className="img_wrap">
                        </div>
                        <figcaption></figcaption>
                    </figure>
                </SwiperSlide>
            );
        }

        return loadingArray; //배열데이터를 함수가 반환
    }
    return (
        <LoadingBlock>
            <h2>예시 타이틀</h2>
            <Swiper 
                navigation={true}
                modules={[Navigation]}
                slidesPerView={7.2}
                spaceBetween={10}
            >
                {/* swiperslide를 반복 - 데이터를 받지 않기 때문에 map()을 사용X */}
                {
                    repeatLoading()
                }
            </Swiper>
        </LoadingBlock>
    );
}

export default LoadingList;