import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={710}
    viewBox="0 0 300 710"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="1" y="524" rx="6" ry="6" width="300" height="25" />
    <rect x="3" y="557" rx="8" ry="8" width="300" height="90" />
    <rect x="1" y="665" rx="8" ry="8" width="100" height="30" />
    <rect x="154" y="657" rx="20" ry="20" width="150" height="45" />
    <rect x="0" y="0" rx="8" ry="8" width="300" height="460" />
    <rect x="0" y="473" rx="6" ry="6" width="300" height="35" />
  </ContentLoader>
);

export default Skeleton;
