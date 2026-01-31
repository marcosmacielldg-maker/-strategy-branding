import React, { useEffect, Suspense } from 'react';
import Hero from './Hero';
import { useLocation } from 'react-router-dom';

const BrandStories = React.lazy(() => import('./BrandStories'));
const Services = React.lazy(() => import('./Services'));
const Journey = React.lazy(() => import('./Journey'));
const About = React.lazy(() => import('./About'));
const Methodology = React.lazy(() => import('./Methodology'));
const Contact = React.lazy(() => import('./Contact'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const DiagnosisCTA = React.lazy(() => import('./DiagnosisCTA'));

const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <BrandStories />
        <About />
        <Services />
        <Journey />
        <Methodology />
        <Testimonials />
        <Contact />
        <DiagnosisCTA />
      </Suspense>
    </>
  );
};

export default Home;