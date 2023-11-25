import * as React from 'react';
import { MenuIcon, CloseIcon } from '../lib/icons';
import * as styles from '../styles/nav.module.css';
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
  return (
    <nav>
      <div className={styles.container}>
        <div>
          <p className={styles.logo}>
            AtoB<span>Designs</span>
          </p>
        </div>
        <div className={styles.colRight}>
          <button>
            <MenuIcon height={36} width={36} color='black' />
          </button>
          <div className={styles.navListContainer}>
            <div className={styles.closeBtnContainer}>
              <button>
                <CloseIcon height={36} width={36} color='#fff' />
              </button>
            </div>
            <NavList links={LINKS} isParent={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
