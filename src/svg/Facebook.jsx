import React from 'react';

const Facebook = (props) => {
  return (
    <svg width={45} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.667} width={44} height={44} rx={22} fill="#FE5E44" fillOpacity={0.05} />
      <path d="M28.667 12h-3a5 5 0 0 0-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3v-4Z" stroke="#FE5E44" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Facebook;
