import * as React from 'react';
import NavLink, { NavLinkType } from './navLink';

const NavList = ({ links, slugs = [], isParent = false, visible = false }: { links: NavLinkType[]; slugs?: string[]; isParent?: boolean; visible?: boolean }) => {
  return (
    <ul className={`lst-none m-0 ${visible ? 'd-block' : 'd-none'} ${isParent ? 'lg-d-flex lg-link-par trans-all' : 'lg-bg-light lg-pos-abs lg-c-white lg-link-child'}`}>
      {links.map((link: NavLinkType) => (
        <NavLink key={link.slug} title={link.title} slugs={[...slugs, link.slug]} children={link.children} />
      ))}
    </ul>
  );
};

export default NavList;
