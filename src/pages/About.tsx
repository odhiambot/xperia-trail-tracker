
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain, Users, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Mountain, label: "Trails Mapped", value: "500+" },
  { icon: Users, label: "Happy Hikers", value: "10K+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Globe, label: "Countries", value: "25+" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">About Xperia Adventure</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're passionate about connecting people with nature through unforgettable hiking experiences. 
              Our mission is to make the great outdoors accessible to everyone, regardless of skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2009 by a group of passionate hikers, Xperia Adventure began as a small 
                local guiding service. Our founders believed that everyone should have the opportunity 
                to experience the transformative power of nature.
              </p>
              <p className="text-gray-300 mb-4">
                Over the years, we've grown from organizing weekend trips for friends to becoming 
                a trusted adventure company serving thousands of outdoor enthusiasts worldwide.
              </p>
              <p className="text-gray-300">
                Today, we continue to uphold our founding principles: safety first, respect for 
                nature, and creating memories that last a lifetime.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
                  <p className="text-gray-300">
                    Every adventure is planned with safety as our top priority. Our certified guides 
                    ensure you have a secure and enjoyable experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Respect Nature</h3>
                  <p className="text-gray-300">
                    We follow Leave No Trace principles and educate our participants about 
                    environmental conservation and sustainable hiking practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Inclusive Adventure</h3>
                  <p className="text-gray-300">
                    We believe adventure is for everyone. Our trips cater to all skill levels 
                    and we work to make hiking accessible to diverse communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
