const translations = {
    en: {
        // Nav
        'nav.research':     'Research',
        'nav.research.logistics': 'Logistics Optimization',
        'nav.research.production': 'Production Optimization',
        'nav.research.network': 'Network Optimization',
        'nav.research.nextgen': 'Next-Gen Optimization',

        // Research panels
        'research.pubs.label': 'Related Publications',

        'research.logistics.desc': 'We research optimal operational strategies for complex logistics systems including urban logistics, drone delivery, underground logistics networks, and Flying Warehouses. Topics include truck-drone hybrid delivery, multi-flight-level drone routing, and urban logistics optimization integrated with underground transportation networks.',
        'research.logistics.tag1': 'Vehicle Routing (VRP)',
        'research.logistics.tag2': 'Drone Delivery',
        'research.logistics.tag3': 'Last-Mile',
        'research.logistics.tag4': 'Flying Warehouse',
        'research.logistics.tag5': 'Underground Logistics',
        'research.logistics.tag6': 'Supply Chain Design',

        'research.network.desc': 'We research the design, operation, and robustness of complex network systems — including supply chain network design and adaptive operations under climate change uncertainty, simulation-based disruption propagation and recovery strategies with network resilience analysis, and integrated V2G-based EV logistics and power distribution network operations.',
        'research.network.tag1': 'Supply Chain Network',
        'research.network.tag2': 'Climate Resilience',
        'research.network.tag3': 'Military Networks',
        'research.network.tag4': 'Network Resilience',
        'research.network.tag5': 'Simulation Optimization',
        'research.network.tag6': 'EV Logistics',
        'research.network.tag7': 'Grid Optimization',

        'research.production.desc': 'We maximize production efficiency through parameter optimization of manufacturing processes such as hot forging and stamping, integrated with machine-learning-enhanced FEM (Finite Element Method) simulations. Research covers process design and quality control using DNN, reinforcement learning, and genetic algorithms.',
        'research.production.tag1': 'Hot Forging',
        'research.production.tag2': 'Stamping',
        'research.production.tag3': 'FEM',
        'research.production.tag4': 'Process Optimization',
        'research.production.tag5': 'Quality Control',
        'research.production.tag6': 'Intelligent Manufacturing',

        'research.nextgen.desc': 'We explore future-oriented optimization techniques including combinatorial optimization via meta-learning, reinforcement learning, and neural network-based solvers, as well as quantum computing-based algorithm development. We tackle complex systems problems at the intersection of artificial intelligence and operations research.',
        'research.nextgen.tag1': 'Meta-Learning',
        'research.nextgen.tag2': 'Reinforcement Learning',
        'research.nextgen.tag3': 'Deep Learning',
        'research.nextgen.tag4': 'Quantum Computing',
        'research.nextgen.tag5': 'Combinatorial Optimization',
        'research.nextgen.tag6': 'Artificial Intelligence',

        'nav.publications': 'Publications',
        'nav.pub.international': 'International',
        'nav.pub.domestic':  'Domestic',
        'nav.pub.conference':'Conference',
        'nav.pub.patent':    'Patents',
        'nav.projects':      'Projects',
        'nav.proj.ongoing':  'Ongoing',
        'nav.proj.completed':'Completed',
        'nav.team':          'Members',
        'nav.team.advisor':  'Advisor',
        'nav.team.members':  'Lab Members',
        'nav.team.alumni':   'Alumni',
        'nav.courses':       'Courses',
        'nav.courses.scm':   'Supply Chain Management',
        'nav.courses.ie':    'Intro to IE & Management',
        'nav.community':     'Community',
        'nav.community.news':'News',
        'nav.community.photos':'Photos',
        'nav.community.contact':'Contact',

        // Hero
        'hero.subtitle': 'Pioneering the future of logistics, manufacturing, production, and integrated systems through intelligent optimization.',
        'hero.cta.primary': 'Explore Research',
        'hero.cta.secondary': 'Contact Us',

        // Recruiting
        'recruit.title': 'Join Our Lab',
        'recruit.desc':  'We are looking for motivated researchers passionate about operations research and optimization.',
        'recruit.btn':   'Apply Now',

        // News section
        'news.tag':   'News',
        'news.title': 'Latest News',
        'news.item1.title': 'Lab Website Launch',
        'news.item1.desc':  'The official website of IO-LAB is now live. Stay updated with our latest research and news.',
        'news.viewall': 'View All News →',

        // Contact
        'contact.tag':      'Contact',
        'contact.title':    'Find <span class="highlight">Us</span>',
        'contact.subtitle': 'For research collaborations and inquiries, please reach out via the contact information below.',
        'contact.email':       'Email',
        'contact.office':      "Professor's Office",
        'contact.office.addr': 'Woojung Hall, Room 6034',
        'contact.lab':         'Student Lab',
        'contact.lab.addr':    'Engineering Building, Room 504',

        // Contact page
        'contact.pi.title':       'Principal Investigator',
        'contact.pi.name.label':  'Name',
        'contact.pi.pos.label':   'Position',
        'contact.pi.pos.value':   'Assistant Professor, Dept. of Industrial & Management Engineering, Kyung Hee University',
        'contact.pi.office.label':'Office',
        'contact.pi.office.value':'Woojung Hall 6034, International Campus, Kyung Hee University',
        'contact.pi.email.label': 'Email',
        'contact.pi.phone.label': 'Phone',
        'contact.lab.title':      'Lab Location',
        'contact.lab.addr.label': 'Address',
        'contact.lab.addr.value': '1732 Deogyeong-daero, Giheung-gu, Yongin-si, Gyeonggi-do',
        'contact.lab.loc.label':  'Location',
        'contact.lab.loc.value':  'Engineering Building 504, International Campus, Kyung Hee University',
        'contact.lab.phone.value':'TBA',
        'contact.lab.dir.label':  'Director',
        'contact.join.desc':      'We are looking for motivated researchers passionate about operations research and optimization. Graduate students (M.S./Ph.D.) and undergraduate researchers are welcome.',

        // Footer
        'footer.brand':     'Intelligent Optimization Lab<br>Kyung Hee University',
        'footer.quicklinks':'Quick Links',
        'footer.news':      'News',
        'footer.pubs':      'Publications',
        'footer.projects':  'Projects',
        'footer.team':      'Team',
        'footer.resources': 'Resources',

        // Courses page
        'courses.back':             'Back to Main',
        'courses.title':            'Learning Tools &amp; Practice Materials',
        'courses.scm.name':         'Supply Chain Management',
        'courses.scm.flp.tag':      'Streamlit App · Lab #1',
        'courses.scm.flp.title':    'Facility Location Optimization Platform',
        'courses.scm.flp.desc':     'A practice platform for supply chain network design (facility opening decisions + logistics flow). Submit decision variables in CSV format and compare results on a real-time leaderboard.',
        'courses.scm.flp.features': '<li>2 suppliers, 3 candidate facilities, 4 customers</li><li>Binary variables (facility opening) + continuous variables (flow)</li><li>Minimum cost objective · penalty for constraint violations</li><li>Relative scoring based on 10,000-point maximum</li>',
        'courses.scm.npv.tag':      'Streamlit App · Lab #2',
        'courses.scm.npv.title':    'Demand Forecasting & Warehouse Strategy Game',
        'courses.scm.npv.desc':     'An interactive game where you forecast demand across high/low market states, select warehouse locations and supply strategies, and maximize NPV through adaptive decisions. Experience demand-driven planning and expected value optimization.',
        'courses.scm.npv.features': '<li>High / Low demand state forecasting</li><li>Warehouse location and strategy selection</li><li>Adaptive decisions based on realized demand</li><li>Monte Carlo simulation for strategy comparison</li>',
        'courses.scm.lab3.tag':     'Lab #3',
        'courses.scm.lab3.title':   'Lab #3',
        'courses.scm.lab3.desc':    'This lab material is under preparation.',
        'courses.scm.final.title':  'Final Project',
        'courses.scm.final.desc':   'Final project materials are under preparation.',
        'courses.comingsoon':        'Coming Soon',
        'courses.launch':            'Launch App',
        'courses.ie.name':           'Introduction to IE & Management',
        'courses.ie.download':       'Download Lecture Notes',
        'courses.ie.scm.tag':        'Browser Game · Lab #1',
        'courses.ie.scm.title':      'Global Logistics Management Simulation',
        'courses.ie.scm.desc':       'An educational browser game where you build mines, factories, and sales hubs across 7 world regions, design transportation routes, and maximize profit.',
        'courses.ie.scm.features':   '<li>7 world regions · 3 facility types (mine, factory, sales hub)</li><li>Region-specific demand and market price differentiation</li><li>Transportation route design and cost calculation</li><li>5-round profit/loss simulation</li>',
        'courses.ie.scm.launch':     'Start Game',
        'courses.ie.vrp.tag':        'Browser Game · Lab #2',
        'courses.ie.vrp.title':      'Pickup & Delivery Route Optimization Game',
        'courses.ie.vrp.desc':       'A VRP (Vehicle Routing Problem) practice game where you design pickup and delivery routes for 5 shipments using 2 vehicles and minimize total travel distance.',
        'courses.ie.vrp.features':   '<li>Pickup → delivery precedence constraints</li><li>Vehicle capacity constraint (Capacity = 3)</li><li>Design routes by clicking on the map</li><li>Score vs. benchmark optimal distance · leaderboard</li>',
        'courses.ie.vrp.launch':     'Start Game',
        'courses.ie.lab3.tag':       'Lab #3',
        'courses.ie.lab3.title':     'Lab #3',
        'courses.ie.lab3.desc':      'This lab material is under preparation.',
    },
    ko: {
        // Nav
        'nav.research':     '연구분야',
        'nav.research.logistics': '물류 최적화',
        'nav.research.production': '생산 최적화',
        'nav.research.network': '네트워크 최적화',
        'nav.research.nextgen': '차세대 최적화',

        // Research panels
        'research.pubs.label': '관련 논문',

        'research.logistics.desc': '도시 물류, 드론 배송, 지하 물류 네트워크, 비행 창고(Flying Warehouse) 등 복잡한 물류 시스템에서 최적 운영 전략을 연구합니다. 차량-드론 복합 배송, 다중 비행 수준(multi-flight level) 드론 경로 설계, 지하 운송망과 연계된 도시 물류 최적화 등을 다룹니다.',
        'research.logistics.tag1': '차량 경로 (VRP)',
        'research.logistics.tag2': '드론 배송',
        'research.logistics.tag3': '라스트마일',
        'research.logistics.tag4': '비행 창고',
        'research.logistics.tag5': '지하 물류',
        'research.logistics.tag6': '공급망 설계',

        'research.network.desc': '기후변화 불확실성을 고려한 공급망(supply chain network) 설계 및 적응형 운영 전략, 시뮬레이션 기반 장애 전파·복구 전략과 네트워크 회복력(resilience) 분석, V2G 기반 EV 물류·배전망 통합 운영 등 복잡한 네트워크 시스템의 설계·운영·강건성을 연구합니다.',
        'research.network.tag1': '공급망 네트워크',
        'research.network.tag2': '기후변화 대응',
        'research.network.tag3': '군사 네트워크',
        'research.network.tag4': '네트워크 회복력',
        'research.network.tag5': '시뮬레이션 최적화',
        'research.network.tag6': 'EV 물류',
        'research.network.tag7': '배전망 최적화',

        'research.production.desc': '열간 단조(hot forging), 스탬핑(stamping) 등 제조 공정의 파라미터 최적화와 머신러닝 통합 FEM(유한요소법) 시뮬레이션을 통해 생산 효율을 극대화합니다. DNN, 강화학습, 유전 알고리즘을 활용한 공정 설계 및 품질 제어 연구를 수행합니다.',
        'research.production.tag1': '열간 단조',
        'research.production.tag2': '스탬핑',
        'research.production.tag3': '유한요소법 (FEM)',
        'research.production.tag4': '공정 최적화',
        'research.production.tag5': '품질 제어',
        'research.production.tag6': '지능형 제조',

        'research.nextgen.desc': '메타러닝(meta-learning), 강화학습, 신경망 기반 해법을 활용한 조합 최적화 문제 해결 및 양자 컴퓨팅(quantum computing) 기반 알고리즘 개발 등 미래 지향적 최적화 기법을 연구합니다. 인공지능과 운영과학의 융합을 통해 복잡계 문제에 도전합니다.',
        'research.nextgen.tag1': '메타러닝',
        'research.nextgen.tag2': '강화학습',
        'research.nextgen.tag3': '딥러닝',
        'research.nextgen.tag4': '양자 컴퓨팅',
        'research.nextgen.tag5': '조합 최적화',
        'research.nextgen.tag6': '인공지능',

        'nav.publications': '논문',
        'nav.pub.international': '국제 논문',
        'nav.pub.domestic':  '국내 논문',
        'nav.pub.conference':'학회지',
        'nav.pub.patent':    '특허',
        'nav.projects':      '연구과제',
        'nav.proj.ongoing':  '진행중인 과제',
        'nav.proj.completed':'완료한 과제',
        'nav.team':          '구성원',
        'nav.team.advisor':  '지도교수',
        'nav.team.members':  '연구원',
        'nav.team.alumni':   '졸업생',
        'nav.courses':       '교육자료',
        'nav.courses.scm':   '공급사슬관리',
        'nav.courses.ie':    '산업경영공학의 이해',
        'nav.community':     '커뮤니티',
        'nav.community.news':'소식',
        'nav.community.photos':'사진',
        'nav.community.contact':'연락처',

        // Hero
        'hero.subtitle': '지능형 최적화를 통해 물류, 제조, 생산 및 통합 시스템의 미래를 개척합니다.',
        'hero.cta.primary': '연구 분야 보기',
        'hero.cta.secondary': '문의하기',

        // Recruiting
        'recruit.title': '연구진 모집',
        'recruit.desc':  '운영과학과 최적화에 열정을 가진 동기부여된 연구자를 찾고 있습니다.',
        'recruit.btn':   '지원하기',

        // News
        'news.tag':   '소식',
        'news.title': '최신 소식',
        'news.item1.title': '연구실 홈페이지 오픈',
        'news.item1.desc':  'Intelligent Optimization LAB (IO-LAB)의 공식 홈페이지를 오픈했습니다. 연구실의 최신 연구 성과와 소식을 확인하실 수 있습니다.',
        'news.viewall': '전체 소식 보기 →',

        // Contact
        'contact.tag':      '연락처',
        'contact.title':    '찾아오시는 <span class="highlight">길</span>',
        'contact.subtitle': '연구 협력 및 문의는 아래 연락처로 연락해 주세요.',
        'contact.email':       '이메일',
        'contact.office':      '교수 연구실',
        'contact.office.addr': '우정원 6034호',
        'contact.lab':         '학생 연구실',
        'contact.lab.addr':    '공학관 504호',

        // Contact page
        'contact.pi.title':       '연구책임자',
        'contact.pi.name.label':  '이름',
        'contact.pi.pos.label':   '직위',
        'contact.pi.pos.value':   '조교수, 경희대학교 산업경영공학과',
        'contact.pi.office.label':'연구실',
        'contact.pi.office.value':'경희대학교 국제캠퍼스 우정원 6034',
        'contact.pi.email.label': '이메일',
        'contact.pi.phone.label': '전화',
        'contact.lab.title':      '연구실',
        'contact.lab.addr.label': '주소',
        'contact.lab.addr.value': '경기도 용인시 기흥구 덕영대로 1732',
        'contact.lab.loc.label':  '위치',
        'contact.lab.loc.value':  '경희대학교 국제캠퍼스 공학관 504',
        'contact.lab.phone.value':'추후 공개',
        'contact.lab.dir.label':  '책임자',
        'contact.join.desc':      '운영과학과 최적화에 열정을 가진 동기부여된 연구자를 찾고 있습니다. 대학원생(석·박사) 및 학부연구생 모집 중입니다.',

        // Footer
        'footer.brand':     '지능형 최적화 연구실<br>경희대학교',
        'footer.quicklinks':'빠른 링크',
        'footer.news':      '소식',
        'footer.pubs':      '논문',
        'footer.projects':  '연구과제',
        'footer.team':      '연구진',
        'footer.resources': '자료',

        // Courses page
        'courses.back':             '메인으로 돌아가기',
        'courses.title':            '학습 도구 &amp; 실습 자료',
        'courses.scm.name':         '공급사슬관리',
        'courses.scm.flp.tag':      'Streamlit App · 실습 #1',
        'courses.scm.flp.title':    '시설입지 최적화 경쟁 플랫폼',
        'courses.scm.flp.desc':     '공급망 네트워크 설계(시설 개설 결정 + 물류 흐름)를 주제로 한 실습 플랫폼입니다. CSV 형식으로 의사결정변수를 제출하고 실시간 리더보드에서 최적화 결과를 비교합니다.',
        'courses.scm.flp.features': '<li>공급자 2곳, 후보 시설 3곳, 고객 4곳</li><li>이진 변수(시설 개설) + 연속 변수(물류 흐름)</li><li>최소 비용 목적함수 · 제약 위반 시 페널티 부과</li><li>최고점 10,000점 기준 상대 채점</li>',
        'courses.scm.npv.tag':      'Streamlit App · 실습 #2',
        'courses.scm.npv.title':    '수요 예측 & 창고 전략 게임',
        'courses.scm.npv.desc':     '고수요/저수요 시장 상태를 예측하고, 창고 입지 및 공급 전략을 선택하여 NPV를 극대화하는 인터랙티브 게임입니다. 수요 기반 계획 수립과 기대값 최적화를 직접 체험합니다.',
        'courses.scm.npv.features': '<li>고수요 / 저수요 상태 수요 예측</li><li>창고 입지 및 전략 선택</li><li>실현 수요에 따른 적응형 의사결정</li><li>몬테카를로 시뮬레이션으로 전략 비교</li>',
        'courses.scm.lab3.tag':     '실습 #3',
        'courses.scm.lab3.title':   '실습 #3',
        'courses.scm.lab3.desc':    '준비 중인 실습 자료입니다.',
        'courses.scm.final.title':  '기말 프로젝트',
        'courses.scm.final.desc':   '준비 중인 기말 프로젝트 자료입니다.',
        'courses.comingsoon':        '준비중',
        'courses.launch':            '앱 실행',
        'courses.ie.name':           '산업경영공학의 이해',
        'courses.ie.download':       '강의자료 다운로드',
        'courses.ie.scm.tag':        'Browser Game · 실습 #1',
        'courses.ie.scm.title':      '글로벌 물류 경영 시뮬레이션',
        'courses.ie.scm.desc':       '7개 세계 지역에서 광산·공장·판매거점을 건설하고 운송 경로를 설계하여 수익을 극대화하는 교육용 브라우저 게임입니다.',
        'courses.ie.scm.features':   '<li>7개 세계 지역 · 광산·공장·판매거점 3종 시설</li><li>지역별 수요 및 시장가격 차별화</li><li>운송 경로 설계 및 비용 계산</li><li>5 라운드 기반 손익 시뮬레이션</li>',
        'courses.ie.scm.launch':     '게임 시작',
        'courses.ie.vrp.tag':        'Browser Game · 실습 #2',
        'courses.ie.vrp.title':      '픽업 & 배송 경로 최적화 게임',
        'courses.ie.vrp.desc':       '2대의 차량으로 5개 화물의 픽업·배송 경로를 직접 설계하고, 총 이동 거리를 최소화하는 VRP(Vehicle Routing Problem) 실습 게임입니다.',
        'courses.ie.vrp.features':   '<li>픽업 → 배송 선행 제약 조건 (Precedence Constraint)</li><li>차량 적재 용량 제약 (Capacity = 3)</li><li>지도 위 클릭으로 경로 직접 구성</li><li>기준 최적 거리 대비 점수 산출 및 리더보드</li>',
        'courses.ie.vrp.launch':     '게임 시작',
        'courses.ie.lab3.tag':       '실습 #3',
        'courses.ie.lab3.title':     '실습 #3',
        'courses.ie.lab3.desc':      '준비 중인 실습 자료입니다.',
    }
};

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update toggle button state
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('io-lab-lang', lang);
    document.documentElement.lang = lang;
    window._currentLang = lang;
}

function toggleLang(lang) {
    applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('io-lab-lang') || 'en';
    applyLang(saved);
});
