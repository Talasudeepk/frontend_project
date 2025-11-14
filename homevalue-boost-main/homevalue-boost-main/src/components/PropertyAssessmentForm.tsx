import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Home, MapPin, Calculator, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PropertyFormData {
  propertyType: string;
  city: string;
  locality: string;
  propertyAge: number;
  area: number;
  budget: string;
  currentCondition: string;
}

interface PropertyAssessmentFormProps {
  onClose: () => void;
  onSubmit: (data: PropertyFormData) => void;
}

export const PropertyAssessmentForm = ({ onClose, onSubmit }: PropertyAssessmentFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PropertyFormData>({
    propertyType: '',
    city: '',
    locality: '',
    propertyAge: 0,
    area: 0,
    budget: '',
    currentCondition: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.propertyType || !formData.city || !formData.locality || 
        !formData.propertyAge || !formData.area || !formData.budget || !formData.currentCondition) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields to get personalized recommendations.",
        variant: "destructive"
      });
      return;
    }

    onSubmit(formData);
    toast({
      title: "Assessment Submitted!",
      description: "Generating your personalized recommendations...",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-up">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto shadow-brand-xl">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">Property Assessment</CardTitle>
              <CardDescription className="text-white/80">
                Get personalized recommendations to increase your property value
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="text-sm font-medium flex items-center gap-2">
                <Home className="w-4 h-4" />
                Property Type
              </Label>
              <Select value={formData.propertyType} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, propertyType: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select your property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="independent-house">Independent House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="studio">Studio Apartment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  City
                </Label>
                <Input
                  id="city"
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="locality">Locality</Label>
                <Input
                  id="locality"
                  placeholder="e.g., Koramangala, Powai"
                  value={formData.locality}
                  onChange={(e) => setFormData(prev => ({ ...prev, locality: e.target.value }))}
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyAge">Property Age (years)</Label>
                <Input
                  id="propertyAge"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g., 15"
                  value={formData.propertyAge || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, propertyAge: parseInt(e.target.value) || 0 }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area" className="flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Carpet Area (sq ft)
                </Label>
                <Input
                  id="area"
                  type="number"
                  min="200"
                  max="10000"
                  placeholder="e.g., 1200"
                  value={formData.area || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, area: parseInt(e.target.value) || 0 }))}
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Budget for Improvements
              </Label>
              <Select value={formData.budget} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, budget: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50000">Under ₹50,000</SelectItem>
                  <SelectItem value="100000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="200000">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="500000">₹2,00,000 - ₹5,00,000</SelectItem>
                  <SelectItem value="1000000">₹5,00,000 - ₹10,00,000</SelectItem>
                  <SelectItem value="1000001">Above ₹10,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Current Condition */}
            <div className="space-y-2">
              <Label htmlFor="currentCondition">Current Property Condition</Label>
              <Select value={formData.currentCondition} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, currentCondition: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Assess your property's current condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent - Recently renovated</SelectItem>
                  <SelectItem value="good">Good - Well maintained</SelectItem>
                  <SelectItem value="average">Average - Some wear and tear</SelectItem>
                  <SelectItem value="needs-renovation">Needs Renovation - Major updates required</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full btn-hero py-3 text-lg"
            >
              Get Personalized Recommendations
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};