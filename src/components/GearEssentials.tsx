
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const gearItems = [
  {
    name: 'Hiking Boots',
    price: '$159.99',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Footwear'
  },
  {
    name: 'Adventure Backpack',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Bags'
  },
  {
    name: 'Explorer Hat',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Accessories'
  }
];

const GearEssentials = () => {
  return (
    <section id="gear" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Adventure Essentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gear up with our curated collection of premium outdoor equipment designed for serious adventurers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {gearItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover-scale cursor-pointer overflow-hidden bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {item.price}
                  </span>
                  <Button size="sm" className="gradient-sunset text-white hover:opacity-90 transition-opacity">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Gear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GearEssentials;
