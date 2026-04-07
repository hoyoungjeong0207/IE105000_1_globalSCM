
import React, { useState } from 'react';

const publications = [
  {
    id: 1,
    year: 2025,
    title: 'Optimization of Urban Logistics with Multi-Modal Systems: A Comprehensive Study of the Airship-Vehicle Routing Problem',
    authors: 'Jeong, H.Y., and Song, B.D.',
    journal: 'Transportation Research Part E: Logistics and Transportation Review, 204, p.104415',
    badge: 'SCIE, JCR 1.4%',
    link: 'https://doi.org/10.1016/j.tre.2025.104415'
  },
  {
    id: 2,
    year: 2025,
    title: 'Meta-Learning-Based Adaptive Operator Selection for Traveling Salesman Problem',
    authors: 'Jeong, H.Y., and Song, B.D.',
    journal: 'Applied Soft Computing, p.113930',
    badge: 'SCIE, JCR 9.1%',
    link: 'https://doi.org/10.1016/j.asoc.2025.113030'
  },
  {
    id: 3,
    year: 2024,
    title: 'Numerical optimization of variable blank holder force trajectories in stamping process for multi-defect reduction',
    authors: 'Guo, F., Jeong, H.Y., Park, D., Kim, G., Sung, B., and Kim, N.',
    journal: 'Materials, 17(11), p.2578',
    badge: 'SCIE',
    link: 'https://doi.org/10.3390/ma17112578'
  },
  {
    id: 4,
    year: 2023,
    title: 'Two-echelon collaborative routing problem with heterogeneous crowd-shippers',
    authors: 'Kim, B., Jeong, H.Y., and Lee, S.',
    journal: 'Computers & Operations Research, 160, p.106389',
    badge: 'SCIE',
    link: 'https://doi.org/10.1016/j.cor.2023.106389'
  }
];

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<string | number>('all');
  const years = ['all', 2025, 2024, 2023];

  const filteredPubs = filter === 'all' 
    ? publications 
    : publications.filter(p => p.year === filter);

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block">논문</span>
            <h2 className="text-4xl font-bold text-slate-900">최근 연구 성과</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilter(year)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === year 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {year === 'all' ? '전체' : year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPubs.map((pub) => (
            <article key={pub.id} className="group p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="text-4xl font-serif italic text-slate-200 group-hover:text-indigo-100 transition-colors w-24 shrink-0">
                  {pub.year}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </h4>
                  <p className="text-slate-600 mb-2 font-medium">{pub.authors}</p>
                  <p className="text-slate-400 text-sm italic mb-4">{pub.journal}</p>
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded border border-indigo-100">
                    {pub.badge}
                  </span>
                </div>
                <div className="shrink-0 flex items-center">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center space-x-2 text-slate-900 font-bold hover:text-teal-500 transition-colors group">
            <span>전체 논문 보기</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
