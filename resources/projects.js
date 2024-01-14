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
          "<a href='https://rms.kolmar.co.kr' target='_blank'>https://rms.kolmar.co.kr/</a>"
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
        color: "black"
      },
      {
        name: "React",
        color: "#2654B6"
      },
      {
        name: "Tailwind",
        color: "#2654B6"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
            <div>
                <div>
                    개인정보 및 자기소개
                </div>
                <div>
                    보유 기술스택 정리, 경험한 프로젝트 기술 경력서, 개인 블로그 링크 정리
                </div>
            </div>
        `
      },
      {
        key: "Github",
        value:
          "<a href='https://github.com/Timmer27/DevJourney' target='_blank'>https://github.com/Timmer27/DevJourney</a>"
      },
      {
        key: "URL",
        value:
          "<a href='https://dev-journey-pi.vercel.app' target='_blank'>https://dev-journey-pi.vercel.app</a>"
      },
      { key: "Deployment", value: "Vercel" }
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
                    의미있는 서비스를 개발하고 배포함으로써 사람들의 생활에 편리성을 주는 제 개발 신념에 맞춘 개인 블로그입니다.
                    개인 유튜브 채널을 통해 소개된 프로그램의 다운로드를 안내하고, 웹사이트 내 문의사항을 통해 실제 유저들에게 피드백을 받습니다.
                </div>
                <br />
                <div>
                    해당 서비스를 구축하면서 AWS 서버 및 개인 우분투 서버를 개발하여 웹사이트 운영을 하고 있습니다.
                    개인 노트북을 사용하려 개인 서버를 구축해볼 수 있었던 좋은 경험이었습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "NextJs",
        color: "black"
      },
      {
        name: "React",
        color: "#2654B6"
      },
      {
        name: "Tailwind",
        color: "#2654B6"
      },
      {
        name: "MySQL",
        color: "#2654B6"
      },
      {
        name: "Ubuntu",
        color: "#2654B6"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                블로그 기능, 개발된 프로그램 소개 및 다운로드 기능
            </div>
        </div>
        `
      },
      {
        key: "Github",
        value:
          "<a href='https://github.com/Timmer27/jonggulog' target='_blank'>https://github.com/Timmer27/jonggulog</a>"
      },
      {
        key: "URL",
        value:
          "<a href='https://jonggulog.vercel.app' target='_blank'>https://jonggulog.vercel.app</a>"
      },
      { key: "Deployment", value: "Vercel" }
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
                    복지부에서 진행했던 사회보장시스템 및 사회서비스정보시스템 차세대 프로젝트의 데이터 이관 및 DQ 업무를 수행했습니다.
                </div>
                <br />
                <div>
                    국민 시스템의 방대한 데이터를 이관하는 작업에서 DB에 대한 역량을 증대시킬 수 있었고,
                    대규모 시스템의 데이터를 관리할 때 어떤 절차를 통해 데이터를 안전하게 적재 및 정합성을 검증해야하는지 알 수 있었던 좋은 경험이었습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "Oracle",
        color: "black"
      },
      {
        name: "Tibero",
        color: "#5ea4b9"
      }
    ],
    desc: []
  },
  {
    period: "2022-04 ~ 2022-05",
    type: "개인 프로젝트",
    name: "멘토",
    img: "/mentor.png",
    content: `
            <div>
                <div>
                    과거 외국생활을 하며 필요한 정보들이나 룸메이트를 구할 때 어려움을 겪은 경험에서 아이디어를 얻어 개발했습니다.
                    직업 뿐만 아니라 룸메이트를 구할 때 유용하게 쓰일 수 있게 사용자의 거주 도시 지도 표시 및 1:1 채팅 기능이 있습니다.
                </div>
                <br />
                <div>
                    웹개발을 공부한 것을 실제로 적용해보며 효율적인 비동기처리 방법 고려 및 DB설계 등 추가적인 응용 학습을 할 수 있었습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "Java Spring",
        color: "#2654B6"
      },
      {
        name: "JS",
        color: "#2654B6"
      },
      {
        name: "MySQL",
        color: "#2654B6"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                가입자 상호간의 1:1 채팅 기능, 가입자 별 거주도시 표시 및 간편 로그인 기능
            </div>
            <div>
                게시판 글 등록 및 댓글, 포인트 적립
            </div>
        </div>
        `
      },
      {
        key: "Github",
        value:
          "<a href='https://github.com/Timmer27/mentor' target='_blank'>https://github.com/Timmer27/mentor</a>"
      }
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
                    개인 투자를 하면서 관심있는 산업과 테마별 관련 뉴스를 매일 찾아보았습니다.
                    매일 해당 관련 뉴스 탭을 접속해 관련 뉴스를 찾는 것이 시간을 비효율적으로 사용한다는 점에 아이디어를 얻어 개발하였습니다.
                </div>
                <br />
                <div>
                    해당 프로젝트를 진행하며 다른 언어의 장점을 살려서 개발하는 것이 서버 안정화와 속도에 큰 연관성이 있다는 것,
                    그리고 유지보수를 위해 자신의 메서드가 어떤 기능을 하는지에 대한 주석을 세밀하게 작성해야 한다는 점을 다시 한번 느꼈습니다.
                </div>
            </div>
        `,
    skills: [
      {
        name: "Java Spring",
        color: "#2654B6"
      },
      {
        name: "JS",
        color: "#2654B6"
      },
      {
        name: "Python",
        color: "#2654B6"
      },
      {
        name: "MySQL",
        color: "#2654B6"
      }
    ],
    desc: [
      {
        key: "주요기능",
        value: `
        <div>
            <div>
                주요 일별 환율, 인덱스 차트 시각화 기능
            </div>
            <div>
                검색 키워드 관련 뉴스, 관련 뉴스 종목 자동 업데이트 및 출력 및 키워드 지정을 통한 맞춤 뉴스 제공 기능
            </div>
        </div>
        `
      },
      {
        key: "Github",
        value:
          "<a href='https://github.com/Timmer27/stockDiary' target='_blank'>https://github.com/Timmer27/stockDiary</a>"
      }
    ]
  }
];
