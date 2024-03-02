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
import {bounceImg, nobrokerImg, orderImg, tokenCreateImg, najakjakImg, modoImg,kakaoGif,pdfkit,toosGif, nodemailerImg, readmoreImg, chartImg, warningImg} from "../img/index";

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [isShowingModal4, toggleModal4] = useModal()

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
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
                            <li>Back-End</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
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

                        <h3 className="py-[16px] text-[16px] font-bold">LINKS</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <p className=' md:text-[16px]'>github</p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/Real_estate_STO_project" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px]'>UserPage</p>
                            <a className ="text-[16px] mt-1" href="https://bouncesto.site/" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px]'>AdminPage</p>
                            <a className ="text-[16px] mt-1" href="https://bs.admin.bouncesto.site/admin/dashboard" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>

                        </div>
                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiNodejs />
                            <DiReact />
                            <SiTypescript />
                            <SiSocketdotio/>
                            <SiSequelize/>
                            <BiLogoPostgresql/>
                            <SiSolidity/>
                            <SiTailwindcss/>
                            <FaAws/>
                            <DiGithubBadge />
                            <SiNextdotjs />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무</h3>
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
                                <br/> - aws amplify를 이용한 어드민 페이지 (next.js) 배포
                                <br/> - aws s3를 이용한 유저 페이지 (react) 배포
                                <br/> - aws ec2를 이용한 서버 (nodejs) 배포
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
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 08. 04 ~ 2023. 08. 25</li>
                            <li>front-end / back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Nobroker 
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        중개사 없는 탈중앙화형 부동산 매매사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">LINKS</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <p className=' md:text-[16px]'>github</p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/React_Project_NoBroker" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px]'>Service</p>
                            <a className ="text-[16px] mt-1" href="https://bouncesto.site/" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            <p className=' md:text-[16px]'>|</p>

                            <p className=' md:text-[16px]'>회고</p>
                            <a className ="text-[16px] mt-1" href="https://velog.io/@ijy1995/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-NoBroker" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            
                        </div>

                        

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiNodejs />
                            <SiSequelize/>
                            <SiMysql/>
                            <DiReact />
                            <SiReactquery/>
                            <SiStyledcomponents/>
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무</h3>
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
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 05 ~ 2023. 06. 28</li>
                            <li>front-end / back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
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

                        <h3 className="py-[16px] text-[16px] font-bold">LINKS</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <p className=' md:text-[16px]'>github</p>
                            <a className ="text-[16px] mt-1" href="https://github.com/zam0ng/node-PJ" target='_blank'>
                                <FaExternalLinkAlt />
                            </a>
                            
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiJavascript/>
                            <FaCss3Alt/>
                            <FaHtml5/>
                            <SiNextdotjs />
                            <SiSequelize/>
                            <SiMysql/>
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무</h3>
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
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 04. 10 ~ 2023. 04. 25</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal4}
                                >
                                    상세보기
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

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiJavascript/>
                            <FaCss3Alt/>
                            <FaHtml5/>
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">담당 업무</h3>
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
               <span>어드민 페이지 Web3 연결 / 토큰 발행 (팩토리 패턴)</span>
               <img className='w-2/4' src={tokenCreateImg} alt="" />
               <br></br>
               <span>거래 페이지 매수/매도 시 ERC20 approve, transferFrom 함수 적용 및 소켓 연결</span>
               <img className='w-1/4' src={orderImg} alt="" />
            </div>
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <span>카카오 우편번호 서비스 / 맵 API 지도표시</span>
                <img src={kakaoGif} alt="" />
                <br />
                <span>PDF KIT를 통한 계약서 출력</span>
                <img src={pdfkit} alt="" />
                <br></br>
                <span>토스 API를 이용한 가상계좌 입출금</span>
                <img src={toosGif} alt="" />
            </Modal>
            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <span>nodemailer 이용한 비밀번호 찾기</span>
                <img className = 'w-1/2' src={nodemailerImg} alt="" />
                <br />
                <span>readMore 기능</span>
                <img className = 'w-1/2' src={readmoreImg} alt="" />
                <br />
                
            </Modal>
            <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <span>apexcharts를 이용한 주가 차트 구현</span>
                <img src={chartImg} alt="" />
                <br />
                <span>cookie를 이용한 팝업창 구현</span>
                <img className= 'w-1/2' src={warningImg} alt="" />

            </Modal>
        </Wrapper>
    )
}

export default Projects
