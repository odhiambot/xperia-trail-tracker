
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Circle, MapPin, Clock, Users, Star } from 'lucide-react';

const trailsData = [
  {
    id: 'sunrise-peak',
    name: 'Sunrise Peak Trail',
    difficulty: 'Moderate',
    duration: '4-6 hours',
    elevation: '1,200m',
    price: 89,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience magical sunrise views from this spectacular mountain summit.',
    difficultyColor: 'bg-yellow-500',
    detailedDescription: 'The Sunrise Peak Trail offers one of the most rewarding hiking experiences in the region. Starting before dawn, hikers will traverse through diverse terrain including dense forests, rocky outcrops, and alpine meadows. The trail is well-marked and maintained, making it suitable for intermediate hikers with a reasonable fitness level.',
    highlights: ['Spectacular sunrise views', 'Alpine wildlife viewing', 'Photography opportunities', 'Well-maintained trail'],
    location: 'Sierra Nevada',
    rating: 4.9,
    maxParticipants: 15
  },
  {
    id: 'mystic-forest',
    name: 'Mystic Forest Loop',
    difficulty: 'Easy',
    duration: '2-3 hours',
    elevation: '300m',
    price: 49,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Perfect for beginners, this enchanting forest trail offers tranquil beauty.',
    difficultyColor: 'bg-green-500',
    detailedDescription: 'A peaceful journey through ancient redwood forests, this trail is perfect for families and beginners. The loop trail features gentle inclines, wooden bridges over babbling creeks, and interpretive signs about local flora and fauna.',
    highlights: ['Ancient redwood trees', 'Creek crossings', 'Family-friendly', 'Educational trail markers'],
    location: 'Pacific Northwest',
    rating: 4.6,
    maxParticipants: 20
  },
  {
    id: 'eagle-ridge',
    name: 'Eagle Ridge Challenge',
    difficulty: 'Hard',
    duration: '8-10 hours',
    elevation: '2,100m',
    price: 149,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'An epic adventure for experienced hikers seeking ultimate challenges.',
    difficultyColor: 'bg-red-500',
    detailedDescription: 'This challenging trail pushes even experienced hikers to their limits. Featuring steep ascents, exposed ridges, and technical sections requiring basic scrambling skills. The reward is unparalleled panoramic views of the entire mountain range.',
    highlights: ['Challenging terrain', '360-degree summit views', 'Technical scrambling', 'Wildlife encounters'],
    location: 'Rocky Mountains',
    rating: 4.8,
    maxParticipants: 8
  },
  {
    id: 'valley-stream',
    name: 'Valley Stream Path',
    difficulty: 'Easy',
    duration: '3-4 hours',
    elevation: '150m',
    price: 39,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Follow pristine streams through lush valleys on this gentle trail.',
    difficultyColor: 'bg-green-500',
    detailedDescription: 'A gentle walk alongside crystal-clear mountain streams through lush valleys. This trail offers multiple rest stops with scenic picnic areas and opportunities for wildlife photography.',
    highlights: ['Stream-side walking', 'Picnic areas', 'Bird watching', 'Photography spots'],
    location: 'Green Valley',
    rating: 4.7,
    maxParticipants: 25
  }
];

const TrailDetails = () => {
  const { id } = useParams();
  const trail = trailsData.find(t => t.id === id);

  if (!trail) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trail Not Found</h1>
          <Link to="/trails">
            <Button className="gradient-sunset text-white">Back to Trails</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img 
                src={trail.image} 
                alt={trail.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${trail.difficultyColor} text-white`}>
                {trail.difficulty}
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{trail.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300">{trail.location}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {trail.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4" />
                    {trail.elevation}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Max {trail.maxParticipants}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {trail.rating}
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{trail.detailedDescription}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Trail Highlights</h3>
                  <ul className="space-y-2">
                    {trail.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <Circle className="h-2 w-2 text-orange-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-orange-400">${trail.price}</span>
                  <Button asChild className="gradient-sunset text-white hover:opacity-90 text-lg px-8 py-3">
                    <Link to={`/booking?adventure=${trail.id}`}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrailDetails;
