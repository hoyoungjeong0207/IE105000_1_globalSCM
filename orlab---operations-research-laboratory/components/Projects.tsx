
import React from 'react';

const projects = [
  {
    period: '2025.06 ~ 2028.05',
    title: 'V2G 기반 스마트 물류-전력망 통합 운영 최적화 연구',
    description: '전기차가 에너지 조절 자원으로 기능하는 상황에서 물류 네트워크 운영과 전력 계통 관리를 통합하여 비용 효율성과 지속가능성을 달성하는 연구',
    funder: '한국연구재단 · 연구책임자',
    logo: 'https://www.nrf.re.kr/images/common/logo_nrf.png'
  },
  {
    period: '2026.01 ~ 2026.12',
    title: '실시간 동적 가격 반응형 EV 물류–배전망 통합 운영 모형 정립',
    description: '실시간 전력요금 신호를 내재화하여 EV 물류 경로와 배전망 최적화(OPF)를 연계하는 통합 운영 최적화 프레임워크 정립',
    funder: '정석물류학술재단 · 연구책임자',
    logo: 'https://picsum.photos/id/20/100/100'
  },
  {
    period: '2023 ~ 현재',
    title: 'Real-time last mile delivery system using collaborative ground-aerial stations',
    description: '지상-공중 이동 기지 협업 시스템의 이론, 알고리즘 및 응용 연구',
    funder: '한국연구재단',
    logo: 'https://www.nrf.re.kr/images/common/logo_nrf.png'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block">연구과제</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">산업의 난제를 해결합니다</h2>
          <p className="text-slate-500">정부 및 민간 재단과 협력하여 미래 사회를 위한 핵심 기술 연구를 수행하고 있습니다.</p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-[31px] md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-50 bg-teal-500 shadow-lg shadow-teal-500/20 -translate-x-1/2 z-10"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 block">{project.period}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{project.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4 border-t border-slate-50 pt-4">
                    <img src={project.logo} alt="Organization" className="w-10 h-10 rounded-full object-contain bg-slate-100 p-1" />
                    <span className="text-xs font-bold text-slate-400">{project.funder}</span>
                  </div>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
