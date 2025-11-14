import { Card, CardContent } from '@/components/ui/card';
import { 
  ChefHat, 
  Bath, 
  Paintbrush, 
  Leaf, 
  Smartphone, 
  Dumbbell,
  Lightbulb,
  Droplets,
  Shield,
  Zap
} from 'lucide-react';

const enhancements = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'LED lights, smart switches, and automated lighting systems for energy efficiency.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Droplets,
    title: 'Water Systems',
    description: 'Rainwater harvesting, water purification, and efficient plumbing upgrades.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Paintbrush,
    title: 'Exterior Refresh',
    description: 'Fresh paint, waterproofing, balcony improvements, and compound wall upgrades.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Smartphone,
    title: 'Smart Home Tech',
    description: 'IoT devices, smart locks, CCTV systems, and home automation solutions.',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Dumbbell,
    title: 'Wellness Spaces',
    description: 'Home gym setup, yoga corner, or meditation space for healthy living.',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Advanced security cameras, smart doorbells, and access control systems.',
    color: 'from-red-500 to-orange-600'
  }
];

const categories = [
  {
    icon: ChefHat,
    title: 'Kitchen',
    description: 'Modular designs, better storage, chimney & energy-saving appliances.',
    improvements: ['Modular Kitchen', 'Smart Appliances', 'Better Ventilation', 'Storage Solutions'],
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Bath,
    title: 'Bathroom',
    description: 'Anti-slip tiles, geysers, modern fittings, waterproofing for durability.',
    improvements: ['Modern Fixtures', 'Better Lighting', 'Ventilation', 'Waterproofing'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Paintbrush,
    title: 'Exterior',
    description: 'Painting, waterproofing, balcony garden, compound wall improvement.',
    improvements: ['Fresh Paint', 'Landscaping', 'Balcony Garden', 'Gate Upgrade'],
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Leaf,
    title: 'Green Upgrades',
    description: 'Solar panels, rainwater harvesting, LED lighting, natural ventilation.',
    improvements: ['Solar Panels', 'Rainwater Harvesting', 'LED Conversion', 'Plant Systems'],
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Smart Homes',
    description: 'Wi-Fi switches, smart locks, CCTV cameras, IoT-enabled lighting.',
    improvements: ['Smart Switches', 'Automated Lights', 'Security Systems', 'Voice Control'],
    color: 'from-purple-500 to-indigo-600'
  }
];

export const EnhancementCategories = () => {
  return (
    <>
      {/* Smart Enhancement Ideas */}
      <section id="enhancements" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Smart Ways to <span className="text-gradient-primary">Enhance</span> Your Home
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern enhancement solutions that combine functionality with aesthetics 
              to create value and improve your quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancements.map((enhancement, index) => {
              const Icon = enhancement.icon;
              return (
                <Card 
                  key={index}
                  className="group hover-lift border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${enhancement.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {enhancement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {enhancement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upgrade Categories */}
      <section id="categories" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Explore Upgrade <span className="text-gradient-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive improvement solutions organized by area to help you 
              prioritize and plan your home enhancement journey effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="group hover-lift border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Improvement List */}
                    <div className="space-y-1">
                      {category.improvements.map((improvement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60" />
                          {improvement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};