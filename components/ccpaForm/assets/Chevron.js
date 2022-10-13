import React from 'react';

export const Chevron = ({className, bgColor=''}) =>
<svg 
  className={className}
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.4992L4.5 8.99922L5.55 7.94922L12 14.3992L18.45 7.94922L19.5 8.99922L12 16.4992Z" 
    fill={bgColor===''? "#001133": bgColor}
    fill-opacity="0.6"/>
</svg>


// <svg
//   className={className}
//   width="18"
//   height="18"
//   viewBox="0 0 18 18"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//   fillRule="evenodd"
//   clipRule="evenodd"
//   d="M9 12.375L3.375 6.75002L4.1625 5.96252L9 10.8L13.8375 5.96252L14.625 6.75002L9 12.375Z"
//   fill={bgColor===''? "#001133": bgColor}
//   fillOpacity="0.6"
//   />
// </svg>