import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
// Testimonial rotation
type Testimonial = {
  text: string;
  author: string;
};
const testimonials: Testimonial[] = [
  {
    text: 'Brendon is an exceptional developer. His attention to detail and problem-solving skills are outstanding.',
    author: 'Jane Smith, Project Manager at Tech Co.',
  },
  {
    text: 'Working with Brendon was a pleasure. He consistently delivered high-quality code and was always eager to learn and improve.',
    author: 'Mike Brendonson, Senior Developer at Innovation Inc.',
  },
  {
    text: "Brendon's ability to tackle complex problems and come up with innovative solutions is truly impressive.",
    author: 'Sarah Lee, CTO at StartUp X',
  },
];
export const Testimonials = () => {
  let currentTestimonial = 0;
  const testimonialContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (testimonialContainer.current) {
        setInterval(() => {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          gsap.to(testimonialContainer, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              testimonialContainer.current!.innerHTML = `
                <div class="bg-gray-600 p-6 rounded shadow">
                    <p class="text-gray-300 mb-4 text-xl">"${testimonials[currentTestimonial].text}"</p>
                    <p class="font-bold text-teal-600">- ${testimonials[currentTestimonial].author}</p>
                </div>
            `;
              gsap.to(testimonialContainer, { opacity: 1, duration: 0.5 });
            },
          });
        }, 5000);
      }
    },
    { scope: testimonialContainer },
  );
  return (
    <section
      id="testimonials"
      className="grid place-items-center text-white mb-16 p-8 section-bg bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]"
    >
      <div className="section-title">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      </div>
      <div
        ref={testimonialContainer}
        className="grid grid-cols-1 w-[50%] place-items-center mt-5"
        id="testimonial-container"
      >
        <div className="bg-gray-600 p-6 rounded shadow w-[100%]">
          <p className="text-gray-300 mb-4 text-xl">
            "Brendon is an exceptional developer. His attention to detail and problem-solving skills
            are outstanding."
          </p>
          <p className="font-bold text-teal-600">- Jane Smith, Project Manager at Tech Co.</p>
        </div>
      </div>
    </section>
  );
};
