import { useRef, useEffect } from 'react';
import { Typed } from 'react-typed';
export const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Full-Stack Developer`, 'Web Developer', 'Database Developer', 'Mobile Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <header className="text-light py-32 mt-8  section-bg bg-[url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 place-items-center">
        <div
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-light"
          id="profile-image"
        >
          <img
            src="https://via.placeholder.com/256x256"
            alt="John Doe"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" text-white grid place-items-center">
          <h6 className="text-3xl font-bold mb-4">Brendon Muchesa</h6>
          <p className="text-2xl mb-6">
            I'm a <span ref={el}></span>
          </p>
          <a
            href="./docs/CVUpdatedPdf.pdf"
            download
            className=" bg-teal-500 no-underline text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};
