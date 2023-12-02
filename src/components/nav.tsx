import * as React from 'react';
import { MenuIcon, CloseIcon } from '../lib/icons';
import NavList from './navList';

const LINKS = [
  {
    slug: 'services',
    title: 'Services',
    children: [
      { slug: 'websites', title: 'Websites' },
      { slug: 'mobile-apps', title: 'Mobile Apps' },
      { slug: 'cloud-solutions', title: 'Cloud Solutions' },
      { slug: 'integrations', title: 'Integrations' }
    ]
  },
  { slug: 'about-us', title: 'About Us' },
  { slug: 'portfolio', title: 'Portfolio' },
  { slug: 'contact-us', title: 'Contact Us' }
];

const Nav = () => {
  const [expMenu, setExpMenu] = React.useState<boolean>(false);

  return (
    <nav className='pos-sticky top-0 bg-white z-1'>
      <div className='d-flex jc-space-between ai-center pt-1 pr-2 pb-1 pl-2'>
        <div>
          <p className='fs-20 fw-bold m-0'>
            AtoB<span className='c-dark'>Designs</span>
          </p>
        </div>
        <div>
          <button className='d-flex ai-center jc-space-between' onClick={() => setExpMenu(true)}>
            <MenuIcon height={32} width={32} color='black' />
          </button>
          <div style={{ width: 320 }} className={`pos-fixed top-0 right-0 bg-dark h-100-vh z-1 ${expMenu ? 'd-block' : 'd-none'}`}>
            <div className='d-flex jc-flex-end p-1'>
              <button onClick={() => setExpMenu(false)}>
                <CloseIcon height={32} width={32} color='#fff' />
              </button>
            </div>
            <NavList links={LINKS} isParent={true} visible={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
