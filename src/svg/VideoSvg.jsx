import * as React from 'react';

const SvgComponent = (props) => (
  <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" stroke="#FE5E44" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M34.042 10.708 23.833 18l10.209 7.292V10.708Z" />
      <path d="M20.917 7.792H4.875a2.917 2.917 0 0 0-2.917 2.916v14.584a2.917 2.917 0 0 0 2.917 2.916h16.042a2.917 2.917 0 0 0 2.916-2.916V10.708a2.917 2.917 0 0 0-2.916-2.916Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.5 .5)" d="M0 0h35v35H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
