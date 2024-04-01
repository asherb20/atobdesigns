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
    title: 'API Development',
    paragraphs: [
      {
        title: 'Tailored to Your Needs',
        content:
          'A to B Designs crafts APIs that align perfectly with your business requirements. Whether you need to integrate third-party services, enhance functionality, or create a bespoke solution, our team has the expertise to deliver.'
      },
      {
        title: 'Scalable and Future-Ready',
        content:
          'We design APIs with scalability in mind. As your business grows, our APIs evolve seamlessly to accommodate increased demand, ensuring your systems remain efficient and responsive.'
      }
    ]
  },
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    title: 'Integrations',
    paragraphs: [
      {
        title: 'Seamless System Connections',
        content:
          'Connect your applications, software, and platforms effortlessly with our integration services. A to B Designs ensures a harmonious flow of data across your ecosystem, reducing manual efforts and minimizing errors.'
      },
      {
        title: 'Custom Integrations',
        content:
          'No two businesses are the same. Our team excels at creating tailored integrations that fit your unique needs, providing a unified and cohesive experience across your digital landscape.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    title: 'Automation Solutions',
    paragraphs: [
      {
        title: 'Efficiency Redefined',
        content:
          "Automate repetitive tasks, workflows, and processes with A to B Designs' automation solutions. Boost productivity, reduce operational costs, and free up valuable time for your team to focus on what matters most."
      },
      {
        title: 'Workflow Optimization',
        content:
          'Our automation experts analyze your workflows to identify opportunities for optimization. We then implement tailored automation solutions to streamline operations and enhance overall efficiency.'
      }
    ]
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'Proven Track Record',
    content: 'With a history of successful API development, integrations, and automation projects, A to B Designs brings a wealth of experience to the table.'
  },
  {
    title: 'Collaborative Approach',
    content: 'We work closely with our clients, ensuring a deep understanding of your business goals to deliver solutions that align with your vision.'
  },
  {
    title: 'Cutting-Edge Technology',
    content:
      'Stay ahead of the curve with our use of the latest technologies, ensuring your APIs, integrations, and automation solutions are always at the forefront of innovation.'
  }
];

const IntegrationsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero
        title='A to B Designs: Empowering Your Business with Seamless APIs, Integrations, and Automation'
        content='Unlock the true potential of your business with A to B Designs – Your trusted partner in API development, integrations, and automation solutions. We specialize in
            creating robust, scalable, and customized solutions that streamline your processes, enhance efficiency, and drive innovation.'
      />
      <div>
        <section>
          <div className='pr-2 pb-2 pl-2 max-w-lg m-auto'>
            <h2 className='fs-32'>
              Our <span className='c-dark'>Expertise</span>
            </h2>
          </div>
          {SERVICES_SECTIONS.map(section => (
            <div>
              <div className={`bg-${section.backgroundColor} c-${section.fontColor} pt-5 pr-2 pb-4 pl-2`}>
                <div className='max-w-lg m-auto'>
                  <div>
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
              <h2 className='fs-36'>Why Choose A to B Designs?</h2>
            </div>
            <Accordion items={ACCORDION_ITEMS} />
          </div>
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 max-w-lg m-auto'>
          <p className='fs-28 pb-1'>
            <strong>Ready to revolutionize your business processes?</strong>
          </p>
          <p className='fs-20 pb-2'>
            Contact A to B Designs today and embark on a journey of seamless APIs, integrations, and automation that propels your business toward unparalleled success.
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IntegrationsPage;

export const Head: HeadFC = () => <title>API Integrations and Automation | A to B Designs</title>;
