import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
            <div className='-ml-52 text-3xl font-bold'>About me</div>
                <div className="text-left text-[16px] md:text-[24px] ml-80">
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li>안녕하세요 ! 신입 블록체인 개발자 이재영입니다.</li>
                        <li>긍정적인 성격으로 배움에 두려움이 없으며, 
                             유연한 사고로 받아들이는 것에 거부감이 없습니다. </li>
                        <li>같은 실수를 반복하지 않기 위해 새롭게 알게된 정보를 꾸준히 블로그와 노트에 기록하고 있습니다.</li>
                        <li>주어진 임무에는 끈기있게 끝까지 책임을 다합니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Introduce
