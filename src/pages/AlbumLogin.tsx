import React, { useState } from 'react';
import { useAlbumAuth } from '@/contexts/AlbumAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, User, Eye, EyeOff, BookOpen } from 'lucide-react';

const AlbumLogin: React.FC = () => {
  const { login, error } = useAlbumAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Small delay for smooth UX
    await new Promise((resolve) => setTimeout(resolve, 400));

    login(username, password);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center px-4" style={{ paddingTop: '5rem' }}>
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">Album Access</h1>
        <p className="text-gray-400 text-center mb-8">Enter your credentials to view the album</p>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="pl-11 pr-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading || !username || !password}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-base"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                'View Album'
              )}
            </Button>
          </form>
        </div>

        <p className="text-gray-500 text-xs text-center mt-6">
          This album is password-protected for privacy
        </p>
      </div>
    </div>
  );
};

export default AlbumLogin;
