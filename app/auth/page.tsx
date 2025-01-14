'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();

  const handleGithubLogin = () => {
    // TODO: Implement actual GitHub OAuth
    // For now, we'll just redirect to profile
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#161b22] p-8 rounded-lg border border-[#30363d] max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Initialize Authentication
        </h2>
        
        <p className="text-[#8b949e] mb-8 text-center">
          Connect your GitHub account to find developers who share your coding style.
        </p>

        <button
          onClick={handleGithubLogin}
          className="w-full bg-[#0969da] text-white rounded-md py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#1f7cf2] transition-colors"
        >
          <Github className="w-5 h-5" />
          Login with GitHub
        </button>

        <p className="text-[#8b949e] mt-4 text-sm text-center">
          We promise not to push directly to master of your heart
        </p>
      </motion.div>
    </div>
  );
}
