
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import BookingSection from '@/components/BookingSection';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedAdventure = searchParams.get('adventure');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        {/* <BookingSection preselectedAdventure={preselectedAdventure} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
