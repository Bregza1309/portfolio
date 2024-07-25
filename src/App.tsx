import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import BackToTopButton from './BackTopButton';
export default function App() {
  return (
    <div className="bg-gray-800 h-max">
      <div>
        <NavMenu />
        <Hero />
        <BackToTopButton />
      </div>

      <main className="grid place-content-center sm:mx-20 sm:mt-5 ">
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
