
import React, { useState } from 'react';

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
    ),
    // Urban/Logistics image
    image: 'https://images.unsplash.com/photo-1494412651409-ae1e3ad83704?auto=format&fit=crop&w=800&q=80'
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
    ),
    // Drone image
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
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
    ),
    // AI/Network image
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
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
    ),
    // Manufacturing image
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  }
];

const About: React.FC = () => {
  const [activeId, setActiveId] = useState(researchFields[0].id);
  const activeField = researchFields.find(f => f.id === activeId) || researchFields[0];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-600 font-bold text-sm uppercase tracking-widest mb-4">
            <div className="w-8 h-[2px] bg-teal-600"></div>
            <span>연구실 소개</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            네트워크 최적화의<br />
            <span className="text-teal-500">혁신을 선도합니다</span>
          </h2>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Operations Research Laboratory는 물류, 공급망, 전력망, 지능형 제조 분야의 
            복잡한 현실 문제를 해결하기 위한 혁신적인 솔루션을 개발합니다.
          </p>
        </div>

        {/* Interactive Research Fields */}
        <div id="research" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start scroll-mt-28">
          
          {/* List Column */}
          <div className="space-y-4">
            {researchFields.map((field) => (
              <div 
                key={field.id}
                onMouseEnter={() => setActiveId(field.id)}
                className={`group p-6 rounded-3xl transition-all duration-300 cursor-pointer border ${
                  activeId === field.id 
                    ? 'bg-slate-900 text-white shadow-2xl border-slate-900 scale-105' 
                    : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                    activeId === field.id 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white text-teal-600 border border-slate-200'
                  }`}>
                    {field.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold uppercase tracking-wider ${
                        activeId === field.id ? 'text-teal-400' : 'text-slate-400'
                      }`}>
                        {field.id}
                      </span>
                      <h4 className={`text-xl font-bold ${
                        activeId === field.id ? 'text-white' : 'text-slate-900'
                      }`}>
                        {field.title}
                      </h4>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${
                      activeId === field.id ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {field.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {field.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border transition-colors ${
                            activeId === field.id
                              ? 'bg-white/10 text-teal-300 border-white/10'
                              : 'bg-white text-slate-400 border-slate-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 hidden lg:block sticky top-28">
            {researchFields.map((field) => (
              <img 
                key={field.id}
                src={field.image}
                alt={field.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                  activeId === field.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-110'
                }`}
              />
            ))}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            
            {/* Active Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-all duration-500">
               <div className="overflow-hidden">
                 <h3 className="text-3xl font-bold text-white mb-2 translate-y-0 transition-transform">
                   {activeField.title}
                 </h3>
                 <p className="text-slate-300 line-clamp-2">
                   {activeField.description}
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
