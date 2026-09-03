import React from 'react';
// import logoImg from '../assets/images/logo.png';
import logoImg from '../assets/images/full logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      id="amtech-logo"
      className={`relative flex items-center justify-center   overflow-hidden select-none transition-transform duration-200 hover:scale-105 ${className}`}
      style={{ width: `${150}px`,  }}
    >
      <img
        src={logoImg}
        alt="AMTECH Logo"
        className="w-full h-full object-cover p-1 scale-105"
      />
    </div>
    // <div
    //   id="amtech-logo"
    //   className={`relative flex items-center justify-center rounded-full bg-[#0a0c0e] border border-white/25 shadow-inner overflow-hidden select-none transition-transform duration-200 hover:scale-105 ${className}`}
    //   style={{ width: `${size}px`, height: `${size}px` }}
    // >
    //   <img
    //     src={logoImg}
    //     alt="AMTECH Logo"
    //     className="w-full h-full object-cover p-1 scale-105"
    //   />
    // </div>
  );
};

