import * as React from 'react';
import CallToAction from './cta';

const Hero = ({ title }: { title: string }) => {
  return (
    <div>
      <div className='pt-5 pr-2 pb-5 pl-2 sm-d-flex sm-flex-wrap max-w-lg m-auto'>
        <div className='sm-flex-1'>
          <p className='fs-40 fw-bold pb-1'>{title}</p>
          <CallToAction to='/contact-us' title='Book Free Consultation' />
        </div>
        <div className='p-2 sm-flex-1' style={{ height: 116 }}>
          <div>
            <div className='pos-rel my-auto'>
              <div className='square bg-dark pos-abs top-0 left-0 z-1' />
              <div className='square bg-light pos-abs top-1 left-1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
