import React from 'react';
import { CarouselCustomNavigation } from '../Components/HeroCrousel';
import { HeroSection } from '../Components/HeroSection';
import USPSection from '../Components/UspSection';
import AboutGdg from '../Components/AboutGdg';
import UpcomingEvents from '../Components/UpcomingEvents';
import PastEvents from '../Components/PastEvents';
import Organizers from '../Components/Organizers';
import CommunityPartners from '../Components/CommunityPartners';
import { ImageGallery } from '../Components/ImageGallery';

function HomePage() {
  return (
    <div>
      <CarouselCustomNavigation />
      <HeroSection />
      <USPSection />
      <AboutGdg />
      <UpcomingEvents />
      <PastEvents />
      <Organizers />
      <CommunityPartners />
      <ImageGallery />
    </div>
  );
}

export default HomePage;
