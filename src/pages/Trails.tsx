
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Filter } from 'lucide-react';

const trails = [
  {
    name: "Eagle Point Trail",
    location: "Yosemite National Park",
    distance: "5.2 miles",
    elevation: "1,200 ft",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Redwood Loop",
    location: "Sequoia National Forest",
    distance: "3.8 miles",
    elevation: "800 ft",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Summit Challenge",
    location: "Mount Whitney",
    distance: "14.5 miles",
    elevation: "6,100 ft",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const Trails = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Trail Explorer</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover amazing hiking trails near you with detailed maps and difficulty ratings
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search trails by name or location..." 
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trails.map((trail, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={trail.image} 
                    alt={trail.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    trail.difficulty === 'Hard' ? 'bg-red-500' :
                    trail.difficulty === 'Moderate' ? 'bg-yellow-500' : 'bg-green-500'
                  } text-white`}>
                    {trail.difficulty}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{trail.name}</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {trail.location}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
                    <div>Distance: {trail.distance}</div>
                    <div>Elevation: {trail.elevation}</div>
                  </div>

                  <Button className="w-full gradient-sunset text-white hover:opacity-90">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trails;
