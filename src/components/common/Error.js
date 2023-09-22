import React from 'react';
import styled from 'styled-components';
import { CiCircleAlert } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; //페이지이동 처리

//스타일 컴포넌트 생성
const ErrorBlock = styled.div`
width: 800px; padding-top: 120px; margin: 0 auto 150px;
text-align: center;
> svg{ 
    width : 100px; height: 100px; margin-bottom: 30px;
    fill: rgba(255,255,255,0.8);  
}
h3{  
    margin-bottom: 30px; font-size: 36px;
    .red{ color: #e9003b; } 
}
.basic_explain{
    margin-bottom: 20px;
    color: rgba(255,255,255,0.8); line-height: 1.8;
}
a{ text-decoration: underline; }
.inquiry_explain{
    margin-top: 5px; margin-bottom: 30px;
    color: rgba(255,255,255,0.8); 
}
.page_btn{
    display: flex; justify-content: center;
    li{
        width: 250px; height: 50px;
        border: 1px solid #fff; border-radius: 5px;
        font-size: 18px; line-height: 46px;
        cursor: pointer;
        &:first-child{ margin-right: 10px; }
    }
}
`;

//에러구역 표시하는 프레젠테이셔널 컴포넌트
function Error() {
    const navigate = useNavigate();

    return (
        <ErrorBlock>
            <CiCircleAlert />
            <h3>죄송합니다. <span className="red">시스템 에러</span>입니다.</h3>
            <p className="basic_explain">
                현재 시스템 오류가 발생했습니다. <br />
                새로 고침 단추를 클릭하거나 나중에 다시 시도하십시오. <br />
                주소표시줄에 페이지 주소를 입력하셨다면 올바르게 입력되었는지 확인하십시오.
            </p>
            <a href="#!">고객센터문의하기 &gt;</a>
            <p className="inquiry_explain">전화 : 1600-0000(평일 09시~18시) / 이메일 tving@cj.net</p>
            <ul className="page_btn">
                <li onClick={() => navigate(-1)}>이전 페이지로 이동</li>
                <li onClick={() => navigate('/')}>메인 페이지로 이동</li>
            </ul>
        </ErrorBlock>
    );
}

export default Error;