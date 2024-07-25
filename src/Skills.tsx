import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// Register ScrollTrigger plugin

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: 'C# Asp.Net Rest APIs', level: 90 },
  { name: 'C# Asp.Net Blazor /Razor views', level: 95 },
  { name: 'Javascript (React&Typescript)', level: 90 },
  { name: 'Solidity Smart Contract Dev', level: 85 },
];

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (skillsRef.current) {
        const skillBars = skillsRef.current.querySelectorAll('.skill-bar');

        skillBars.forEach((bar, index) => {
          const progress = bar.querySelector('.skill-progress') as HTMLElement;

          // Add hover effect
          bar.addEventListener('mouseenter', () => {
            gsap.to(progress, { scale: 1.1, duration: 0.3 });
          });
          bar.addEventListener('mouseleave', () => {
            gsap.to(progress, { scale: 1, duration: 0.3 });
          });
        });
      }
    },
    { scope: skillsRef },
  );

  return (
    <section
      id="skills"
      className="grid place-items-center text-white mb-16 sm:p-8 section-bg bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]"
    >
      <div className="section-title ">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
      </div>
      <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-4 m-4 sm:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-light">{skill.name}</span>
              <span className="text-sm font-medium text-light">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-teal-600 h-2.5 rounded-full skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
