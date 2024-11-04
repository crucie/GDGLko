import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUsers, faChalkboardTeacher, faChartLine } from "@fortawesome/free-solid-svg-icons";

function USPCard({ title, description, Icon, colorClass }) {
  return (
    <Card className="flex flex-row items-center py-2 px-5 w-full shadow-none bg-transparent">
      <div className="flex-shrink-0 ">
        <Icon className={`h-16 w-16 ${colorClass}`} />
      </div>
      <CardBody className="p-5 h-32 flex flex-col ">
        <Typography variant="h6" color="gray" className="mb-1 text-black">
          {title}
        </Typography>
        <Typography className="text-xs">{description}</Typography>
      </CardBody>
    </Card>
  );
}

export default function USPSection() {
  const uspCards = [
    {
      title: "Innovation",
      description: "Stay at the forefront of technology with groundbreaking solutions and ideas.",
      Icon: (props) => <FontAwesomeIcon icon={faLightbulb} {...props} />,
      colorClass: "text-red-500",  // Red color
    },
    {
      title: "Collaboration",
      description: "Work with peers and experts to achieve greater results.",
      Icon: (props) => <FontAwesomeIcon icon={faUsers} {...props} />,
      colorClass: "text-yellow-500",  // Yellow color
    },
    {
      title: "Learning",
      description: "Expand your knowledge and skills through workshops and sessions.",
      Icon: (props) => <FontAwesomeIcon icon={faChalkboardTeacher} {...props} />,
      colorClass: "text-blue-500",  // Blue color
    },
    {
      title: "Growth",
      description: "Foster both personal and professional development.",
      Icon: (props) => <FontAwesomeIcon icon={faChartLine} {...props} />,
      colorClass: "text-green-500",  // Green color
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2">
      {uspCards.map((card, index) => (
        <USPCard 
          key={index} 
          title={card.title} 
          description={card.description} 
          Icon={card.Icon} 
          colorClass={card.colorClass}
        />
      ))}
    </div>
  );
}
