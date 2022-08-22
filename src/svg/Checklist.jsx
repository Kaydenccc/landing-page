import * as React from 'react';

const Checklist = (props) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="#F1FEF8" />
    <path d="m15.2 7.2-6.6 6.4-3-2.91" stroke="#28F09D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Checklist;
