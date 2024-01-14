import { AcademicCapIcon, AtSymbolIcon, CakeIcon, HomeIcon } from "@heroicons/react/24/solid";
const iconStyles = "h-6 w-6";
export const generalInfo = [
  {
    icon: <CakeIcon className={iconStyles} />,
    label: "1995.12.19"
  },
  {
    icon: <HomeIcon className={iconStyles} />,
    label: "서울특별시 송파구"
  },
  {
    icon: <AtSymbolIcon className={iconStyles} />,
    label: <a href="mailto: whdghtpgml@gmail.com" >whdghtpgml@gmail.com</a>
  },
  {
    icon: <AcademicCapIcon className={iconStyles} />,
    label: "Washington State University"
  }
];

export const personalInfo = {
  name: '이종호',
  applyTo: 'FULL STACK DEVELOPER',
  about: `
  <div>
    <div>
      실생활에서 직접 도움이 되는 서비스를 개발하고 배포하는 과정에서 큰 즐거움을 느낍니다.
    </div>
    <br />
    <div>
      개발능력 외에도 여러 분야에 대한 폭넓은 지식을 활용하여,
      의미 있는 서비스를 개발하고 이를 통해 사람들의 생활이 편리해지는 것을 목표로 합니다.
    </div>
    <br />
    <div>
      이러한 목표를 달성하기 위해 저는 '능동적'이라는 핵심가치를 가지고 있습니다.
      새로운 기술에 대한 관심과 꾸준한 자의적 학습을 통해 사람들의 삶을 개선하는 서비스를 창출해내는 능동적인 개발자가 되겠습니다    
    </div>
  </div>
  `
}
