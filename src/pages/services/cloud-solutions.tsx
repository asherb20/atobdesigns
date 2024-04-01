import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../../components/nav';
import '../../styles/global.css';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import Accordion from '../../components/accordion';
import CallToAction from '../../components/cta';

const SERVICES_SECTIONS = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    title: 'Google Cloud Platform (GCP)',
    paragraphs: [
      {
        title: 'Strategic Cloud Deployments',
        content:
          "Harness the power of GCP with our strategic cloud services development. We design solutions that leverage GCP's extensive capabilities, from robust data storage to advanced machine learning applications."
      },
      {
        title: 'Scalable Architectures',
        content: 'A to B Designs ensures your applications on GCP are not only feature-rich but also built on scalable architectures, ready to adapt to your business growth.'
      }
    ]
  },
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    title: 'Amazon Web Services (AWS)',
    paragraphs: [
      {
        title: 'End-to-End AWS Solutions',
        content:
          "Explore the full spectrum of AWS services with our end-to-end cloud services development. Whether it's leveraging AWS for storage, computing power, or AI applications, we have you covered."
      },
      {
        title: 'Performance Optimization',
        content: 'A to B Designs maximizes the performance of your AWS-hosted applications, optimizing costs and ensuring a responsive user experience.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    title: 'Salesforce',
    paragraphs: [
      {
        title: 'Tailored Salesforce Services',
        content:
          "Enhance your customer relationship management (CRM) with A to B Designs' Salesforce cloud services development. From customization to integration, we empower your business with Salesforce's dynamic cloud platform."
      },
      {
        title: 'Business-Centric Implementations',
        content: 'Our team specializes in tailoring Salesforce to meet your specific business objectives, ensuring a seamless integration with your existing workflows.'
      }
    ]
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'Versatile Cloud Expertise',
    content: 'A to B Designs excels in providing versatile cloud solutions, spanning multiple platforms to cater to the unique needs of your business.'
  },
  {
    title: 'Innovation-Driven Solutions',
    content:
      'Our commitment to innovation is embedded in every solution. We integrate the latest cloud technologies and industry best practices to keep your business ahead of the curve.'
  },
  {
    title: 'Client-Centric Collaboration',
    content:
      'Your business goals are our top priority. A to B Designs collaborates closely with you throughout the development process, ensuring the final cloud services meet your expectations and beyond.'
  }
];

const CloudSolutionsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero
        title='A to B Designs: Your Trusted Partner in Cloud Services Development'
        content='Welcome to A to B Designs, where innovation meets efficiency in the realm of cloud services development. Elevate your business to new heights with tailored
            solutions crafted for Google Cloud Platform (GCP), Amazon Web Services (AWS), and Salesforce. Our expert team is dedicated to transforming your digital landscape,
            ensuring scalability, security, and seamless integration of cutting-edge cloud technologies.'
      />
      <div>
        <section>
          <div className='pr-2 pb-2 pl-2 max-w-lg m-auto'>
            <h2 className='fs-32'>
              <span className='c-dark'>Cloud Services Development</span> Expertise
            </h2>
          </div>
          {SERVICES_SECTIONS.map(section => (
            <div>
              <div className={`bg-${section.backgroundColor} c-${section.fontColor} pt-5 pr-2 pb-4 pl-2`}>
                <div className='max-w-lg m-auto'>
                  <div className='pb-2'>
                    <h3 className='fs-28 pb-1'>{section.title}</h3>
                    {section.paragraphs.map(paragraph => (
                      <p className='fs-20 pb-1'>
                        <strong>{paragraph.title}:</strong> {paragraph.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 bg-dark c-white'>
          <div className='max-w-lg m-auto'>
            <div className='pb-2'>
              <h2 className='fs-36'>Why Choose A to B Designs for Cloud Services Development?</h2>
            </div>
            <Accordion items={ACCORDION_ITEMS} />
          </div>
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 max-w-lg m-auto'>
          <p className='fs-28 pb-1'>
            <strong>Ready to revolutionize your business through the cloud?</strong>
          </p>
          <p className='fs-20 pb-2'>
            Contact A to B Designs today to explore tailored cloud services development for Google Cloud Platform, Amazon Web Services, and Salesforce. Let's embark on a
            journey of digital transformation together!
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;

export const Head: HeadFC = () => <title>Cloud Solutions | A to B Designs</title>;
