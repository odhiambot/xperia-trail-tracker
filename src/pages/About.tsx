
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Users, Award, Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">About Xperia Adventure</h1>
            <p className="text-xl text-justify text-gray-300 max-w-3xl mx-auto">
            "Our hiking adventure app is designed for explorers who crave the thrill of the outdoors. Whether you’re a beginner looking for safe, scenic trails or an experienced hiker chasing new peaks, we’ve got you covered. Discover hidden gems, track your progress, connect with fellow adventurers, and turn every hike into an unforgettable story. Adventure starts here — one trail at a time.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img 
                src="public/images/mountainsunrise.jpeg" 
                alt="Mountain sunrise hike"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-orange-500 text-white">
                Sunrise Adventures
              </Badge>
            </div>
            
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img 
                src="public\images\teambuilding.jpeg" 
                alt="Group of hikers"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-green-500 text-white">
                Team Building
              </Badge>
            </div>
            
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img 
                src="public\images\waterfall.jpeg" 
                alt="Adventure equipment"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-blue-500 text-white">
                WaterFall Trails
              </Badge>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <Mountain className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                <p className="text-gray-300">Adventures Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
                <p className="text-gray-300">Happy Adventurers</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">++++</h3>
                <p className="text-gray-300">remaining Adventures</p>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Xperia Adventure was born from a simple belief: that everyone should have the opportunity 
                to experience the transformative power of nature. Founded by a group of experienced mountaineers 
                and outdoor enthusiasts, we started with just a handful of local hiking tours.
              </p>
              <p className="text-gray-300 mb-4">
                Today, we offer comprehensive adventure packages that cater to all skill levels, from beginner-friendly 
                nature walks to challenging multi-day expeditions. Our certified guides are not just experts in 
                outdoor safety and navigation—they're passionate storytellers who bring each landscape to life.
              </p>
              <p className="text-gray-300">
                We believe that adventure should be accessible, safe, and environmentally responsible. 
                That's why we partner with local communities, support conservation efforts, and maintain 
                the highest safety standards in everything we do.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Adventure team planning"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative h-48  rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hikers on mountain trail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Mountain className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
                  <p className="text-gray-300 text-sm">
                    Your safety is our top priority. All our guides are certified and experienced.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                  <p className="text-gray-300 text-sm">
                    We support local communities and create lasting connections.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Camera className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Conservation</h3>
                  <p className="text-gray-300 text-sm">
                    We're committed to preserving the natural beauty we explore.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    We strive for excellence in every adventure we create.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Adventure Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-40 overflow-hidden rounded-lg">
                <img 
                  src="public\images\photo1.jpg" 
                  alt="Mountain peak view"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Forest trail"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Rock climbing"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Group celebration"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
