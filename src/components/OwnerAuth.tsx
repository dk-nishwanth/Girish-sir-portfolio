import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, Shield, CheckCircle, X } from 'lucide-react';
import { OWNER_CONFIG } from '../config/owner';

interface OwnerAuthProps {
  isAuthenticated: boolean;
  onAuthenticate: (status: boolean) => void;
}

export const OwnerAuth = ({ isAuthenticated, onAuthenticate }: OwnerAuthProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay for security
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === OWNER_CONFIG.PASSWORD) {
      setSuccess(true);
      setTimeout(() => {
        onAuthenticate(true);
        setShowLogin(false);
        setPassword('');
        setSuccess(false);
        setError('');
        
        // Set session expiry
        const expiryTime = Date.now() + OWNER_CONFIG.SESSION_DURATION;
        sessionStorage.setItem('ownerExpiry', expiryTime.toString());
      }, 1500);
    } else {
      setError('Invalid password. Access denied.');
      // Clear password field for security
      setPassword('');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    onAuthenticate(false);
    setPassword('');
    setError('');
    setSuccess(false);
    // Clear session data
    sessionStorage.removeItem(OWNER_CONFIG.SESSION_KEY);
    sessionStorage.removeItem('ownerExpiry');
  };

  if (isAuthenticated) {
    return (
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-green-600/20 border border-green-500/30 rounded-lg">
          <Shield className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Owner Mode</span>
        </div>
        <motion.button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 text-sm font-medium rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </motion.div>
    );
  }

  return (
    <>
      <motion.button
        onClick={() => setShowLogin(true)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-600/20 hover:bg-slate-600/30 border border-slate-500/30 text-slate-300 text-sm font-medium rounded-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Lock className="w-4 h-4" />
        Owner Access
      </motion.button>

      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-slate-800 rounded-3xl p-8 max-w-md w-full border border-slate-700/50"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-white">Owner Authentication</h3>
                    <p className="text-slate-400 text-sm">Secure access required</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLogin(false)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {success ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-poppins font-bold text-white mb-2">Access Granted!</h4>
                  <p className="text-slate-400">Welcome back, Owner.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-white font-inter mb-2">Owner Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors pr-12"
                        placeholder="Enter owner password"
                        required
                        autoFocus
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-600 rounded transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-slate-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white font-inter font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                    >
                      {isLoading ? 'Authenticating...' : 'Login'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowLogin(false)}
                      className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-inter font-semibold rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-6 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium mb-1">Security Notice</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      This access is restricted to the website owner only. 
                      Unauthorized access attempts will be logged.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
