
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const gearItems = [
  {
    id: 1,
    name: 'Pro Hiking Boots',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Footwear',
    rating: 4.8,
    reviews: 142,
    features: ['Waterproof', 'Breathable', 'Durable'],
    inStock: true
  },
  {
    id: 2,
    name: 'Adventure Backpack 45L',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Bags',
    rating: 4.6,
    reviews: 89,
    features: ['Lightweight', 'Multiple Compartments', 'Rain Cover'],
    inStock: true
  },
  {
    id: 3,
    name: 'Explorer Sun Hat',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Accessories',
    rating: 4.9,
    reviews: 67,
    features: ['UV Protection', 'Quick Dry', 'Adjustable'],
    inStock: false
  },
  {
    id: 4,
    name: 'Trekking Poles Set',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Equipment',
    rating: 4.7,
    reviews: 134,
    features: ['Lightweight', 'Adjustable', 'Anti-Shock'],
    inStock: true
  },
  {
    id: 5,
    name: 'Insulated Water Bottle',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Hydration',
    rating: 4.5,
    reviews: 98,
    features: ['24hr Cold', '12hr Hot', 'BPA Free'],
    inStock: true
  },
  {
    id: 6,
    name: 'Sleeping Bag Ultra',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Sleep System',
    rating: 4.8,
    reviews: 76,
    features: ['Down Fill', 'Compact', '-10°C Rating'],
    inStock: true
  }
];

const GearEssentials = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const categories = ['All', 'Footwear', 'Bags', 'Accessories', 'Equipment', 'Hydration', 'Sleep System'];

  const filteredItems = selectedCategory === 'All' 
    ? gearItems 
    : gearItems.filter(item => item.category === selectedCategory);

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
    
    const action = favorites.includes(itemId) ? 'removed from' : 'added to';
    toast({
      title: `Item ${action} favorites!`,
      description: "Check your favorites in your profile.",
    });
  };

  const addToCart = (item: any) => {
    if (!item.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently unavailable.",
        variant: "destructive"
      });
      return;
    }

    setCart(prev => [...prev, item.id]);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section id="gear" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adventure Essentials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Gear up with our curated collection of premium outdoor equipment designed for serious adventurers.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "gradient-sunset text-white" 
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover-scale cursor-pointer overflow-hidden bg-gray-900 border-gray-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Discount Badge */}
                {item.originalPrice > item.price && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    -{getDiscountPercentage(item.originalPrice, item.price)}%
                  </Badge>
                )}
                
                {/* Stock Status */}
                {!item.inStock && (
                  <Badge className="absolute top-4 right-4 bg-gray-600 text-white">
                    Out of Stock
                  </Badge>
                )}
                
                {/* Favorite Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                >
                  <Heart 
                    className={`h-4 w-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} 
                  />
                </Button>

                {/* Quick View */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-orange-400 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{item.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400">({item.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">
                      ${item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                    className={item.inStock 
                      ? "gradient-sunset text-white hover:opacity-90 transition-opacity" 
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
            View All Gear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GearEssentials;
