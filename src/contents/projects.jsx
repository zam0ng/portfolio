import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt, FaExternalLinkSquareAlt , FaAws, FaCss3Alt, FaHtml5    } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiSocketdotio ,SiSequelize , SiSolidity, SiTailwindcss, SiMysql, SiReactquery
,SiStyledcomponents,SiJavascript    } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { BiLogoPostgresql } from "react-icons/bi";
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import {bounceImg, nobrokerImg, orderImg, tokenCreateImg, najakjakImg, modoImg,kakaoGif,pdfkit,toosGif, nodemailerImg, readmoreImg, chartImg, warningImg, bounceApiImg, bounceErdImg, bounceTokenMintGif, bounceTradeGif, linkIconImg, linkIconImg2, nobrokerApiImg, nobrokerFlowImg, najakjaksignupAcceptImg, najakjakboardAcceptImg, najakjakloginImg} from "../img/index";

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [isShowingModal4, toggleModal4] = useModal()

    return (
        <Wrapper>
            <div className='flex items-baseline'>
                <Heading>PROJECT</Heading>
                <span className='ml-3 text-gray-500'>(총 4개)</span>
            </div>

            <ul className="flex flex-col w-full gap-[120px] font-ridi">
                {/* 기업협업 프로젝트 STO 부동산 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src= {bounceImg}
                            className="w-full h-96"
                            alt=""
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">기업협업 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 12. 05</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-orange-400 rounded-[8px] text-white hover:bg-gray-950 font-semibold"
                                >
                                    담당업무 상세보기
                                </button>
                            </li>
                            <hr className='border-1 w-full'/>
                            <li>
                                <span className='text-base'>발표 영상</span>
                                <iframe className='mt-2' width="287" height="154" src="https://www.youtube.com/embed/Yr30Bfl_KfE?si=E_WX7u3dQGvBvXKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            부동산 STO (기업협업 / 바운스코드)<span> </span>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            부동산 전문 STO 발행 및 거래, 투표가 가능한 플랫폼
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">배포사이트 / GitHub </h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                        
                            <span className='text-base font-semibold'>URL 링크 : </span>
                            <p className=' md:text-[16px] text-blue-600 underline'><a href="https://bouncesto.site/" target='_blank'>UserPage</a></p>
                            <a className ="text-[16px] mt-1" href="https://bouncesto.site/" target='_blank'>
                                {/* <FaExternalLinkAlt /> */}
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px] text-blue-600 underline'><a href="https://bs.admin.bouncesto.site/admin/dashboard" target='_blank'>AdminPage</a></p>
                            <a className ="text-[16px] mt-1" href="https://bs.admin.bouncesto.site/admin/dashboard" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            <p className=' md:text-[16px]'>|</p>
                            <p className=' md:text-[16px] text-black-600'><a href="https://github.com/zam0ng/Real_estate_STO_project" target='_blank'>github</a></p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/Real_estate_STO_project" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>

                        </div>
                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="text-[32px]  py-[8px] px-[32px]">
                            {/* <DiNodejs />
                            <DiReact />
                            <SiTypescript />
                            <SiSocketdotio/>
                            <SiSequelize/>
                            <BiLogoPostgresql/>
                            <SiSolidity/>
                            <SiTailwindcss/>
                            <FaAws/>
                            <DiGithubBadge />
                            <SiNextdotjs /> */}

                            <div className='flex'>
                                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"></img>
                                
                                <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
                            </div>
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>
                                <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white"></img>
                            </div>
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white"/>
                                <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"></img>
                            </div>

                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무 (Back-End / BlockChain)</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>역할 : 팀장 
                                <br></br> - 협업기업과 커뮤니케이션, 팀원들 진척도 체크
                                <br></br> - 프로젝트 최종 테스트 및 오류 수정
                            </li>

                            <li>구현
                                <br/> - API, ERD 문서 작성
                                <br/> - 어드민 페이지 토큰 발행 시 / web3 연결 및 CA 배포
                                <br/> - 어드민 페이지 (매물 등록, 게시글 등록) API 설계
                                <br/> - 거래 페이지 매수/매도 시 모달 및 ERC20 approve, transferFrom 함수 적용
                                <br/> - 거래 페이지 API 설계 및 소켓 연결
                                <br/> - 메인 페이지 API 설계
                                <br/> - 입출금 페이지 (농협 간편결제 API 연결)
                            </li>

                            <li>
                                배포
                                <br/> - aws Amplify를 이용한 어드민 페이지 (next.js) 배포
                                <br/> - aws S3를 이용한 유저 페이지 (react) 배포 및 CloudFront 설정
                                <br/> - aws EC2를 이용한 서버 (nodejs) 배포 및 DB 설정, Nginx 설정
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 리액트 프로젝트 nobroker */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={nobrokerImg}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 08. 04 ~ 2023. 08. 25</li>
                            
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-orange-400 rounded-[8px] text-white hover:bg-gray-950 font-semibold"
                                    onClick={toggleModal2}
                                >
                                    담당업무 상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-8    00 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Nobroker 
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        중개사 없는 탈중앙화형 부동산 매매사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">배포사이트 / GitHub / 회고 </h3>
                        
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                        <span className='text-base font-semibold'>URL 링크 : </span>    

                            <p className=' md:text-[16px] text-blue-600 underline'><a href="http://3.37.244.154/" target='_blank'>Service</a></p>
                            <a className ="text-[16px] mt-1" href="http://3.37.244.154/" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px] text-black-600'><a href="https://github.com/zam0ng/React_Project_NoBroker" target='_blank'>github</a></p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/React_Project_NoBroker" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px] text-black-600'><a href="https://velog.io/@ijy1995/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-NoBroker" target='_blank'>회고</a></p>
                            <a className ="text-[16px] mt-1" href="https://velog.io/@ijy1995/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-NoBroker" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            
                        </div>

                        

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className=" flex-row text-[32px] py-[8px] px-[32px]">

                            {/* <DiNodejs />
                            <SiSequelize/>
                            <SiMysql/>
                            <DiReact />
                            <SiReactquery/>
                            <SiStyledcomponents/>
                            <DiGithubBadge /> */}
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"></img>
                                <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"/>
                                <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>

                            </div>
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
                                <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
                                
                                <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></img>
                            </div>
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무 (Front-End / Back-End)</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>매물 등록페이지
                                <br/> - 카카오 우편번호 서비스 이용 - 주소 검색
                                <br/> - 카카오 맵 API 이용 - 지도 표시
                                <br/> - multer 를 이용한 사진 첨부
                                <br/> - 매물 등록페이지 API 설계
                            </li>
                            <li>
                                마이 페이지
                                <br/> - useQuery를 이용한 데이터 호출
                                <br/> - useMutation을 이용한 프로필 정보 수정
                                <br/> - 거래 성사 시 PDF KIT를 통한 계약서 출력
                                <br/> - 토스 API 를 이용한 가상계좌 입출금
                            </li>
                            <li>
                                기타
                                <br/> - 테이블 정의 및 관계 설정
                                <br/> - 플로우차트 작성
                                <br/> - swagger API 문서 작성
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 노드 프로젝트 나작작 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={najakjakImg}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 05 ~ 2023. 06. 28</li>
                            {/* <li>front-end / back-end</li> */}
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-orange-400 rounded-[8px] text-white hover:bg-gray-950 font-semibold"
                                    onClick={toggleModal3}
                                >
                                    담당업무 상세보기
                                </button>
                            </li>
                            <hr className='border-1 w-full'/>
                            <li>
                                <span className='text-base'>발표 영상</span>
                                <iframe width="287" height="154" src="https://www.youtube.com/embed/mDBYzY9kRrM?si=AbkxAB6Hp9F0CbaL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            나만의 작은 작가
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            작가와 독자들이 소통하는 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">GitHub</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                        <span className='text-base font-semibold'>URL 링크 : </span>  
                          
                            <p className=' md:text-[16px] text-black-600'><a href="https://github.com/zam0ng/node-PJ" target='_blank'>github</a></p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/node-PJ" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className=" flex-row text-[32px] py-[8px] px-[32px]">
                            {/* <SiJavascript/>
                            <FaCss3Alt/>
                            <FaHtml5/>
                            <SiNextdotjs />
                            <SiSequelize/>
                            <SiMysql/>
                            <DiGithubBadge /> */}
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
                            </div>
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"/>
                                <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
                                <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></img>
                            </div>
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무 (Front-End / Back-End)</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>역할 : 팀장
                                <br/> - 팀원들 진척도 관리
                                <br/> - 최종 작업물 테스트 및 발표
                                <br/> - ERD 작성
                            </li>
                            <li>
                                회원가입, 로그인 페이지
                                <br/> - 유효성 검사
                                <br/> - bcrypt, jwt를 이용한 암호화 및 검증
                                <br/> - nodemailer를 이용한 비밀번호 찾기
                            </li>
                            <li>
                                어드민 페이지
                                <br/> - 유저 회원가입 승인/거절
                                <br/> - 게시글 관리 승인/거절
                            </li>
                            <li>
                                글 목록 페이지
                                <br/> - 장르별 분류하여 API 호출
                                <br/> - readMore 기능 구현
                            </li>
                            <li>
                                팔로우 기능
                                <br/> - 작가 팔로우 / 언팔로우 구현
                            </li>
                            <li>
                                로그아웃 기능
                                <br/> - 쿠키를 무효화하여 로그아웃 기능 구현
                            </li>
                        </ul>
                    </div>
                </li>

                {/* js 프로젝트 모&도 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={modoImg}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 04. 10 ~ 2023. 04. 25</li>
                            {/* <li>front-end</li> */}
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-orange-400 rounded-[8px] text-white hover:bg-gray-950 font-semibold"
                                    onClick={toggleModal4}
                                >
                                    담당업무 상세보기
                                </button>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            모 & 도
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            라운드마다 주가가 랜덤으로 변경되는 증권들을 매수 / 매도하는 트레이딩 게임
                        </p>
                        
                        <h3 className="py-[16px] text-[16px] font-bold">GitHub</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                        <span className='text-base font-semibold'>URL 링크 : </span>  
                          
                            <p className=' md:text-[16px] text-black-600'><a href="https://github.com/youdonghee/Modo-team" target='_blank'>github</a></p>
                            <a className ="text-[16px] mt-1" href="https://github.com/youdonghee/Modo-team" target='_blank'>
                                <img className='w-6' src={linkIconImg2} alt="" />
                            </a>
                            
                        </div>
                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className=" flex-row text-[32px] py-[8px] px-[32px]">
                            {/* <SiJavascript/>
                            <FaCss3Alt/>
                            <FaHtml5/> */}
                            <div className='flex'>
                                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
                            </div>
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무 (Front-End)</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>게임 메인페이지
                                <br/> - apexcharts를 이용한 주가 차트 구현
                                <br/> - localstorage를 이용해 주가 저장 및 호출
                                <br/> - 랜덤함수를 이용한 라운드 주가 변동 구현
                            </li>
                            <li>
                                투자 경고 문구
                                <br/> - cookie를 이용한 팝업창 구현
                            </li>
                            <li>
                                audio 기능
                                <br/> - 매수 / 매도 시 안내 멘트 audio 재생 구현
                            </li>
                            
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
            <div>
                <span className='text-lg font-bold'> <span className='bg-orange-100'>1. API / ERD</span> 문서 작성</span>
                <div className='flex mb-4 mt-2'>
                    <img className='w-2/4' src={bounceApiImg}></img>
                    <img className='w-2/4' src={bounceErdImg}></img>
                </div>
                <hr className='mb-3'></hr>
                <span className='text-lg font-bold'>2. 어드민 페이지 <span className='bg-orange-100'>Web3 연결</span> / 토큰 발행 시 <span className='bg-orange-100'>팩토리 패턴</span>에 의해 CA가 CA를 배포</span>
                <img className='w-3/4 mt-2' src={bounceTokenMintGif} alt="" />
                <br></br>
                <hr className='mb-3'></hr>
                <p className='text-lg font-bold -indent-5 ml-5'>3. 거래 페이지 매수/매도 시 <span className='bg-orange-100'>ERC20 approve, transferFrom 함수</span> 적용을 통해 토큰 권한부여 및 전송<br></br>
                실시간 거래를 위한  <span className='bg-orange-100'>socket.io</span>를 이용한 소켓 연결</p>

                <img className='w-3/4 mt-2' src={bounceTradeGif} alt="" />
            </div>
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <span className='text-lg font-bold'>1. <span className='bg-orange-100'>카카오</span>  우편번호 서비스 / 맵 <span className='bg-orange-100'>API</span> 지도표시</span>
                <img className='w-full mt-2' src={kakaoGif} alt="" />
                <br />
                <span className='text-lg font-bold'>2. <span className='bg-orange-100'>PDF KIT</span>를 통한 계약서 출력</span>
                <img className='w-3/4 mt-2'src={pdfkit} alt="" />
                <br></br>
                <span className='text-lg font-bold'>3. <span className='bg-orange-100'>토스 API</span>를 이용한 가상계좌 입출금</span>
                <img className='w-3/4 mt-2 mb-3' src={toosGif} alt="" />

                <span className='text-lg font-bold'>4. <span className='bg-orange-100'>플로우 차트</span> / <span className='bg-orange-100'>swagger API</span> 작성</span>
                <div className='mt-2 flex'>
                    <img className='w-1/2' src={nobrokerApiImg} alt="" />
                    <img className='w-1/2' src={nobrokerFlowImg} alt="" />
                </div>

            </Modal>
            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <span className='text-lg font-bold'>1. 회원가입 / 로그인 시 <span className='bg-orange-100'>유효성 검사</span></span>
                <div className='flex'>
                    <img className = 'w-1/2 mb-2' src={najakjakloginImg} alt="" />
                </div>
                <br />
                <span className='text-lg font-bold'>2. 회원가입 / 게시글 승인 및 거절</span>
                <div className='flex mb-2'>
                    <img className = 'w-1/4 h-3/4' src={najakjaksignupAcceptImg} alt="" />
                    <img className = 'w-1/2' src={najakjakboardAcceptImg} alt="" />
                </div>
                <br />
                <span className='text-lg font-bold'>3. <span className='bg-orange-100'>nodemailer</span> 이용한 비밀번호 찾기</span>
                <img className = 'w-3/5 mb-2' src={nodemailerImg} alt="" />
                <br />
                <span className='text-lg font-bold'>4. <span className='bg-orange-100'>readMore</span> 기능</span>
                <img className = 'w-1/2' src={readmoreImg} alt="" />
                <br />
                
            </Modal>
            <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <div className='flex'>
                    <div>
                        <span className='text-lg font-bold'>1. <span className='bg-orange-100'>apexcharts</span>를 이용한 주가 차트 구현</span>
                        <img src={chartImg} alt="" />
                    </div>
                    <div className='ml-5'>
                        <span className='text-lg font-bold'>2. <span className='bg-orange-100'>cookie</span>를 이용한 팝업창 구현</span>
                        <img className= 'w-1/2' src={warningImg} alt="" />
                    </div>
                </div>

            </Modal>
        </Wrapper>
    )
}

export default Projects
