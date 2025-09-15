import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Clock, Star, Phone, Mail } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AuthModal } from './AuthModal';
// import { supabase } from '@/integrations/supabase/client';

const adventures = [
  {
    id: 'sunrise-peak',
    name: 'Sunrise Peak Trail',
    duration: '1 day',
    difficulty: 'Easy',
    price: 99,
    maxGuests: 15,
    rating: 4.9,
    location: 'Sierra Nevada',
    description: 'Experience breathtaking sunrise views from the peak'
  },
  {
    id: 'mystic-forest',
    name: 'Mystic Forest Loop',
    duration: '2 days',
    difficulty: 'Medium',
    price: 189,
    maxGuests: 12,
    rating: 4.6,
    location: 'Pacific Northwest',
    description: 'Explore ancient forests and hidden waterfalls'
  },
  {
    id: 'eagle-ridge',
    name: 'Eagle Ridge Challenge',
    duration: '3 days',
    difficulty: 'Hard',
    price: 299,
    maxGuests: 8,
    rating: 4.8,
    location: 'Rocky Mountains',
    description: 'Push your limits on this challenging mountain expedition'
  },
  {
    id: 'valley-stream',
    name: 'Valley Stream Path',
    duration: '1 day',
    difficulty: 'Easy',
    price: 79,
    maxGuests: 20,
    rating: 4.7,
    location: 'Green Valley',
    description: 'Peaceful hike along crystal clear mountain streams'
  }
];

interface BookingSectionProps {
  preselectedAdventure?: string | null;
}

