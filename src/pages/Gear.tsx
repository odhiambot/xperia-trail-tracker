
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const gearItems = [
  {
    name: "Mountain Pro Backpack",
    brand: "Alpine Gear",
    price: "$199",
    rating: 4.8,
    category: "Backpacks",
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    name: "Trail Runner Boots",
    brand: "Peak Performance",
    price: "$159",
    rating: 4.6,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true
  },
  {
    name: "Waterproof Jacket",
    brand: "Storm Shield",
    price: "$129",
    rating: 4.7,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521703028087-b2a9c3c0b8db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: false
  }
];

const categories = ["All", "Backpacks", "Footwear", "Clothing", "Navigation", "Safety"];

const Gear = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Gear Essentials</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium hiking gear from trusted brands to keep you safe and comfortable on the trail
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "gradient-sunset text-white" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gearItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-500 text-white">
                    {item.category}
                  </Badge>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.brand}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{item.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-400">{item.price}</span>
                    <Button 
                      size="sm" 
                      className="gradient-sunset text-white hover:opacity-90"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
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

export default Gear;
