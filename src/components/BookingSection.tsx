
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    adventure: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    console.log('Booking data:', formData);
    // Handle booking logic here
    alert('Booking request submitted! We will contact you soon.');
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-lg animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Book Your Adventure
              </CardTitle>
              <p className="text-muted-foreground">
                Ready to start your hiking journey? Fill out the form below and let's plan your perfect adventure.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5+">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="adventure">Adventure Type</Label>
                <Select onValueChange={(value) => handleInputChange('adventure', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your adventure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunrise-peak">Sunrise Peak Trail</SelectItem>
                    <SelectItem value="mystic-forest">Mystic Forest Loop</SelectItem>
                    <SelectItem value="eagle-ridge">Eagle Ridge Challenge</SelectItem>
                    <SelectItem value="valley-stream">Valley Stream Path</SelectItem>
                    <SelectItem value="custom">Custom Adventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleBooking}
                className="w-full gradient-sunset text-white hover:opacity-90 transition-opacity py-3 text-lg font-semibold"
              >
                Book Adventure Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
