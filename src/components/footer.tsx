import * as React from 'react';
import { FacebookIcon, InstagramIcon, XIcon } from '../lib/icons';

const Footer = () => {
  return (
    <footer>
      <div className='pt-5 pr-2 pb-2 pl-2'>
        <div className='med-d-flex med-col-gap-2'>
          <div className='pb-2 med-flex-1'>
            <p className='fs-32 fw-bold pb-05'>
              AtoB<span className='c-dark'>Designs</span>
            </p>
            <a href='tel:4698857988' className='d-block c-light td-none fs-20 pb-05 fw-bold'>
              (469) 885-7988
            </a>
            <a href='mailto:info@atobdesigns.com' className='d-block c-light td-none fs-20 pb-05 fw-bold'>
              info@atobdesigns.com
            </a>
          </div>
          <div className='pb-2 med-flex-1'>
            <p className='fs-28 fw-bold pb-1'>Follow Us</p>
            <ul className='lst-none d-flex gap-1'>
              <li className='bg-light d-flex jc-center ai-center' style={{ width: 50, height: 50 }}>
                <a href='#'>
                  <FacebookIcon color='#fff' height={32} width={32} />
                </a>
              </li>
              <li className='bg-light d-flex jc-center ai-center' style={{ width: 50, height: 50 }}>
                <a href='#'>
                  <InstagramIcon color='#fff' height={32} width={32} />{' '}
                </a>
              </li>
              <li className='bg-light d-flex jc-center ai-center' style={{ width: 50, height: 50 }}>
                <a href='#'>
                  <XIcon color='#fff' height={24} width={24} />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='fs-16 med-text-center'>Copyright &copy; 2023 A to B Designs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
