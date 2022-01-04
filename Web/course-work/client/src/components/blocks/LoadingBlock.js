import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader 
    speed={2}
    width={390}
    height={691}
    viewBox="0 0 390 691"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="257" y="12" rx="0" ry="0" width="85" height="25" /> 
    <rect x="22" y="62" rx="0" ry="0" width="323" height="56" /> 
    <rect x="25" y="14" rx="0" ry="0" width="223" height="19" /> 
    <rect x="-3" y="155" rx="0" ry="0" width="390" height="300" /> 
    <rect x="25" y="470" rx="0" ry="0" width="318" height="50" /> 
    <rect x="292" y="549" rx="0" ry="0" width="50" height="50" />
  </ContentLoader>
  );
}

export default LoadingBlock;
