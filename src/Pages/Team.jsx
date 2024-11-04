import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

// Reusable ProfileCard Component
function ProfileCard({ imageUrl, name, position }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader floated={false} className="h-60">
        <img src={imageUrl} alt="profile-picture" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-4 pt-2">
        <Tooltip content="Like">
          <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

// Main Team Page Component
function TeamPage() {
  const organizers = [
    { imageUrl: 'https://docs.material-tailwind.com/img/team-1.jpg', name: 'John Doe', position: 'Organizer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-2.jpg', name: 'Jane Smith', position: 'Organizer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-3.jpg', name: 'Alex Johnson', position: 'Organizer' },
  ];

  const volunteers = [
    { imageUrl: 'https://docs.material-tailwind.com/img/team-1.jpg', name: 'Emily Davis', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-2.jpg', name: 'Michael Brown', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-3.jpg', name: 'Sarah Wilson', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-4.jpg', name: 'Chris Evans', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-1.jpg', name: 'Emily Davis', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-2.jpg', name: 'Michael Brown', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-3.jpg', name: 'Sarah Wilson', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-4.jpg', name: 'Chris Evans', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-1.jpg', name: 'Emily Davis', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-2.jpg', name: 'Michael Brown', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-3.jpg', name: 'Sarah Wilson', position: 'Volunteer' },
    { imageUrl: 'https://docs.material-tailwind.com/img/team-4.jpg', name: 'Chris Evans', position: 'Volunteer' },
  ];

  return (
    <div className="p-8 space-y-12">
      {/* Organizers Section */}
      <section>
        <Typography variant="h3" className="text-center mb-6">
          Organizers
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {organizers.map((organizer, index) => (
            <ProfileCard
              key={index}
              imageUrl={organizer.imageUrl}
              name={organizer.name}
              position={organizer.position}
            />
          ))}
        </div>
      </section>

      {/* Volunteers Section */}
      <section>
        <Typography variant="h3" className="text-center mb-6">
          Volunteers
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {volunteers.map((volunteer, index) => (
            <ProfileCard
              key={index}
              imageUrl={volunteer.imageUrl}
              name={volunteer.name}
              position={volunteer.position}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
