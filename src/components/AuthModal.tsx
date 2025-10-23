
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {apiService} from '@/integrations/node/apiservice';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

export const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

     try {
      if (mode === 'signup') {
        const data = await apiService.register({ name, email, password, phone });
        toast({
          title: 'Account created!',
          description: `Welcome ${data.user?.name || 'user'}!`,
        });
      } else {
        const data = await apiService.login({ email, password });
        toast({
          title: 'Welcome back!',
          description: `Hello ${data.user?.name || 'user'}!`,
        });
      }

      onClose();
      setEmail('');
      setPassword('');
      setName('');
      setPhoneNumber('');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            
              <div className="space-y-2">
                <Label htmlFor="firstName">Full Name</Label>
                <Input
                  id="firstName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 border-gray-600"
                  required
                />
              </div>
             
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 border-gray-600"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full gradient-sunset text-white hover:opacity-90"
          >
            {loading ? 'Processing...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-400">
          {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
            className="text-orange-400 hover:underline"
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
