import { Project } from './utils';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import gitHubImage from './Images/github-logo.jpeg';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  boxShadow: 24,
  p: 4,
};

export default function ProjectModal({ title, gitUrl: url, description, image, hostUrl }: Project) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className='bg-teal-600 text-white px-5 hover:bg-teal-700 text-white"'
      >
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-gray-600 grid place-content-center w-full sm:w-auto text-white"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <img
              className="w-full mb-4 rounded md:h-fit h-full sm:border-b-2 border-slate-800 border-r-2"
              src={image ? image : gitHubImage}
              alt={title}
            />
            <div className="grid place-items-center gap-8">
              <Typography id="modal-modal-title" className="md:text-4xl text-xl">
                {title}
              </Typography>
              <Typography id="modal-modal-description" className="md:text-xl m-2">
                {description}
              </Typography>
              <div className="grid grid-cols-3 gap-4">
                {hostUrl && (
                  <Button
                    href={hostUrl}
                    className="bg-teal-700 rounded-xl text-white hover:bg-teal-950 p-4"
                  >
                    Demo
                  </Button>
                )}
                <Button
                  href={url}
                  className="bg-slate-800 rounded-xl text-white hover:bg-teal-950 p-4"
                >
                  Code
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-red-600 rounded-xl text-white hover:bg-red-800 p-4 text-sm"
                >
                  Exit
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
