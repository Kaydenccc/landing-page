import * as React from 'react';

const SvgComponent = (props) => (
  <svg width={35} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.375 9.25h26.25M11.667 9.25V6.333a2.917 2.917 0 0 1 2.916-2.916h5.834a2.917 2.917 0 0 1 2.916 2.916V9.25m4.375 0v20.417a2.917 2.917 0 0 1-2.916 2.916H10.208a2.917 2.917 0 0 1-2.916-2.916V9.25h20.416ZM14.583 16.542v8.75M20.417 16.542v8.75"
      stroke="#FE5E44"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
