import React from 'react';

const Ig = (props) => {
  return (
    <svg width={45} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.667} width={44} height={44} rx={22} fill="#FE5E44" fillOpacity={0.05} />
      <path d="M27.667 12h-10a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5Z" stroke="#FE5E44" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.667 21.37a4 4 0 1 1-7.912 1.174 4 4 0 0 1 7.912-1.174ZM28.167 16.5h.01" stroke="#FE5E44" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Ig;
