import * as React from 'react';

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
