
import React from 'react';

const researchFields = [
  {
    id: '01',
    title: '도시 물류 최적화',
    description: '다중 교통수단 시스템, 지하 물류 네트워크, 비행선-차량 경로 문제를 통한 지속가능한 도시 물류 연구.',
    tags: ['차량 경로', '다중 교통수단', '지속가능성'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    id: '02',
    title: '드론 배송 시스템',
    description: '비행 창고 운영, 트럭-드론 하이브리드 배송, 다중 비행 고도 최적화, 그리고 적재량-에너지 의존성 모델링.',
    tags: ['무인항공기', '라스트마일', '하이브리드 시스템'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19V5M5 12l7-7 7 7M12 5a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    )
  },
  {
    id: '03',
    title: '메타러닝 및 적응형 AI',
    description: '조합 최적화를 위한 적응형 연산자 선택, 공정 제어를 위한 강화학습, 신경망 기반 해법 접근법.',
    tags: ['메타러닝', '강화학습', '딥러닝'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: '04',
    title: '지능형 제조',
    description: '열간 단조 공정 파라미터 최적화, 스탬핑 결함 감소, 머신러닝 통합 FEM 시뮬레이션.',
    tags: ['제조', '유한요소법', '최적화'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">연구분야</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">지능형 시스템의 경계를 탐구합니다</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchFields.map((field) => (
            <div key={field.id} className="group relative p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:-translate-y-2">
              <div className="text-slate-500 text-6xl font-serif italic absolute top-4 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {field.id}
              </div>
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all duration-300">
                {field.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{field.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {field.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {field.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 border border-slate-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
