import * as React from 'react';

const SvgComponent = (props) => (
  <svg width={35} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" stroke="#FE5E44" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.292 7.792a11.667 11.667 0 0 0 5.833 21.875H26.25a7.291 7.291 0 0 0 2.48-.438m4.243-4.01a7.291 7.291 0 0 0-6.723-10.136h-1.837a11.667 11.667 0 0 0-10.282-8.75L32.973 25.22ZM1.458 1.958l32.084 32.084" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h35v35H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
