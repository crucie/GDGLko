import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link
import logo from '../assets/gdglko-logo.png';

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row">
      <Typography as={Link} to="/" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography as="a" href="#upcomingevents" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Upcoming Events</ListItem>
      </Typography>
      <Typography as="a" href="#pastevents" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Past Events</ListItem>
      </Typography>
      <Typography as={Link} to="/team" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Team</ListItem>
      </Typography>
      <Typography as={Link} to="/gallery" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Gallery</ListItem>
      </Typography>
    </List>
  );
}

function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="text-black px-4 py-2 shadow-md mt-8">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="GDG Lucknow" className="h-10 w-auto" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="sm" variant="gradient">
            Join Us
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth variant="gradient">
            Join Us
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default SimpleNavbar;
