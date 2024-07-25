import type { Project } from './Projects';
import { Button } from '@mui/material';
import ProjectModal from './ProjectModel';
export const ProjectCard = ({ title, description, url, image }: Project) => {
  return (
    <div className="bg-slate-700 grid place-items-center p-6 rounded shadow project-card">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 1"
        className="w-full mb-4 rounded"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <ProjectModal title={title} description={description} image={image} url={url} />
    </div>
  );
};
