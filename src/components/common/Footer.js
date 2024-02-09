import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SNS from '../../apis/sns.json'; //내장json파일 호출
import BRAND from '../../apis/brand.json';
import GROUP from '../../apis/group.json';

//스타일컴포넌트 생성
const FooterBlock = styled.footer`
    width: 100%; padding: 0 60px; 

    .f_top{
        width: 100%; height: 60px; line-height: 60px;
        border-bottom: 1px solid #222;
        display: flex; justify-content: space-between;
    }
    .notice{
        display: flex; 
        white-space: nowrap;
        overflow: visible; 
        h3{
            margin-right: 20px;
            font-size: 18px; font-weight: normal; color: rgb(110, 110, 110);
        }
        a{ font-size: 18px; font-weight: bold; color: rgb(163, 163, 163); }
    }
    .family{
        ul{
            display: flex;
            li{
                margin-left: 20px;
            
                select {
                    font-size: 18px; font-weight: bold; color: rgb(163, 163, 163);
                    background-color: black;
                    border-style: none;
                    appearance: none;
                    white-space: nowrap;
                }
                option{
                    font-size: 18px; font-weight: bold; color: rgb(163, 163, 163);
                    background-color: rgb(32, 32, 32);
                    height: 50px;
                        &:hover {
                            background-color: rgb(50, 50, 50);
                        }
                    
                }
                a{
                    white-space: nowrap;
                    overflow: visible; 
                    font-size: 16px; font-weight: bold; color: rgb(163, 163, 163);
                }
            }
        }
    }
    .f_bottom{
        padding-bottom: 130px;
        .f_nav{
            white-space: nowrap;
            overflow: visible; 
            display: flex; height: 60px; line-height: 60px;
            li{
                margin-right: 30px;
                font-size: 18px; color: rgb(163, 163, 163);
                &:nth-child(3){ font-weight: bold; }
            }
        }
        .footer_text{
            span{
                font-size: 16px; font-weight: normal; 
                color: rgb(110, 110, 110); line-height: 24px;
                margin-right: 20px;
                &::after{
                    content: '|'; font-size: 10px;
                    position: relative; top: -3px; left: 10px;
                }
                &:last-child::after{ display: none; }
            }
        }
        .copy{
            font-size: 16px; font-weight: normal; 
            color: rgb(110, 110, 110); line-height: 24px;
        }
        .sns{
            padding: 30px 0; display: flex;
            li{ margin-right: 10px; } 
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0 10px;
    
        .f_top h3,
        .f_top a,
        .family ul li a,
        .f_bottom .f_nav li,
        .f_bottom .footer_text span,
        .f_bottom .copy {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .f_bottom .sns li img {
            width: 30px; 
            height: auto;
            margin-bottom: 10px; 
        }
    }
    @media screen and (max-width: 512px) {
        padding: 0 10px;
    
        .f_top h3,
        .f_top a,
        .family ul li a,
        .f_bottom .f_nav li,
        .f_bottom .footer_text span,
        .f_bottom .copy {
            font-size: 12px;
        }

        .f_bottom .sns li img {
            width: 25px; 
            
    }

`;
  

//footer파트 컴포넌트
function Footer({brand}) {
    //텍스트 배열데이터
    const footerMenus = ['고객센터','이용약관','개인정보처리방침','청소년 보호정책','법적고지','이벤트','인재채용'];
    const footerTexts = [
        ['대표이사 : YANG JIEUL','사업자정보확인','사업자등록번호 : 188-88-01893','통신판매신고번호 : 2020-서울마포-3641호'],
        ['사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)','호스팅사업자 : 씨제이올리브네트웍스(주)'],
        ['고객문의 바로가기','대표메일 : tving@cj.net','고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)'],
        ['ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780','Mnet 고객센터(방송편성문의) : 1855-1631']
    ];

    const [selected, setSelected] = useState("");
    const [brandOpen, setBrandOpen] = useState(false);
    const [groupOpen, setGroupOpen] = useState(false);
    const brandSelectRef = useRef(null);
    const groupSelectRef = useRef(null);
  
    const handleSelect = (e, type) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue);

        if (type === "brand") {
            const selectedBrand = BRAND.brand.find((brand) => brand.name === selectedValue);
            if (selectedBrand && selectedBrand.url) {
              window.open(selectedBrand.url, "_blank");
            }
          } else if (type === "group") {
            const selectedGroup = GROUP.group.find((group) => group.name === selectedValue);
            if (selectedGroup && selectedGroup.url) {
              window.open(selectedGroup.url, "_blank");
            }
          }
        };
  
      // 외부 영역 클릭 시 셀렉트 박스 닫기
     useEffect(() => {
     function handleClickOutside(event) {
      if (
        (brandSelectRef.current && !brandSelectRef.current.contains(event.target) && brandOpen) ||
        (groupSelectRef.current && !groupSelectRef.current.contains(event.target) && groupOpen)
      ) {
        setBrandOpen(false);
        setGroupOpen(false);
      }
    }

    // 이벤트 추가
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [brandOpen, groupOpen]);
  
    return (
        <FooterBlock>
            <div className="f_top">
                <div className="notice">
                    <h3>공지사항</h3>
                    <a href="#!">[안내] 개인정보처리방침 개정 안내 (2023년 3월 3일)</a>
                </div>
                <div className="family">
                    <ul>
                        <li>
                            <a href="#!" onClick={() => setBrandOpen(!brandOpen)}> 브랜드 바로가기 +
                            <div
                                ref={brandSelectRef} 
                                className="select-container"
                            >
                                <select
                                     onChange={(e) => handleSelect(e, "brand")} value={selected}
                                    size={7}
                                    style={{ display: brandOpen ? 'block' : 'none'}}
                                >
                                    {BRAND.brand.map((brand) => (
                                        <option key={brand.id} value={brand.name}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </a>
                      </li>
                        <li>
                            <a href="#!" onClick={() => setGroupOpen(!groupOpen)}>그룹 계열사 바로가기 +
                            <div
                                ref={groupSelectRef}
                                className="select-container"
                            >
                                <select
                                     onChange={(e) => handleSelect(e, "group")} value={selected}
                                    size={7}
                                    style={{ display: groupOpen ? 'block' : 'none' }}
                                >
                                    {GROUP.group.map((group) => (
                                        <option key={group.id} value={group.name}>
                                            {group.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="f_bottom">
                <ul className="f_nav">
                    {
                        footerMenus.map((footerMenu, index) => (
                            <li key={index}>{footerMenu}</li>
                        ))
                    }
                </ul>
                <div className="footer_text">
                    {
                        footerTexts.map((footerText,index) => (
                            <p key={index}>
                                {
                                    footerText.map((text,i) =>(
                                        <span key={i}>{text}</span>
                                    ))
                                }
                            </p>
                        ))
                    }
                </div>
                <ul className="sns">
                    {
                        SNS.sns.map(s => (
                            <li key={s.id}>
                                {/* 외부페이지로 이동은 a태그 작성 */}
                                {/* target을 처리하면 Tabnabbing피싱공격을 받는다고 함 */}
                                {/* rel="noopener noreferrer"를 작성해주라는 react이슈가 있음 */}
                                <a href={s.url} target="_blank" rel="noopener noreferrer">
                                    <img src={s.img} alt={s.name} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <p className="copy">Copyright © 주식회사 티빙 All right reserved.</p>
            </div>
        </FooterBlock>
    );
}

export default Footer;
