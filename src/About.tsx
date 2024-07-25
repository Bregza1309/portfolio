import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export const About = () => {
  const experienceCounter = useRef(null);
  useEffect(() => {
    gsap.to(experienceCounter.current, {
      innerHTML: 3,
      duration: 3,
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });
  });
  return (
    <section id="about" className="grid place-items-center text-white sm:mb-16 sm:p-8 section-bg">
      <div className="section-title">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 border-collapse border-b-8 border-b-teal-300 ">
          About Me
        </h2>
      </div>
      <div className="sm:text-3xl text-xl font-bold mb-4 mt-4">
        <span ref={experienceCounter}></span> Years of Experience
      </div>

      <div className="md:w-[50%]">
        <p className="text-light sm:text-xl mb-4 p-2">
          Hello! I'm Brendon, a passionate full-stack developer with 3 years of experience in
          crafting web applications. My journey in tech started with a Information Technology degree
          from Richfield Institute of Technology (SA), and since then, I've been on a continuous
          learning path, exploring new technologies and best practices.
        </p>
        <p className="text-light sm:text-xl p-2">
          When I'm not coding, you can find me contributing to open-source projects, writing tech
          articles, or mentoring aspiring developers. I believe in the power of technology to solve
          real-world problems and I'm always excited to take on new challenges.
        </p>
      </div>
    </section>
  );
};
