
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUp, Circle } from 'lucide-react';

const trails = [
  {
    id: 'sunrise-peak',
    name: 'Sunrise Peak Trail',
    difficulty: 'Moderate',
    duration: '4-6 hours',
    elevation: '1,200m',
    price: 'KES 4000',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience magical sunrise views from this spectacular mountain summit.',
    difficultyColor: 'bg-yellow-500'
  },
  {
    id: 'mystic-forest',
    name: 'Mystic Forest Loop',
    difficulty: 'Easy',
    duration: '2-3 hours',
    elevation: '300m',
    price: 'KES 3000',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Perfect for beginners, this enchanting forest trail offers tranquil beauty.',
    difficultyColor: 'bg-green-500'
  },
  {
    id: 'eagle-ridge',
    name: 'Eagle Ridge Challenge',
    difficulty: 'Hard',
    duration: '8-10 hours',
    elevation: '2,100m',
    price: 'KES 4000',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'An epic adventure for experienced hikers seeking ultimate challenges.',
    difficultyColor: 'bg-red-500'
  },
  {
    id: 'valley-stream',
    name: 'Valley Stream Path',
    difficulty: 'Easy',
    duration: '3-4 hours',
    elevation: '150m',
    price: 'KES 3000',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Follow pristine streams through lush valleys on this gentle trail.',
    difficultyColor: 'bg-green-500'
  }
];

const FeaturedTrails = () => {
  return (
    <section id="trails" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Trails
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most popular hiking trails, each offering unique challenges and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trails.map((trail, index) => (
            <Card 
              key={index} 
              className="group hover-scale cursor-pointer overflow-hidden bg-gray-800 border-gray-700 animate-fade-in hover:bg-gray-750 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/trail/${trail.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={trail.image} 
                    alt={trail.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${trail.difficultyColor} text-white`}>
                      {trail.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-bold text-gray-900">
                    {trail.price}
                  </div>
                </div>
              </Link>
              
              <CardContent className="p-4">
                <Link to={`/trail/${trail.id}`}>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-orange-400 transition-colors">
                    {trail.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {trail.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Circle className="h-3 w-3" />
                    {trail.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-3 w-3" />
                    {trail.elevation}
                  </div>
                </div>

                <Button asChild className="w-full gradient-sunset text-white hover:opacity-90 transition-opacity">
                  <Link to={`/booking?adventure=${trail.id}`}>Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrails;
