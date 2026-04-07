
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <span className="text-slate-900">OR</span>
              <span className="text-teal-500">LAB</span>
            </a>
            <p className="text-slate-400 text-sm mt-2 font-medium">Operations Research Laboratory</p>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-teal-500 transition-colors">소개</a>
            <a href="#research" className="hover:text-teal-500 transition-colors">연구분야</a>
            <a href="#publications" className="hover:text-teal-500 transition-colors">논문</a>
            <a href="#projects" className="hover:text-teal-500 transition-colors">연구과제</a>
          </div>

          <div className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} ORLAB. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
