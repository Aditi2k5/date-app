'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ProfileData {
  name: string;
  role: string;
  languages: string[];
  experience: string;
  interests: string[];
  github: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    role: '',
    languages: [],
    experience: '',
    interests: [],
    github: ''
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
    
    // Simulate AI suggestions
    if (name === 'languages' && value.length > 2) {
      setSuggestions([
        'Based on your profile, you might also like: TypeScript, Rust, Go',
        'Developers with similar skills often work with: Docker, Kubernetes',
        'Consider exploring: Machine Learning, Cloud Architecture'
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save the profile data to your backend
    // For now, we'll simulate a successful save
    
    // Redirect to dashboard after successful profile creation
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#569cd6] mb-6">
            <span className="text-[#4ec9b0]">interface</span> DeveloperProfile {`{`}
          </h1>

          <form onSubmit={handleSubmit} className="code-block p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[#4ec9b0] mb-2">name: string;</label>
                <input
                  type="text"
                  name="name"
                  className="code-input"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="const name = 'Your Name'"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">role: DeveloperRole;</label>
                <input
                  type="text"
                  name="role"
                  className="code-input"
                  value={profile.role}
                  onChange={handleInputChange}
                  placeholder="'Frontend' | 'Backend' | 'Full Stack'"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">languages: string[];</label>
                <input
                  type="text"
                  name="languages"
                  className="code-input"
                  value={profile.languages}
                  onChange={handleInputChange}
                  placeholder="['JavaScript', 'Python', 'Java']"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">experience: YearsOfExperience;</label>
                <input
                  type="text"
                  name="experience"
                  className="code-input"
                  value={profile.experience}
                  onChange={handleInputChange}
                  placeholder="'0-2' | '3-5' | '5+'"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">github: string;</label>
                <input
                  type="text"
                  name="github"
                  className="code-input"
                  value={profile.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                  required
                />
              </div>

              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6"
                >
                  <h3 className="text-[#569cd6] mb-3">AI Suggestions:</h3>
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-block">
                      <span className="text-[#6a9955]">// </span>
                      {suggestion}
                    </div>
                  ))}
                </motion.div>
              )}

              <button type="submit" className="code-btn w-full mt-6">
                initializeDeveloper();
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="status-bar">
        <div>Ready</div>
        <div>Ln 1, Col 1</div>
        <div>UTF-8</div>
        <div>TypeScript React</div>
      </div>
    </div>
  );
}
