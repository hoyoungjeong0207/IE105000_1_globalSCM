
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">연락처</span>
            <h2 className="text-5xl font-bold mb-8 leading-tight">함께 <span className="text-teal-400 italic">협력</span>해요</h2>
            <p className="text-slate-400 text-lg mb-12">연구나 협력에 관심이 있으신가요? 산업체 프로젝트 제안이나 학생 연구 참여 등 언제든지 환영합니다.</p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">위치</h4>
                  <p className="text-slate-400">서울특별시 성북구 안암로 145<br />고려대학교 공과대학 연구실</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">이메일</h4>
                  <a href="mailto:ghy27@khu.ac.kr" className="text-slate-400 hover:text-teal-400 transition-colors">ghy27@khu.ac.kr</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">성함</label>
                  <input type="text" className="w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-teal-500 transition-all" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">이메일</label>
                  <input type="email" className="w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-teal-500 transition-all" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">문의 유형</label>
                <select className="w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-teal-500 transition-all">
                  <option>연구 협력</option>
                  <option>입학/연구원 참여 문의</option>
                  <option>산업체 솔루션 문의</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">메시지</label>
                <textarea rows={4} className="w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-teal-500 transition-all" placeholder="문의 내용을 입력하세요..."></textarea>
              </div>
              <button className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-5 rounded-2xl transition-all shadow-lg shadow-teal-500/20 uppercase tracking-widest">
                메시지 전송하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
