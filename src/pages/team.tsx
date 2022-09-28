import Head from "next/head";
import Header from "../components/header";
import TeamCard from "../components/team-card";

export type TeamCardType = {
  id: string;
  team: string;
  title: string;
  github: string;
};

const Team = () => {
  const Free = [
    {
      id: "1-1",
      team: "코메봉",
      github: "https://github.com/co-me-bong/2022-daegu-sw-hackathon",
      title:
        "운전자의 안전을 위한 웅덩이 탐지 댕댕이, 웅댕이 🐶: 운전자의 안전을 위한 포트홀 탐지 운전 보조 어플리케이션",
    },
    {
      id: "1-2",
      team: "밥친구들",
      github: "https://github.com/sosschs9/Hackathon_2022",
      title: "기존 저상버스 및 피크시간대 버스 이용 문제 해결",
    },
    {
      id: "1-3",
      team: "JUSTIT",
      github: "https://github.com/wlgns12370/2022-knu--JustIt ",
      title: "대구 지역 사회 활성화 및 발전",
    },
    {
      id: "1-4",
      team: "해코지",
      github: "https://github.com/hecoej/chick",
      title: "대구 지역 구성원의 삶을 윤택하게 하는 SW개발",
    },
    {
      id: "1-5",
      team: "김오엄정",
      github: "https://github.com/thumbzzero/2022-cse-hackathon",
      title: "가로수데이터를 활용하여 은행나무 위치를 표시해 주는 길찾기 지도",
    },
    {
      id: "1-6",
      team: "내 퍼스널컬러는 해커톤",
      github: "https://github.com/jupyter1234/2022-Hackathon",
      title: "행복페이 가맹점 지도",
    },
    {
      id: "1-7",
      team: "졸업언제하조",
      github: "https://github.com/eunha812/2022-knu-cse-hackaton",
      title: "따뜻한 대구 만들기 - 도움이 쉬워지는 세상",
    },
    {
      id: "1-8",
      team: "대프리카김밥천국",
      github: "https://github.com/barahana20/2022_hackathon",
      title: "대구도시철도 열차 정보 알리미",
    },
    {
      id: "1-9",
      team: "withUs",
      github: "https://github.com/Ktaewon/2022_CSE_HACKATHON",
      title: "음악 관련 협업 도우미",
    },
    {
      id: "1-10",
      team: "풀하우스",
      github: "https://github.com/akuby21/2022KnuHackathon",
      title: "자유 관광 사용자를 위한 주변 관광지 정보 실시간 제공 서비스",
    },
    {
      id: "1-11",
      team: "창공",
      github: "https://github.com/jinbae123/2022_knu_sw_hackathon",
      title: "다함께 대구! - 대구 시민이 함께 참여하여 만드는 가상의 대구 지도",
    },
    {
      id: "1-12",
      team: "레몬에이드",
      github: "https://github.com/parkdohuni/2022-Hackathon",
      title: "대구 지역 아동 가정 구성원의 삶을 윤택하게 만들자",
    },
    {
      id: "1-13",
      team: "러너즈",
      github: "https://github.com/rewls/knu-hackathon-2022",
      title: "문화생활",
    },
    {
      id: "1-14",
      team: "신화창조",
      github: "https://github.com/mchaewon/shinhwacreate",
      title: "고령층을 위한 병원검색 웹",
    },
    {
      id: "1-15",
      team: "심컴남자들",
      github: "https://github.com/sang-hash/deagu--hackathon",
      title: "대구시 관광 활성화",
    },
    {
      id: "1-16",
      team: "김경무",
      github: "https://github.com/Kimhyunggue/kim.git",
      title: "택시 쉐어링 시스템",
    },
    {
      id: "1-17",
      team: "감자타코야끼",
      github: "https://github.com/gamzazoha/gamzatakoyaki",
      title: "대구 외곽 지역 소상공인 진흥에 도움을 줄 수 있는 웹 제작",
    },
    {
      id: "1-18",
      team: "Algorithm & Science for Society Association (ASSA)",
      github: "https://github.com/7heIVIaze/Hackathon",
      title: "메타버스를 이용한 대구 랜드마크 탐방",
    },
    {
      id: "1-19",
      team: "아나콘다",
      github: "https://github.com/gunwoo99/Hackathon_Anaconda",
      title: "장애인들을 위한 도우미 매칭 프로그램",
    },
    {
      id: "1-20",
      team: "개나소나",
      github: "https://github.com/jangsion23/dogandcow",
      title: "대구 관광서비스 산업",
    },
    {
      id: "1-21",
      team: "지존22",
      github: "https://github.com/NKYgithub/202209hackaton",
      title: "대구광역시 관광 자원 활성화",
    },
    {
      id: "1-22",
      team: "PGSR",
      github: "https://github.com/jobsdone23/CanDoo.git",
      title:
        "안전 문제 상황에서 신속한 대처를 위한 '공공재의 정보 접근 어려움'",
    },
    {
      id: "1-23",
      team: "이지로운 대학생활",
      github: "https://github.com/im175cm/shinning-daegu",
      title: "대구 지역 문화/예술 공연 한눈에 모아보기",
    },
    {
      id: "1-24",
      team: "스피커팀",
      github: "https://github.com/tensor56/speaker-hackerton2022",
      title: "인공신경망 기반 대구지역 미세먼지 농도 예측",
    },
    {
      id: "1-25",
      team: "간장반양념반",
      github: "https://github.com/songchaehyun/2022-cse-hackaton",
      title: "대구 시민들의 주차 불편 문제를 해소하는 SW 개발",
    },
    {
      id: "1-26",
      team: "이니수니",
      github: "https://github.com/kwonssshyeon/knu_cse_2022-hackathon",
      title: "장애우 및 노약자를 위한 여행 정보 제공",
    },
  ];
  const Special = [
    {
      id: "2-1",
      team: "IT4호관의 잠 못 이루는 밤",
      github:
        "https://github.com/nsce9806q/Sleepless-in-IT-4_KNU-Hackathon2022",
      title: "학교 밖 은둔 청소년",
    },
    {
      id: "2-2",
      team: "QWER",
      github: "https://github.com/sami355-24/2022SwHackathon",
      title: "필요한 정책의 사용자 접근 어려움",
    },
    {
      id: "2-3",
      team: "chobo",
      github: "https://github.com/githeoheo/2022hackathon.git",
      title: "팬데믹시대 모임, 심리적 지원 부족",
    },
    {
      id: "2-4",
      team: "HYME",
      github: "https://github.com/kkyh12180/HYME_Hackathon.git",
      title: "스마트 기술 교육 부재",
    },
    {
      id: "2-5",
      team: "개노답삼형제",
      github: "https://github.com/SungHyun-Kang/knu-hackathon.git",
      title: "공공의료 인식 부족",
    },
    {
      id: "2-6",
      team: "나래",
      github: "https://github.com/yang1318/2022-SW-hackathon",
      title: "랜드마크 연계 관광자원 발굴 / 비체계적인 관광 서비스",
    },
    {
      id: "2-7",
      team: "나띵벗",
      github: "https://github.com/taegon98/2022-hackathon.git",
      title: "일회용품, 재활용 쓰레기",
    },
    {
      id: "2-8",
      team: "大想(대상): 큰 상상력",
      github: "https://github.com/Blue-Riband/helmetser_v0.0",
      title: "PM 이용환경과 시민의식 부족",
    },
    {
      id: "2-9",
      team: "엄마나상탔어",
      github: "https://github.com/MamaPrice/Hackerton",
      title: "랜드마크 연계 관광자원 발굴",
    },
    {
      id: "2-10",
      team: "하루less",
      github: "https://github.com/TenJeong/2022-SWhackathon",
      title: "대구시 도시문제 발굴단 발굴 문제 中 랜드마크 연계 관광자원 발굴",
    },
    {
      id: "2-11",
      team: "창의력부족",
      github: "https://github.com/hw0603/cse-hackathon-2022",
      title: "주민 참여 방법(수단) 부족",
    },
    {
      id: "2-12",
      team: "상쓰리",
      github: "https://github.com/kwon-heejeong/2022-hackathon.git",
      title: "전통시장 내 편의시설 미비",
    },
    {
      id: "2-13",
      team: "컴둥이",
      github: "https://github.com/yerim10044001/SW_hackathon",
      title: "무지한 상태로 반려동물 양육",
    },
    {
      id: "2-14",
      team: "김신박이",
      github: "https://github.com/Apoliasm/2022.09-Hackathon",
      title: "도심 내 무단투기 쓰레기🗑️",
    },
    {
      id: "2-15",
      team: "2019",
      github: "https://github.com/hun340312/2022_CSE_HT",
      title: "일회용품, 재활용 쓰레기",
    },
    {
      id: "2-16",
      team: "TFT",
      github: "https://github.com/jkh0515/team-TFT.git",
      title: "무지한 상태로 반려동물 양육",
    },
    {
      id: "2-17",
      team: "KINGF",
      github: "https://github.com/goldanghenry/cse-hackathon_KINGF",
      title:
        "팬데믹시대 모임, 심리적 지원 부족, 세대/계층/지역 교육편차, 지역산업 활성화 및 일자리 창출",
    },
    {
      id: "2-18",
      team: "KNUCD",
      github: "https://github.com/KNUCD",
      title: "주민참여 방법(수단)부족",
    },
    {
      id: "2-19",
      team: "동우마트",
      github: "https://github.com/Geonhyeong/2022-hackathon",
      title: "무지한 상태로 반려동물 양육",
    },
    {
      id: "2-20",
      team: "developUs",
      github: "https://github.com/mouse4432/developUs",
      title: "도심 내 무단투기 쓰레기",
    },
    {
      id: "2-21",
      team: "ROCKKIEs",
      github: "https://github.com/seojeongrok/2022-hackathon",
      title: "필요한 정책의 사용자 접근 어려움",
    },
    {
      id: "2-22",
      team: "치킨밴딧",
      github: "https://github.com/0rdinary/2022-hackathon",
      title: "주민참여 방법(수단) 부족",
    },
    {
      id: "2-23",
      team: "우개하다",
      github: "https://github.com/yoo0221/2022-hackathon",
      title: "랜드마크 연계 관광자원 발굴",
    },
    {
      id: "2-24",
      team: "G80",
      github: "https://github.com/HyeonJun-Ryu/2022-hackathon",
      title: "시각 장애인 이동권 침해",
    },
    {
      id: "2-25",
      team: "d.c.t.",
      github: "https://github.com/Segyun/2022_hackaton_d.c.t.",
      title: "랜드마크 연계 관광자원 발굴",
    },
    {
      id: "2-26",
      team: "그리즐리베어",
      github: "https://github.com/seokiis/2022_hackathon.git",
      title: "노년층 디지털격차 교육 및 안내환경 부족",
    },
    {
      id: "2-27",
      team: "참크래커",
      github: "https://github.com/bokoo14/SW-hackathon",
      title: "도심내 장기간 방치된 빈집",
    },
    {
      id: "2-28",
      team: "초코송이",
      github: "https://github.com/hdddhdd/2022DaeguSW.git",
      title: "장애인 사회 진출 꺼림",
    },
    {
      id: "2-29",
      team: "GNB",
      github: "https://github.com/Bosung-Baek/2022-hackathon.git",
      title: "시각 장애인 이동권 침해",
    },
  ];
  const Drop = [
    {
      id: "3-1",
      team: "투명망토",
      github: "https://github.com/kimmokalover/2022-hackathon.git",
      title: "포기",
    },
    {
      id: "3-2",
      team: "Ping-Pong",
      github: "https://github.com/gwanwoo3849/swhackathon",
      title: "포기",
    },
    {
      id: "3-3",
      team: "양심정의사랑",
      github: "https://github.com/ItsMeSangHoonJung/-.git",
      title: "포기",
    },
    {
      id: "3-4",
      team: "11:25",
      github: "https://github.com/wjh5886/hackathon.git",
      title: "포기",
    },
    {
      id: "3-5",
      team: "YH2K",
      github: "https://github.com/Hyun-Tae-Ai/YH2K.git",
      title: "포기",
    },
    {
      id: "3-6",
      team: "후루룹쩝쩝",
      github: "https://github.com/wldnd2/2022_hackathon",
      title: "포기",
    },
    {
      id: "3-7",
      team: "정창홍",
      github: "https://github.com/jungukl/dasa.git",
      title: "포기",
    },
    {
      id: "3-8",
      team: "클래식",
      github: "https://github.com/ehtjsv2/2022_DaeguSw_Hackathon",
      title: "포기",
    },
    {
      id: "3-9",
      team: "KSJ",
      github: "https://github.com/bayy1216/TeamKSJ_hackaton",
      title: "포기",
    },
    {
      id: "3-10",
      team: "HEEJAE",
      github: "https://github.com/HEEJAEKKK/COAPP.git",
      title: "포기",
    },
    {
      id: "3-11",
      team: "간짜장",
      github: "https://github.com/waroad/2022_knu_hack",
      title: "포기",
    },
    {
      id: "3-12",
      team: "뿌셔뿌셔",
      github: "https://github.com/jaehongkim1028/22DagueSWHacker.git",
      title: "포기",
    },
    {
      id: "3-13",
      team: "bsonCrew",
      github: "https://github.com/pinkishincoloragain/Hackathon",
      title: "포기",
    },
    {
      id: "3-14",
      team: "홍탁집",
      github: "https://github.com/miiniipark/2022-hackathon",
      title: "포기",
    },
  ];

  return (
    <>
      <Head>
        <title>해커톤 참여 명단</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center max-w-6xl gap-4 px-2 pt-4 mx-auto md:px-8">
        <h1 className="pt-8 text-4xl font-bold text-center text-white">
          해커톤 제출 명단
        </h1>
        <h2 className="pt-12 pb-8 text-2xl font-bold text-center text-white">
          자유 주제 제출 팀
        </h2>
        <TeamCard props={Free} />

        <h2 className="pt-12 pb-8 text-2xl font-bold text-center text-white">
          특별 주제 제출 팀
        </h2>
        <TeamCard props={Special} />

        <h2 className="pt-12 pb-8 text-2xl font-bold text-center text-white">
          포기 팀
        </h2>
        <TeamCard props={Drop} />
      </main>
    </>
  );
};

export default Team;
