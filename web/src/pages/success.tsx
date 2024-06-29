import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';

const SuccessPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Success!' content='Thank you for reaching out. We will get back to you as soon as possible.' />
      <Footer />
    </div>
  );
};

export default SuccessPage;

export const Head: HeadFC = () => (
  <>
    <title>A to B Designs | Your Message Was Sent Successfully</title>
  </>
);
