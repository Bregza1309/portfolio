import sharemeLogo from './Images/logowhite.png';
import carePulseLogo from './Images/onboarding-img.png';
export type Project = {
  title: string;
  gitUrl: string;
  description: string;
  hostUrl?: string;
  image?: string;
};
export const projects: Project[] = [
  {
    title: 'ShareMe',
    description:
      'A fully functional  photo sharing app built using React & Typescript for frontend and Sanity for Backend',
    gitUrl: 'https://github.com/Bregza1309/shareme_frontend',
    hostUrl: 'https://shareme-bregza-murex.vercel.app/',
    image: sharemeLogo,
  },
  {
    title: 'CarePulse',
    gitUrl: 'https://github.com/Bregza1309/HealthcareWebApp-carepulse',
    hostUrl: 'https://healthcare-web-app-carepulse.vercel.app/',
    image: carePulseLogo,
    description:
      'A healthcare appointment system that manages the creation, scheduling , cancelling of patient appointments.It is built using Nextjs , Appwrite database and Twilio SMS services',
  },
  {
    title: 'STM',
    gitUrl: `https://github.com/Bregza1309/STM`,
    description:
      'A web app that utilizes c# Asp.net core and blazor to modernize traditional student transport management .IT provides features such as parent-child monitoring through transportation routes , secure driver resistration , intuitive and easy to use User interfaces  .Check out more by clicking the source button below',
  },
  {
    title: 'Community Blog',
    gitUrl: `https://github.com/Bregza1309/MidvaalCommunityBlog`,
    description:
      'A full-featured community blog solution with real-time communication channels . Check out the source code for more details.',
  },
  {
    title: 'Personal Portfolio',
    gitUrl: `https://github.com/Bregza1309/portfolio`,
    description:
      'A modern , fully responsive perosnal portfolio designed using React & Typescript ,and Tailwindcss for the css designs . Check out the source code for more details.',
  },
  {
    title: 'Data Science',
    gitUrl: `https://github.com/Bregza1309/data-science-and-analysis`,
    description:
      'Various ML and Data Analytics Projects implemented using Python and Jupiter Notebooks. Check out the source code for more details.',
  },
];
