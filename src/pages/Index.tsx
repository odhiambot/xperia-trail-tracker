
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdventureCategories from '@/components/AdventureCategories';
import FeaturedTrails from '@/components/FeaturedTrails';
import GearEssentials from '@/components/GearEssentials';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      {/* <AdventureCategories /> */}
      <FeaturedTrails />
      <GearEssentials />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
