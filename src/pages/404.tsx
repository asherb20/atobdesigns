import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Page Not Found' content='The page you are looking for does not exist or has been moved.' />
      <Footer />
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>A to B Designs | 404 Not Found</title>
  </>
);
