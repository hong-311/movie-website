import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SNS from '../../apis/sns.json'; 
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
          margin-left: 120px;
          position: relative;

          li{
              margin-left: 30px;
              font-size: 18px; font-weight: bold; color: rgb(163, 163, 163);
              white-space: nowrap;
          
              select {
                  background-color: black;
                  border-radius: 5px;
                  appearance: none;
                  white-space: nowrap;
                  position: absolute;
              }

              option{
                  font-size: 18px; font-weight: bold; color: rgb(163, 163, 163);
                  text-align: left;
                  width: 10rem;
                  padding: 8px 15px;
                  background-color: rgb(32, 32, 32);
                  height: 40px;
                      &:hover {
                          background-color: rgb(43, 43, 43);
                      }
                  
              }
              ::-webkit-scrollbar {
                  width: 7px; 
              }
              ::-webkit-scrollbar-thumb {
                  background: rgb(76, 75, 77) 
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
          display: flex; height: 60px; line-height: 60px;
          li{
              margin-right: 20px;
              font-size: 15px; color: rgb(163, 163, 163);
              &:nth-child(3){ font-weight: bold; }
          }
      }
      .footer_text{
          span{
              font-size: 15px; font-weight: normal; 
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
          font-size: 13px; font-weight: normal; 
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
      .family ul li,
      .f_bottom .f_nav li,
      .f_bottom .footer_text span,
      .f_bottom .copy {
          font-size: 14px;
          margin-bottom: 10px; 
      }
      .family ul li option {
          font-size: 14px;
          width: 7rem;
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
      .family ul li,
      .family ul li a,
      .f_bottom .f_nav li,
      .f_bottom .footer_text span,
      .f_bottom .copy {
          font-size: 12px;
      }
      .family ul li option {
          font-size: 12px;
          width: 5rem;
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
        ['대표이사 : 최주희','사업자정보확인','사업자등록번호 : 188-88-01893','통신판매신고번호 : 2020-서울마포-3641호'],
        ['사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)','호스팅사업자 : 씨제이올리브네트웍스(주)'],
        ['고객센터 (평일 09시~17시/점심시간 13시~14시)','1:1 게시판 문의','대표메일 : tving@cj.net','전화번호(ARS) 1670-1525 (챗봇/채팅 상담 연결)'],
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

    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 제거: 메모리 누수 방지
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [brandOpen, groupOpen]);
  
    return (
        <FooterBlock>
            <div className="f_top">
                <div className="notice">
                    <h3>공지사항</h3>
                    <a href="#!">[안내] 개인정보처리방침 개정 안내</a>
                </div>
                <div className="family">
                    <ul>
                    <li onClick={() => setBrandOpen(!brandOpen)}> 브랜드 바로가기 +
                            <div
                                ref={brandSelectRef} 
                                className="select-container"
                            >
                                <select
                                     onChange={(e) => handleSelect(e, "brand")} value={selected}
                                    size={8}
                                    style={{ display: brandOpen ? 'block' : 'none'}}
                                >
                                    {BRAND.brand.map((brand) => (
                                        <option key={brand.id} value={brand.name}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            </li>
                        <li onClick={() => setGroupOpen(!groupOpen)}>그룹 계열사 바로가기 +
                            <div
                                ref={groupSelectRef}
                                className="select-container"
                            >
                                <select
                                     onChange={(e) => handleSelect(e, "group")} value={selected}
                                    size={8}
                                    style={{ display: groupOpen ? 'block' : 'none' }}
                                >
                                    {GROUP.group.map((group) => (
                                        <option key={group.id} value={group.name}>
                                            {group.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
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