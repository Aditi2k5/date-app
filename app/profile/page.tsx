'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ProfileData {
  name: string;
  email: string;
  profile: {
    favLanguage: string;
    hatedLanguage: string;
    favAlgorithm: string;
    idealDate: string;
  };
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    email: '',
    profile: {
      favLanguage: '',
      hatedLanguage: '',
      favAlgorithm: '',
      idealDate: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    setProfile((prev) => {
      // Check if the input belongs to the nested `profile` object
      if (name.startsWith('profile.')) {
        const profileKey = name.split('.')[1]; // Extract the nested key (e.g., "favLanguage")
        return {
          ...prev,
          profile: {
            ...prev.profile,
            [profileKey]: value, // Update the nested key
          },
        };
      }
  
      // Otherwise, update the root-level key
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Format the data to match your MongoDB schema
      const userData = {
        name: profile.name,
        email: `${profile.name.toLowerCase().replace(/\s+/g, '')}@dev.com`, // Generate an email
        profile: {
          favLanguage: profile.profile.favLanguage,
          hatedLanguage: profile.profile.hatedLanguage,
          favAlgorithm: profile.profile.favAlgorithm,
          idealDate: profile.profile.idealDate
        }
      };

      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create profile');
      }

      console.log('Profile created successfully');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error creating profile:', error);
      // Add error handling UI here
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-[#569cd6] mb-6">
            <span className="text-[#4ec9b0]">class</span> DeveloperProfile {`{`}
          </h1>

          <form onSubmit={handleSubmit} className="code-block p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#4ec9b0] mb-2">name: string;</label>
                <input
                  type="text"
                  name="name"
                  className="code-input"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="console.log('Your Name')"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">email: string;</label>
                <input
                  type="email"
                  name="email"
                  className="code-input"
                  value={profile.email}
                  onChange={handleInputChange}
                  placeholder="your_email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">profile.favLanguage: string;</label>
                <input
                  type="text"
                  name="profile.favLanguage"
                  className="code-input"
                  value={profile.profile.favLanguage}
                  onChange={handleInputChange}
                  placeholder="Your favorite programming language"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">profile.hatedLanguage: string;</label>
                <input
                  type="text"
                  name="profile.hatedLanguage"
                  className="code-input"
                  value={profile.profile.hatedLanguage}
                  onChange={handleInputChange}
                  placeholder="Language you'd rather not use"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">profile.favAlgorithm: string;</label>
                <input
                  type="text"
                  name="profile.favAlgorithm"
                  className="code-input"
                  value={profile.profile.favAlgorithm}
                  onChange={handleInputChange}
                  placeholder="Your favorite algorithm"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">profile.idealDate: string;</label>
                <select
                  name="profile.idealDate"
                  className="code-input"
                  value={profile.profile.idealDate}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Ideal Date</option>
                  <option value="hackathon">Hackathon & Chill</option>
                  <option value="debugging">Debugging Session</option>
                  <option value="techTalk">Tech Talk & Coffee</option>
                  <option value="codeReview">Code Review & Dinner</option>
                  <option value="lan">LAN Party</option>
                </select>
              </div>
            </div>

            <button type="submit" className="code-btn w-full mt-6">
              git push origin profile
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
