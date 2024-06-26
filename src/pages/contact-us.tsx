import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { StaticImage } from 'gatsby-plugin-image';
import { EmailIcon, PhoneIcon } from '../lib/icons';

const ContactUsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Contact Us' />
      <section className='pb-5 pr-2 pl-2'>
        <div className='max-w-lg m-auto lg-d-flex lg-col-gap-4'>
          <div className='pb-5 flex-1'>
            <div className='pb-2'>
              <p className='fs-32 c-dark pb-1'>
                <strong>Let's Build Something Great Together</strong>
              </p>
              <p className='fs-20'>
                At <strong className='fw-bold'>A to B Designs</strong>, we’re here to turn your software visions into reality. Whether you’re looking to discuss a project,
                need support, or just want to say hello, we’d love to hear from you!
              </p>
            </div>
            <div className='pb-2'>
              <h3 className='fs-28 c-dark pb-1'>Get in Touch</h3>
              <p className='fs-20 d-flex ai-center pb-1'>
                <EmailIcon color='#247c7c' height={16} width={16} />
                <span className='pl-05'>
                  <strong>Email Us:</strong>{' '}
                  <a href='mailto:info@atobdesigns.com' className='c-light td-none fw-bold'>
                    info@atobdesigns.com
                  </a>
                </span>
              </p>
              <p className='fs-20 d-flex ai-center pb-1'>
                <PhoneIcon color='#247c7c' height={20} width={20} />
                <span className='pl-05'>
                  <strong>Call Us:</strong>{' '}
                  <a href='tel:4698857988' className='c-light td-none fw-bold'>
                    (469)885-7988
                  </a>
                </span>
              </p>
            </div>
            <div>
              <p className='fs-20 pb-1'>
                <strong>Ready to start your next big project?</strong>
              </p>
              <p className='fs-20'>Drop us a line or fill out the form, and we’ll get back to you as soon as possible.</p>
            </div>
          </div>
          <div className='max-w-sm flex-1'>
            <form name='contact' action='/success/' method='post' className='bg-dark p-1' data-netlify='true'>
              <div className='border-solid border-white border-1 p-05 mb-1'>
                <input className='fs-16 bg-none border-none c-white outline-none w-100' type='text' name='name' placeholder='Name*' required />
              </div>
              <div className='border-solid border-white border-1 p-05 mb-1'>
                <input className='fs-16 bg-none border-none c-white outline-none w-100' type='email' name='email' placeholder='Email*' required />
              </div>
              <div className='border-solid border-white border-1 p-05 mb-1'>
                <input className='fs-16 bg-none border-none c-white outline-none w-100' type='tel' name='phone' placeholder='Phone*' required />
              </div>
              <div className='border-solid border-white border-1 p-05 mb-1'>
                <textarea className='fs-16 bg-none border-none c-white outline-none w-100' rows={5} name='message' placeholder='Message*' required />
              </div>
              <input className='fs-16 bg-black c-white p-1 w-100 border-black border-1 border-solid pointer' type='submit' value='Send Message' />
            </form>
          </div>
        </div>
      </section>
      <div>
        <section className='pb-5 d-flex ai-center jc-center'>
          <CallToAction to='/contact-us' title='Become Our Next Client' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

export const Head: HeadFC = () => (
  <>
    <title>Contact A to B Designs - Software Development Services</title>
    <meta
      name='description'
      content='Contact A to B Designs today to discuss your software project or get support. Email us at info@atobdesigns.com or call +1 (469) 885-7988. Your journey from A to B begins here!'
    />
    <meta name='keywords' content='software development services, expert software development, discuss your project, get support' />
  </>
);
