
import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block">연구진</span>
          <h2 className="text-4xl font-bold text-slate-900">핵심 연구 인력</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative h-80 lg:h-auto">
              <img
                src="https://picsum.photos/id/64/800/1000"
                alt="Principal Researcher"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-4">연구책임자 (Principal Investigator)</span>
              <h3 className="text-4xl font-bold text-white mb-2">정호영 박사</h3>
              <p className="text-slate-400 font-medium mb-8">박사후연구원 · 고려대학교 공과대학 연구소</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <h5 className="text-white text-sm font-bold uppercase tracking-wider">Education</h5>
                  <p className="text-slate-400 text-sm">공학박사, 산업경영공학, 퍼듀대학교</p>
                  <p className="text-slate-400 text-sm">공학석사, 산업경영공학, 퍼듀대학교</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-white text-sm font-bold uppercase tracking-wider">Contact</h5>
                  <p className="text-slate-400 text-sm">ghy27@khu.ac.kr</p>
                  <p className="text-slate-400 text-sm">(+82) 10-3281-4475</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="mailto:ghy27@khu.ac.kr" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-teal-50 rounded-[2rem] border border-teal-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900">연구진 모집</h4>
              <p className="text-slate-600 text-sm">운영과학과 최적화에 열정을 가진 동기부여된 연구자를 찾고 있습니다. 학부생 및 대학원생 연구원 지원을 환영합니다.</p>
            </div>
            <a href="#contact" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shrink-0 whitespace-nowrap">
              문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
