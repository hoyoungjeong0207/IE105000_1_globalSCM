
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/herobannerfortransportandlogisticscompanygmw2425-i9tIBV5PSdTL7pBjqIP7bNEL/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full scale-105"
          title="Spline 3D Scene"
        ></iframe>
        {/* Overlay to ensure text readability - Made darker for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-teal-400 uppercase bg-black/40 backdrop-blur-md rounded-full border border-teal-400/30 shadow-lg">
            고려대학교 공과대학 연구소
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[0.9] drop-shadow-xl">
            Operations<br />
            Research<br />
            <span className="text-teal-400 italic">Laboratory</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            물류, 공급망, 지능형 제조 분야의 복잡한 현실 문제를 해결하기 위한 
            혁신적인 최적화 솔루션을 개발합니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#research" 
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-full transition-all duration-300 shadow-lg shadow-teal-500/20"
            >
              연구분야 보기
            </a>
            <a 
              href="#publications" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 shadow-lg"
            >
              논문 보기
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-12 border-t border-white/20 pt-8 max-w-lg bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <div>
              <div className="text-3xl font-bold text-white drop-shadow-md">17+</div>
              <div className="text-sm text-slate-300 font-medium">학술지 논문</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white drop-shadow-md">2</div>
              <div className="text-sm text-slate-300 font-medium">진행중 연구과제</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white drop-shadow-md">Top 1%</div>
              <div className="text-sm text-slate-300 font-medium">JCR 분야 상위</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-center flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-medium uppercase tracking-widest drop-shadow-md">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-teal-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
