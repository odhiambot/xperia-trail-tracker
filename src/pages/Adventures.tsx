
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mountain, Clock, Users, Star } from 'lucide-react';

const adventures = [
  {
    title: "Mountain Peak Challenge",
    location: "Rocky Mountains",
    duration: "3 days",
    difficulty: "Hard",
    rating: 4.8,
    price: "$299",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    participants: "Max 8 people"
  },
  {
    title: "Forest Trail Discovery",
    location: "Pacific Northwest",
    duration: "2 days",
    difficulty: "Medium",
    rating: 4.6,
    price: "$189",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    participants: "Max 12 people"
  },
  {
    title: "Sunrise Valley Trek",
    location: "Sierra Nevada",
    duration: "1 day",
    difficulty: "Easy",
    rating: 4.9,
    price: "$99",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    participants: "Max 15 people"
  }
];

const Adventures = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Adventure Packages</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully curated hiking adventures designed for all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={adventure.image} 
                    alt={adventure.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    adventure.difficulty === 'Hard' ? 'bg-red-500' :
                    adventure.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                  } text-white`}>
                    {adventure.difficulty}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{adventure.title}</h3>
                  <p className="text-gray-400 mb-4">{adventure.location}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {adventure.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {adventure.participants}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      {adventure.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">{adventure.price}</span>
                    <Button className="gradient-sunset text-white hover:opacity-90">
                      Book Now
                    </Button>
                  </div>
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

export default Adventures;
