import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   

export function ProfileCard({ name, role, image }) {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={image} alt={`${name}'s profile`} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {role}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          {/* Social icons as needed */}
        </CardFooter>
      </Card>
    );
  }
  