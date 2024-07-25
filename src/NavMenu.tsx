import { Avatar } from '@mui/material';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
type link = {
  to: string;
  label: string;
};

const links: link[] = [
  {
    to: '#about',
    label: 'About',
  },
  {
    to: '#skills',
    label: 'Skills',
  },
  {
    to: '#projects',
    label: 'Projects',
  },
  {
    to: '#Blog',
    label: 'Blog',
  },
  {
    to: '#contact',
    label: 'Contact',
  },
];
const drawerWidth = 240;

export const NavMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="bg-slate-700 grid grid-col-2 gap-3 min-h-full">
      <Avatar className="bg-teal-600 w-20 h-20 m-auto">BM</Avatar>

      <List className="mb-40">
        {links.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              className="hover:bg-teal-600 transition duration-500 text-white"
              href={link.to}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className="p-10  mx-auto">
      <AppBar component={'nav'} className="bg-slate-700  rounded-xl w-auto relative">
        <Toolbar className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-2">
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="md:hidden mr-auto"
          >
            <MenuIcon />
          </IconButton>
          <Avatar className="bg-teal-600 w-14 h-14 sm:hidden hidden md:flex">BM</Avatar>
          <div className="grid sm:grid-cols-4 gap-4 m-auto grid-cols-4 ">
            <a href="" className="no-underline">
              <FontAwesomeIcon icon={faTwitter} className="text-white h-6 hover:text-teal-400" />
            </a>
            <a href="" className="no-underline">
              <FontAwesomeIcon icon={faFacebook} className="text-white h-6 hover:text-teal-400" />
            </a>
            <a href="" className="no-underline">
              <FontAwesomeIcon icon={faGithub} className="text-white h-6 hover:text-teal-400" />
            </a>
            <a href="" className="no-underline">
              <FontAwesomeIcon icon={faInstagram} className="text-white h-6 hover:text-teal-400" />
            </a>
          </div>
          <div className="hidden sm:hidden md:block ml-auto">
            <List className={`grid grid-cols-5`}>
              {links.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    sx={{ textAlign: 'center' }}
                    className="hover:bg-teal-600 transition duration-500 text-white rounded-lg w-auto"
                    href={link.to}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};
/*export const NavMenu = () => {
  return (
    <nav className="bg-slate-900 text-light p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Avatar className="bg-teal-600" sx={{ width: 56, height: 56 }}>
          BM
        </Avatar>
        <div>
          {links.map((link) => (
            <NavItem to={link.to} label={link.label} />
          ))}
        </div>
      </div>
    </nav>
  );
};*/
