import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Shield, User, Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminLoginModalProps {
  onClose: () => void;
}

export const AdminLoginModal = ({ onClose }: AdminLoginModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate admin login
    setTimeout(() => {
      if (formData.email === 'admin@homevalueplus.com' && formData.password === 'admin123') {
        toast({
          title: "Login Successful!",
          description: "Welcome to the Admin Dashboard.",
        });
        onClose();
        // In a real app, you would redirect to the admin dashboard
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-up">
      <Card className="w-full max-w-md shadow-brand-xl">
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
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <CardDescription className="text-white/80">
                Secure login to platform management
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Demo Credentials Info */}
          <div className="mb-6 p-4 bg-accent-light rounded-lg border border-accent/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <h4 className="font-medium text-accent mb-1">Demo Credentials</h4>
                <p className="text-sm text-accent/80">
                  Email: admin@homevalueplus.com<br />
                  Password: admin123
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminEmail" className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="adminEmail"
                type="email"
                placeholder="admin@homevalueplus.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminPassword" className="text-sm font-medium flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </Label>
              <Input
                id="adminPassword"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                required
                className="focus:ring-primary focus:border-primary"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-hero mt-6"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Logging in...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Access Admin Panel
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact{' '}
              <a href="mailto:support@homevalueplus.com" className="text-primary hover:underline">
                support@homevalueplus.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};