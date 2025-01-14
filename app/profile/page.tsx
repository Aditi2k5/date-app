'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ProfileData {
  name: string;
  age: string;
  gender: string;
  favLanguage: string;
  hatedLanguage: string;
  favAlgorithm: string;
  favMeme: string;
  idealDate: string;
  debuggingStyle: string;
  tabsOrSpaces: string;
  githubUrl: string;
  bio: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    age: '',
    gender: '',
    favLanguage: '',
    hatedLanguage: '',
    favAlgorithm: '',
    favMeme: '',
    idealDate: '',
    debuggingStyle: '',
    tabsOrSpaces: '',
    githubUrl: '',
    bio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
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
                <label className="block text-[#4ec9b0] mb-2">age: number;</label>
                <input
                  type="number"
                  name="age"
                  className="code-input"
                  value={profile.age}
                  onChange={handleInputChange}
                  placeholder="parseInt('your_age')"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">gender: string;</label>
                <select
                  name="gender"
                  className="code-input"
                  value={profile.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="boolean">Boolean</option>
                </select>
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">favLanguage: string;</label>
                <input
                  type="text"
                  name="favLanguage"
                  className="code-input"
                  value={profile.favLanguage}
                  onChange={handleInputChange}
                  placeholder="Your favorite programming language"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">hatedLanguage: string;</label>
                <input
                  type="text"
                  name="hatedLanguage"
                  className="code-input"
                  value={profile.hatedLanguage}
                  onChange={handleInputChange}
                  placeholder="Language you'd rather not use"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">favAlgorithm: string;</label>
                <input
                  type="text"
                  name="favAlgorithm"
                  className="code-input"
                  value={profile.favAlgorithm}
                  onChange={handleInputChange}
                  placeholder="Your favorite algorithm"
                  required
                />
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">idealDate: string;</label>
                <select
                  name="idealDate"
                  className="code-input"
                  value={profile.idealDate}
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

              <div>
                <label className="block text-[#4ec9b0] mb-2">debuggingStyle: string;</label>
                <select
                  name="debuggingStyle"
                  className="code-input"
                  value={profile.debuggingStyle}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">How do you debug?</option>
                  <option value="console">console.log everywhere</option>
                  <option value="debugger">Actual debugger</option>
                  <option value="prayer">Prayer</option>
                  <option value="stackoverflow">Stack Overflow</option>
                </select>
              </div>

              <div>
                <label className="block text-[#4ec9b0] mb-2">tabsOrSpaces: string;</label>
                <select
                  name="tabsOrSpaces"
                  className="code-input"
                  value={profile.tabsOrSpaces}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Tabs or Spaces?</option>
                  <option value="tabs">Tabs</option>
                  <option value="spaces">Spaces</option>
                  <option value="both">Both (Chaotic Evil)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#4ec9b0] mb-2">favMeme: string;</label>
              <input
                type="text"
                name="favMeme"
                className="code-input"
                value={profile.favMeme}
                onChange={handleInputChange}
                placeholder="Your favorite programming meme"
                required
              />
            </div>

            <div>
              <label className="block text-[#4ec9b0] mb-2">bio: string;</label>
              <textarea
                name="bio"
                className="code-input min-h-[100px]"
                value={profile.bio}
                onChange={handleInputChange}
                placeholder="/* Write a comment about yourself */"
                required
              />
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
