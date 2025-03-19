import * as React from 'react';
import { MenuIcon, CloseIcon } from '../lib/icons';
import NavList from './navList';
import { Link } from 'gatsby';

const LINKS = [
  {
    slug: 'services',
    title: 'Services',
    children: [
      { slug: 'web-design-and-development', title: 'Web Design and Development' },
      { slug: 'mobile-app-design-and-development', title: 'Mobile App Design and Development' },
      { slug: 'api-integrations-and-automation', title: 'API Integrations and Automation' },
      { slug: 'cloud-solutions', title: 'Cloud Solutions' }
    ]
  },
  { slug: 'about-us', title: 'About Us' },
  { slug: 'portfolio', title: 'Portfolio' },
  { slug: 'blog', title: 'Blog' },
  { slug: 'contact-us', title: 'Contact Us' }
];

const Nav = () => {
  const [expMenu, setExpMenu] = React.useState<boolean>(false);

  return (
    <nav className='pos-sticky top-0 bg-white z-10'>
      <div className='d-flex jc-space-between ai-center pt-1 pr-2 pb-1 pl-2 max-w-lg m-auto'>
        <div>
          <Link to='/' className='fs-20 fw-bold m-0 td-none c-black'>
            AtoB<span className='c-dark'>Designs</span>
          </Link>
        </div>
        <div>
          <button className='d-flex ai-center jc-space-between lg-d-none' onClick={() => setExpMenu(true)}>
            <MenuIcon height={32} width={32} color='black' />
          </button>
          <div className={`pos-fixed top-0 right-0 bg-dark h-100-vh z-1 w-sm lg-d-block lg-bg-none lg-h-init lg-pos-init lg-w-100 ${expMenu ? 'd-block' : 'd-none'}`}>
            <div className='d-flex jc-flex-end p-1 lg-d-none'>
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
