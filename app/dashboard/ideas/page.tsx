'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DateIdea {
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  difficulty: string;
  memeUrl: string;
}

export default function IdeasPage() {
  const [userTechStack] = useState(['JavaScript', 'React', 'Python']); // This would come from user profile
  
  const dateIdeas: DateIdea[] = [
    {
      title: 'Pair Programming Challenge',
      description: 'Solve LeetCode problems together while enjoying coffee',
      techStack: ['JavaScript', 'Python', 'Java'],
      duration: '2 hours',
      difficulty: 'Medium',
      memeUrl: 'https://api.memegen.link/images/drake/Solo_Programming/Pair_Programming'
    },
    {
      title: 'Build a Mini Project',
      description: 'Create a small web app together using shared tech stack',
      techStack: ['React', 'Node.js', 'MongoDB'],
      duration: '4 hours',
      difficulty: 'Hard',
      memeUrl: 'https://api.memegen.link/images/doge/such_code/much_collaboration'
    }
  ];

  const addToPlanner = (idea: DateIdea) => {
    // This would integrate with the planner page
    console.log('Adding to planner:', idea);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4ec9b0]">
            <span className="text-[#569cd6]">class</span> DateIdeas {`{`}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dateIdeas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="code-block p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
                <span className="text-[#dcdcaa]">function</span> {idea.title.replace(/\s+/g, '')}()
              </h3>
              <div className="space-y-4">
                <p className="text-[#d4d4d4]">
                  <span className="text-[#6a9955]">// {idea.description}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {idea.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-sm ${
                        userTechStack.includes(tech)
                          ? 'bg-[#264f78] text-[#d4d4d4]'
                          : 'bg-[#333333] text-[#858585]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-[#333333] pt-4 mt-4">
                  <p className="text-[#d4d4d4]">
                    <span className="text-[#9cdcfe]">duration:</span>{' '}
                    <span className="text-[#ce9178]">"{idea.duration}"</span>
                  </p>
                  <p className="text-[#d4d4d4]">
                    <span className="text-[#9cdcfe]">difficulty:</span>{' '}
                    <span className="text-[#ce9178]">"{idea.difficulty}"</span>
                  </p>
                </div>
                {idea.memeUrl && (
                  <div className="mt-4">
                    <img
                      src={idea.memeUrl}
                      alt="Programming meme"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                )}
                <button
                  onClick={() => addToPlanner(idea)}
                  className="code-btn w-full mt-4"
                >
                  addToPlanner(idea);
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 code-block p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
            <span className="text-[#dcdcaa]">function</span> getCustomSuggestions()
          </h3>
          <p className="text-[#d4d4d4]">
            <span className="text-[#6a9955]">// AI-powered date suggestions based on your profile</span>
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-[#d4d4d4]">
              Based on your JavaScript expertise, consider building a small game together!
            </p>
            <p className="text-[#d4d4d4]">
              Your Python skills match well with data science enthusiasts.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
