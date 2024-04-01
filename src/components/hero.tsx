import * as React from 'react';
import CallToAction from './cta';

const Hero = ({ title, content }: { title: string; content?: string }) => {
  return (
    <div>
      <div className='pt-10 pr-2 pb-10 pl-2 sm-d-flex sm-flex-wrap col-gap-2 max-w-lg m-auto'>
        <div className='sm-flex-2'>
          <h3 className='fs-40 fw-bold pb-1'>{title}</h3>
          {content ? <p className='fs-24 pb-2'>{content}</p> : null}
          <CallToAction to='/contact-us' title='Book Free Consultation' />
        </div>
        <div className='p-2 sm-flex-1 d-none sm-d-block' style={{ height: 116 }}>
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
