import { Project } from './utils';
import ProjectModal from './ProjectModal';
import gitHubImage from './Images/github-logo.jpeg';
export const ProjectCard = ({ title, description, gitUrl: url, image, hostUrl }: Project) => {
  return (
    <div className="bg-slate-700 grid place-items-center p-6 rounded shadow project-card cursor-default">
      <img
        src={image ? image : gitHubImage}
        alt="Project 1"
        className="w-full mb-4 rounded sm:h-fit h-full"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <ProjectModal
        title={title}
        description={description}
        gitUrl={url}
        image={image}
        hostUrl={hostUrl}
      />
    </div>
  );
};