const BookingSection = ({ preselectedAdventure }: BookingSectionProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    adventure: '',
    specialRequests: '',
    emergencyContact: '',
    experience: ''
  });
  const [selectedAdventure, setSelectedAdventure] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (preselectedAdventure) {
      const adventure = adventures.find(a => a.id === preselectedAdventure);
      if (adventure) {
        setFormData(prev => ({ ...prev, adventure: adventure.id }));
        setSelectedAdventure(adventure);
      }
    }
  }, [preselectedAdventure]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'adventure') {
      const adventure = adventures.find(a => a.id === value);
      setSelectedAdventure(adventure);
    }
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.adventure && formData.date && formData.guests;
      case 3:
        return true; // Optional step
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (!user) {
      setAuthMode('signin');
      setAuthModalOpen(true);
      return;
    }

    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast({
        title: "Please fill in all required fields",
        description: "Complete the current step before proceeding.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const calculateTotal = () => {
    if (!selectedAdventure || !formData.guests) return 0;
    const guestCount = parseInt(formData.guests) || 1;
    const basePrice = selectedAdventure.price * guestCount;
    const tax = basePrice * 0.1; // 10% tax
    return basePrice + tax;
  };

  const handleBooking = async () => {
    if (!user) {
      setAuthMode('signin');
      setAuthModalOpen(true);
      return;
    }

    if (!validateStep(2)) {
      toast({
        title: "Please complete all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // const { error } = await supabase
      //   .from('bookings')
      //   .insert({
      //     user_id: user.id,
      //     adventure_name: selectedAdventure.name,
      //     adventure_type: formData.adventure,
      //     participants: parseInt(formData.guests),
      //     booking_date: formData.date,
      //     total_amount: calculateTotal()
      //   });

      // if (error) throw error;

      toast({
        title: "Booking request submitted successfully! 🎉",
        description: "We'll contact you within 24 hours to confirm your adventure.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        adventure: '',
        specialRequests: '',
        emergencyContact: '',
        experience: ''
      });
      setCurrentStep(1);
      setSelectedAdventure(null);
    } catch (error: any) {
      toast({
        title: "Error submitting booking",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Book Your Adventure
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to start your hiking journey? Let's plan your perfect adventure together.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep >= step 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-12 h-1 mx-2 ${
                        currentStep > step ? 'bg-orange-500' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800 border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {currentStep === 1 && <><Users className="h-6 w-6" /> Personal Information</>}
                      {currentStep === 2 && <><Calendar className="h-6 w-6" /> Adventure Details</>}
                      {currentStep === 3 && <><MapPin className="h-6 w-6" /> Additional Information</>}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience" className="text-white">Hiking Experience</Label>
                          <Select onValueChange={(value) => handleInputChange('experience', value)}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner (0-5 hikes)</SelectItem>
                              <SelectItem value="intermediate">Intermediate (5-20 hikes)</SelectItem>
                              <SelectItem value="advanced">Advanced (20+ hikes)</SelectItem>
                              <SelectItem value="expert">Expert (50+ hikes)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Adventure Details */}
                    {currentStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="adventure" className="text-white">Adventure Type *</Label>
                          <Select 
                            value={formData.adventure}
                            onValueChange={(value) => handleInputChange('adventure', value)}
                          >
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Choose your adventure" />
                            </SelectTrigger>
                            <SelectContent>
                              {adventures.map((adventure) => (
                                <SelectItem key={adventure.id} value={adventure.id}>
                                  {adventure.name} - ${adventure.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date" className="text-white">Preferred Date *</Label>
                            <Input
                              id="date"
                              type="date"
                              value={formData.date}
                              onChange={(e) => handleInputChange('date', e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="guests" className="text-white">Number of Guests *</Label>
                            <Select onValueChange={(value) => handleInputChange('guests', value)}>
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                <SelectValue placeholder="Select guests" />
                              </SelectTrigger>
                              <SelectContent>
                                {[...Array(selectedAdventure?.maxGuests || 10)].map((_, i) => (
                                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                                    {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Additional Information */}
                    {currentStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact" className="text-white">Emergency Contact</Label>
                          <Input
                            id="emergencyContact"
                            placeholder="Name and phone number"
                            value={formData.emergencyContact}
                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialRequests" className="text-white">Special Requests or Dietary Requirements</Label>
                          <textarea
                            id="specialRequests"
                            placeholder="Let us know about any special requirements..."
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                            className="w-full h-24 p-3 rounded-md bg-gray-700 border-gray-600 text-white resize-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <Button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Previous
                      </Button>
                      
                      {currentStep < 3 ? (
                        <Button
                          onClick={nextStep}
                          className="gradient-sunset text-white hover:opacity-90"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          onClick={handleBooking}
                          disabled={isSubmitting}
                          className="gradient-sunset text-white hover:opacity-90"
                        >
                          {isSubmitting ? 'Processing...' : 'Book Adventure'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Summary */}
              <div className="space-y-6">
                {/* Adventure Details Card */}
                {selectedAdventure && (
                  <Card className="bg-gray-800 border-gray-700 animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-white">Adventure Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-400">{selectedAdventure.name}</h3>
                      
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {selectedAdventure.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {selectedAdventure.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Max {selectedAdventure.maxGuests} guests
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          {selectedAdventure.rating} rating
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge className={getDifficultyColor(selectedAdventure.difficulty)}>
                          {selectedAdventure.difficulty}
                        </Badge>
                      </div>

                      <p className="text-sm text-gray-400">{selectedAdventure.description}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Price Summary */}
                {selectedAdventure && formData.guests && (
                  <Card className="bg-gray-800 border-gray-700 animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-white">Price Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-gray-300">
                        <span>${selectedAdventure.price} × {formData.guests} guest{parseInt(formData.guests) > 1 ? 's' : ''}</span>
                        <span>${selectedAdventure.price * parseInt(formData.guests)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Taxes & Fees</span>
                        <span>${(selectedAdventure.price * parseInt(formData.guests) * 0.1).toFixed(2)}</span>
                      </div>
                      <hr className="border-gray-600" />
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Contact Info */}
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-white">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="h-4 w-4" />
                      <span>info@xperia-adventure.com</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Our team is available 24/7 to help with your booking.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      /> */}
    </>
  );
};

export default BookingSection;
