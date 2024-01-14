export const PROJECTS = [
  {
    period: "2023.05 ~ 2023.12",
    type: "기업 프로젝트",
    name: "KOLMAR 자동화 프로젝트",
    img: "/rmsKolmar.png",
    content: `
        <div>
            <div>
                회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
            </div>
            <br />
            <div>
                컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                서비스 배포를 위한 모든 업무를 경험함으로써,
                기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
            </div>
            <br />
            <div>
                경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
            </div>
        </div>
    `,
    skills: [
      {
        name: "React",
        color: "#2654B6"
      },
      {
        name: "NodeJs",
        color: "#2654B6"
      },
      {
        name: "MariaDB",
        color: "#2654B6"
      },
      {
        name: "MySQL",
        color: "#2654B6"
      },
      {
        name: "NginX",
        color: "#2654B6"
      },
      {
        name: "Python",
        color: "#2654B6"
      },
      {
        name: "Flask",
        color: "#2654B6"
      },
      {
        name: "Figma",
        color: "#2654B6"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
            <div>
                <p>
                    외부 고객사 및 내부 고객사 로그인을 위한 ADFS 그룹웨어 및 MS 인증 로그인 시스템
                </p>
                <p>
                    외부 고객사 파일 업로드를 위한 one-drive api 파일 시스템
                </p>
                <p>
                    등록된 표시문안을 읽기 위한 Azure OCR 시스템 도입
                </p>
                <p>
                    제공된 윈도우 서버 내 방화벽 설정 및 Nginx 웹서버 프록시 설정
                </p>
            </div>
            `
      },
      //   { key: "Github", value: "" },
      {
        key: "URL",
        value:
          "<a href='https://rms.kolmar.co.kr'>https://rms.kolmar.co.kr/</a>"
      }
    ]
  },
  {
    period: "2023-12 ~ 2023-12",
    type: "개인 프로젝트",
    name: "DevJourney",
    img: "/devjourney.png",
    content: `
            <div>
                <div>
                    현재 보시는 포트폴리오 페이지입니다.
                </div>
                <br />
                <div>
                    개인 포트폴리오를 만들면서 최신 트렌드인 NextJs와 Tailwind를 사용해볼 수 있는 유용한 기회였습니다.
                    NextJs가 가지고 있는 장점인 SSO 최적화와 페이지 라우팅 시스템을 사용해보며 해당 프레임워크의 효율성을 다시금 느낄 수 있었습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "NextJs",
        color: "#2654B6"
      },
      {
        name: "React",
        color: "#2654B6"
      },
      {
        name: "Tailwind",
        color: "#2654B6"
      },
    ],
    desc: [
      {
        key: "주요기능",
        value: `
            <div>
                <div>
                    개인정보 및 자기소개
                </div>
                <br />
                <div>
                    보유 기술스택 정리, 경험한 프로젝트 기술 경력서, 개인 블로그 링크 정리
                </div>
            </div>
        `
      },
      { key: "Github", value: "" },
      { key: "URL", value: "" },
      { key: "Front-End", value: "" },
      { key: "Back-End", value: "" },
      { key: "Database", value: "" },
      { key: "Deployment", value: "dasasd" }
    ]
  },
  {
    period: "2023-11 ~ 2023-12",
    type: "개인 프로젝트",
    name: "종구공방",
    img: "/jonggu.png",
    content: `
            <div>
                <div>
                    회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                    주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                    이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
                </div>
                <br />
                <div>
                    컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                    서비스 배포를 위한 모든 업무를 경험함으로써,
                    기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                    어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
                </div>
                <br />
                <div>
                    경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                    형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "MySQL",
        color: "#2654B6"
      },
      {
        name: "NginX",
        color: "#2654B6"
      },
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
            </div>
            <br />
            <div>
                컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                서비스 배포를 위한 모든 업무를 경험함으로써,
                기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
            </div>
            <br />
            <div>
                경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
            </div>
        </div>
        `
      },
      { key: "Github", value: "" },
      { key: "URL", value: "" },
      { key: "Front-End", value: "" },
      { key: "Back-End", value: "" },
      { key: "Database", value: "" },
      { key: "Deployment", value: "dasasd" }
    ]
  },
  {
    period: "2022.08 ~ 2023.03",
    type: "기업 프로젝트",
    name: "복지부 차세대 프로젝트",
    img: "/ssis.jpg",
    content: `
            <div>
                <div>
                    회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                    주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                    이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
                </div>
                <br />
                <div>
                    컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                    서비스 배포를 위한 모든 업무를 경험함으로써,
                    기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                    어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
                </div>
                <br />
                <div>
                    경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                    형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "Nextjs",
        color: "black"
      },
      {
        name: "NginX",
        color: "#5ea4b9"
      },
      {
        name: "React",
        color: "yellow"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
            </div>
            <br />
            <div>
                컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                서비스 배포를 위한 모든 업무를 경험함으로써,
                기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
            </div>
            <br />
            <div>
                경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
            </div>
        </div>
        `
      },
      { key: "Github", value: "" },
      { key: "URL", value: "" },
      { key: "Front-End", value: "" },
      { key: "Back-End", value: "" },
      { key: "Database", value: "" },
      { key: "Deployment", value: "dasasd" }
    ]
  },
  {
    period: "2022-03 ~ 2022-04",
    type: "개인 프로젝트",
    name: "뉴스 창고",
    img: "/stock.png",
    content: `
            <div>
                <div>
                    회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                    주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                    이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
                </div>
                <br />
                <div>
                    컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                    서비스 배포를 위한 모든 업무를 경험함으로써,
                    기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                    어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
                </div>
                <br />
                <div>
                    경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                    형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "MySQL",
        color: "#2654B6"
      },
      {
        name: "NginX",
        color: "#2654B6"
      },
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
            </div>
            <br />
            <div>
                컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                서비스 배포를 위한 모든 업무를 경험함으로써,
                기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
            </div>
            <br />
            <div>
                경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
            </div>
        </div>
        `
      },
      { key: "Github", value: "" },
      { key: "URL", value: "" },
      { key: "Front-End", value: "" },
      { key: "Back-End", value: "" },
      { key: "Database", value: "" },
      { key: "Deployment", value: "dasasd" }
    ]
  },
  {
    period: "2022-03 ~ 2022-04",
    type: "개인 프로젝트",
    name: "멘토",
    img: "/mentor.png",
    content: `
            <div>
                <div>
                    회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                    주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                    이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
                </div>
                <br />
                <div>
                    컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                    서비스 배포를 위한 모든 업무를 경험함으로써,
                    기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                    어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
                </div>
                <br />
                <div>
                    경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                    형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "MySQL",
        color: "#2654B6"
      },
      {
        name: "NginX",
        color: "#2654B6"
      },
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                회사 내 직원 및 외부 고객사 사용 목적을 위한 웹사이트 개발입니다.
                주로 고객사에서 접수한 표시문안들을 저장하여 Azure의 OCR 모델을 사용해 PDF 및 이미지 파일의 텍스트 정보를 처리하는 기능이 있습니다.
                이를 통해 개별 PDF파일을 매번 수기로 처리하여 걸리는 시간 대비 20배정도 단축시켜 업무의 자동화 및 효율성을 극대화 시켰습니다.
            </div>
            <br />
            <div>
                컨설팅 및 디자이너와 협업 및 Figma 툴을 사용하여 업무에 빠르게 반영할 수 있는 좋은 기회였고
                서비스 배포를 위한 모든 업무를 경험함으로써,
                기획, 설계, 개발, 그리고 고도화 및 고객 피드백 반영 등 실제 서비스가 배포되기까지
                어떤 절차로 개발이 진행되는지 알 수 있었던 좋은 기회였습니다.
            </div>
            <br />
            <div>
                경험했던 1인 개발이 아닌 다수의 인원을 통해 개발됨으로 인해 팀원 내 커뮤니케이션 능력과
                형상 관리의 중요성을 다시한번 느낄 수 있던 프로젝트였습니다.
            </div>
        </div>
        `
      },
      { key: "Github", value: "" },
      { key: "URL", value: "" },
      { key: "Front-End", value: "" },
      { key: "Back-End", value: "" },
      { key: "Database", value: "" },
      { key: "Deployment", value: "dasasd" }
    ]
  },
];
