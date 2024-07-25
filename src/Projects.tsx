import { Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './ProjectCard';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export type Project = {
  title: string;
  url?: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Student Transport Management(STM)',
    url: `https://github.com/Bregza1309/STM`,
    description:
      'A web app that utilizes c# Asp.net core and blazor to modernize traditional student transport management .IT provides features such as parent-child monitoring through transportation routes , secure driver resistration , intuitive and easy to use User interfaces  .Check out more by clicking the source button below',
  },
  {
    title: 'Community Blog',
    url: `https://github.com/Bregza1309/MidvaalCommunityBlog`,
    description:
      'A full-featured community blog solution with real-time communication channels . Check out the source code for more details.',
  },
  {
    title: 'Personal Portfolio',
    url: `https://github.com/Bregza1309/portfolio`,
    description:
      'A modern , fully responsive perosnal portfolio designed using React & Typescript ,and Tailwindcss for the css designs . Check out the source code for more details.',
  },
  {
    title: 'Data Science',
    url: `https://github.com/Bregza1309/data-science-and-analysis`,
    description:
      'Various ML and Data Analytics Projects implemented using Python and Jupiter Notebooks. Check out the source code for more details.',
  },
];
export const Projects = () => {
  const cardContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // Scroll-triggered animations for project cards
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 90%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      });
      const cards = cardContainer.current!.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
          gsap.to(card, { y: -10, duration: 0.3 });
        });
        card.addEventListener('mouseout', () => {
          gsap.to(card, { y: 0, duration: 0.3 });
        });
      });
    },
    { scope: cardContainer },
  );
  return (
    <section
      id="projects"
      className="grid place-items-center text-white mb-16 p-8 section-bg bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]"
    >
      <div className="section-title">
        {' '}
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      </div>

      <div
        ref={cardContainer}
        className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-32 gap-8 mt-8"
      >
        {projects.map((project) => (
          <ProjectCard title={project.title} description={project.description} url={project.url} />
        ))}
      </div>
    </section>
  );
};
