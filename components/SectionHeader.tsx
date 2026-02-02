import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[2px] w-12 bg-cyan-500"></div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white glitch-effect tracking-wider" data-text={title}>
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>
      <p className="text-cyan-400/80 font-mono text-sm tracking-widest pl-16">
        // {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;