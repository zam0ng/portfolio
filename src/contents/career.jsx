import React, { useState } from 'react'
import { Heading, Wrapper } from '../components/common'
import { BiDownArrow, BiDownArrowAlt, BiDownArrowCircle, BiSolidDownArrow, BiSolidDownArrowCircle, BiUpArrow } from 'react-icons/bi'

const Career = () => {

    const [isArrowPopup,setIsArrowPopup] = useState(true);
    const [isArrowPopup2,setIsArrowPopup2] = useState(true);
    const [isArrowPopup3,setIsArrowPopup3] = useState(true);

    return (
        <Wrapper>
            <div className='flex items-baseline'>
                <Heading>EXPERIENCE</Heading>
                <span className='ml-3 text-gray-500'>(총 11개월)</span>
            </div>

            <li className="flex flex-col gap-[32px] md:flex-row font-ridi">

                <div className="w-full mt-2 mb-2">
                    <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold">
                        2024.10 ~ 2024.11 / Front-End 프리랜서<span className="text-lg" onClick={()=>{setIsArrowPopup3(!isArrowPopup3)}}> {isArrowPopup3 ? <BiDownArrow/> : <BiUpArrow/>}</span>
                    </h2>
                    {
                        !isArrowPopup3 ?
                    
                        <div className='ml-1'>
                            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7 italic text-gray-400">
                                몽골 커뮤니티 플랫폼 웹/앱 프론트 개발자 
                                / web : <span className=' md:text-[16px] text-blue-600 underline'><a href="https://nutag.net/" target='_blank'>nutag.net</a></span> 
                                / <span className=' md:text-[16px] text-blue-600 underline'><a href="https://play.google.com/store/apps/details?id=com.onbus_community.android&hl=ko" target='_blank'>app download</a></span>
                                
                            </p>

                            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px] ml-3">

                                <li> 업무내용
                                    <br /> - 기존 홈페이지를 React Responsive로 반응형 추가 구현
                                    <br /> - 백엔드 API와 연결하여 프론트 구성 및 데이터 연결 
                                    <br /> - GetX를 통해 상태 관리, mqtt 소켓 연결, 그리드 및 Flutter 디바이스 접근을 활용해 기능을 구현
                                </li>
                                <li>
                                    사용 스택
                                    <br /> - React, flutter
                                </li>

                            </ul>
                        </div>
                        :<></>
                    }
                </div>
            </li>

            <hr></hr>

            <li className="flex flex-col gap-[32px] md:flex-row font-ridi">

                <div className="w-full mt-2 mb-2">
                    <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold">
                        2024.03 ~ 2024.09 / 코싸인온㈜<span className="text-lg" onClick={()=>{setIsArrowPopup2(!isArrowPopup2)}}> {isArrowPopup2 ? <BiDownArrow/> : <BiUpArrow/>}</span>
                    </h2>
                    {
                        !isArrowPopup2 ?
                    
                        <div className='ml-1'>
                            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7 italic text-gray-400">
                                사내 인프라 플랫폼(웹/앱) 풀스택 개발자 <br/>
                                사내 linux 기반 서버 개발
                            </p>

                            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px] ml-3">

                                <li> 업무내용
                                    <br /> - 전반의 프론트엔드와 백엔드 시스템을 설계 및 개발하여 사내 인프라 플랫폼을 구축
                                    <br /> - Google API를 활용하여 회사 계정의 생성, 삭제 및 그룹 관리를 자동화하여 사용자 관리 시스템 구현
                                    <br /> - useQuery 훅을 활용하여 데이터 fetch 및 상태 관리를 최적화
                                    <br /> - 임원진과 직원들이 주고받는 업무를 리스트 형식으로 제공하고, 대화형 인터페이스 구현
                                    <br /> - GitLab을 통한 CI/CD 구축, NIS로 사용자 관리, DHCP로 IP 자동 할당, NFS mount로 파일 공유를 구현
                                </li>
                                <li>
                                    사용 스택
                                    <br /> - React, Python, Flask, Flutter, Linux
                                </li>

                            </ul>
                        </div>
                        :<></>
                    }
                </div>
            </li>

            <hr></hr>

            <li className="flex flex-col gap-[32px] md:flex-row font-ridi">

                <div className="w-full mt-2 mb-2">
                    <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold">
                        2024.01 ~ 2024.03 / Front-End 프리랜서<span className="text-lg" onClick={()=>{setIsArrowPopup(!isArrowPopup)}}> {isArrowPopup ? <BiDownArrow/> : <BiUpArrow/>}</span>
                    </h2>
                    {
                        !isArrowPopup ?
                    
                        <div className=''>
                            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7 italic text-gray-400">
                                유치원 플랫폼 프론트 개발자 / <span className=' md:text-[16px] text-blue-600 underline'><a href="https://lulla.kids/" target='_blank'>lulla.kids</a></span>
                            </p>

                            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px] ml-3">

                                <li> 업무내용
                                    <br /> - 외부 날씨 API를 활용하여 날씨 정보를 제공, 데이터 시각화를 통해 사용자 인터페이스 구현
                                    <br /> - 백엔드 API 문서를 분석하여 데이터의 CRUD 기능을 원활하게 구현, 사용자 요구에 맞춘 데이터 관리 시스템 구축
                                    <br /> - MQTT 소켓 활용하여 실시간 채팅 기능을 구현, 사용자 간의 원활한 소통을 위한 안정적인 메시징 시스템 구현
                                    <br /> - Canvas.js를 이용하여 사용자 서명 기능을 개발
                                </li>
                                <li>
                                    사용 스택
                                    <br /> - React, Next.js
                                </li>

                            </ul>
                        </div>
                        :<></>
                    }
                </div>
            </li>
            <hr></hr>
        </Wrapper>
    )
}

export default Career