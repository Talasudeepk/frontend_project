import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, IndianRupee, Clock, ArrowRight } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  cost: string;
  roi: string;
  timeframe: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Fresh Interior Paint',
    description: 'Transform your home with modern color schemes and quality paint for instant value addition.',
    cost: '₹15,000 - ₹30,000',
    roi: '+15% Value',
    timeframe: '3-5 days',
    category: 'Interior',
    priority: 'high'
  },
  {
    id: '2',
    title: 'LED Lighting Upgrade',
    description: 'Replace old bulbs with energy-efficient LED fixtures to modernize and reduce electricity bills.',
    cost: '₹8,000 - ₹20,000',
    roi: '+10% Value',
    timeframe: '1-2 days',
    category: 'Electrical',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Modular Kitchen',
    description: 'Install a space-efficient modular kitchen with modern storage solutions and appliances.',
    cost: '₹80,000 - ₹2,00,000',
    roi: '+25% Value',
    timeframe: '7-10 days',
    category: 'Kitchen',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Bathroom Renovation',
    description: 'Upgrade with modern fixtures, tiles, and improved ventilation for better functionality.',
    cost: '₹40,000 - ₹1,00,000',
    roi: '+20% Value',
    timeframe: '5-7 days',
    category: 'Bathroom',
    priority: 'medium'
  },
  {
    id: '5',
    title: 'Solar Panel Installation',
    description: 'Install rooftop solar panels for sustainable energy and long-term cost savings.',
    cost: '₹1,00,000 - ₹3,00,000',
    roi: '+30% Value',
    timeframe: '2-3 days',
    category: 'Sustainable',
    priority: 'low'
  },
  {
    id: '6',
    title: 'Balcony Garden Setup',
    description: 'Create a green space with plants, seating, and aesthetic elements for natural beauty.',
    cost: '₹5,000 - ₹15,000',
    roi: '+12% Value',
    timeframe: '1-2 days',
    category: 'Exterior',
    priority: 'high'
  }
];

export const RecommendationsSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Interior', 'Kitchen', 'Bathroom', 'Electrical', 'Sustainable', 'Exterior'];

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(rec => rec.category === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'High Impact';
      case 'medium': return 'Medium Impact';
      case 'low': return 'Long Term';
      default: return 'Standard';
    }
  };

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Popular Home <span className="text-gradient-primary">Value Enhancements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover proven improvement ideas that have helped thousands of Indian homeowners 
            increase their property value with smart, budget-friendly solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "btn-hero" : ""}
            >
              {category === 'all' ? 'All Categories' : category}
            </Button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRecommendations.slice(0, visibleCount).map((rec, index) => (
            <Card 
              key={rec.id} 
              className="group hover-lift border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    className={`${getPriorityColor(rec.priority)} text-white px-3 py-1`}
                  >
                    {getPriorityText(rec.priority)}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {rec.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {rec.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {rec.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Cost</div>
                      <div className="font-medium text-sm">{rec.cost}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                      <div className="font-medium text-sm text-success">{rec.roi}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{rec.timeframe}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group/btn p-0">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredRecommendations.length > visibleCount && (
          <div className="text-center animate-fade-up">
            <Button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="btn-hero px-8"
            >
              View More Recommendations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};