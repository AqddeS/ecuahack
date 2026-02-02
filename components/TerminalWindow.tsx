import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`border border-slate-700 bg-slate-900/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg shadow-cyan-900/10 ${className}`}>
      <div className="bg-slate-800/50 border-b border-slate-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
        </div>
        <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          {title}
        </div>
        <div className="w-8"></div>
      </div>
      <div className="p-6 relative">
        {children}
        {/* Subtle scanline */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default TerminalWindow;