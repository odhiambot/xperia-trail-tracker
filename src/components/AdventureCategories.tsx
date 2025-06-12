
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain, Compass, TreePine } from 'lucide-react';

const categories = [
  {
    icon: Mountain,
    title: 'Peak Hiking',
    description: 'Conquer majestic summits and experience breathtaking panoramic views from the top of the world.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/adventures'
  },
  {
    icon: Compass,
    title: 'Trail Exploring',
    description: 'Discover hidden paths and secret trails that lead to untouched natural wonders.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/trails'
  },
  {
    icon: TreePine,
    title: 'Forest Trekking',
    description: 'Journey through ancient forests and connect with nature on immersive woodland adventures.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/adventures'
  }
];

const AdventureCategories = () => {
  return (
    <section id="adventures" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adventure Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your hiking style and embark on carefully curated adventures designed for every skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card 
                className="group hover-scale cursor-pointer overflow-hidden bg-gray-700 border-gray-600 animate-fade-in hover:bg-gray-600 transition-colors"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <category.icon className="h-8 w-8 mb-2" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureCategories;
