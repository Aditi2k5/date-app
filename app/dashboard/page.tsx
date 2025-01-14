'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Heart, MapPin, Calendar, Code2 } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#c9d1d9]">
            <span className="text-[#ff7b72]">class</span> LonelyDev extends GitHubby {`{`}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Potential Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#ff7b72]">
              <span className="text-[#d2a8ff]">async function</span> findMatches()
            </h3>
            <div className="space-y-4">
              <div className="border-b border-[#30363d] pb-4">
                <p className="text-[#8b949e]">// Potential Runtime Partners</p>
                <div className="mt-2 space-y-2">
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">match_1</span>: Uses same naming convention
                  </div>
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">match_2</span>: Also debugs at 3 AM
                  </div>
                  <div className="text-[#c9d1d9]">
                    <span className="text-[#79c0ff]">match_3</span>: Hates PHP too
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#0969da] text-white rounded-md py-2 px-4 hover:bg-[#1f7cf2] transition-colors">
                git fetch --all matches
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#ff7b72]">
              <span className="text-[#d2a8ff]">const</span> relationshipMetrics
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-[#c9d1d9]">
                  <p className="text-[#8b949e]">// Profile Views</p>
                  <span className="text-[#79c0ff]">404</span>
                </div>
                <div className="text-[#c9d1d9]">
                  <p className="text-[#8b949e]">// Match Rate</p>
                  <span className="text-[#79c0ff]">NaN%</span>
                </div>
                <div className="text-[#c9d1d9]">
                  <p className="text-[#8b949e]">// Stack Overflow Score</p>
                  <span className="text-[#79c0ff]">9000+</span>
                </div>
                <div className="text-[#c9d1d9]">
                  <p className="text-[#8b949e]">// Bugs Fixed</p>
                  <span className="text-[#79c0ff]">∞</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Access Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Date Ideas Tile */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => router.push('/ideas')}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer hover:border-[#0969da] transition-all"
          >
            <Calendar className="w-8 h-8 text-[#0969da] mb-4" />
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-2">Date Ideas</h3>
            <p className="text-[#8b949e]">
              <span className="text-[#d2a8ff]">import</span> perfect_date <span className="text-[#ff7b72]">from</span> './ideas'
            </p>
          </motion.div>

          {/* Venues Tile */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => router.push('/venues')}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer hover:border-[#0969da] transition-all"
          >
            <MapPin className="w-8 h-8 text-[#0969da] mb-4" />
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-2">Venues</h3>
            <p className="text-[#8b949e]">
              <span className="text-[#d2a8ff]">select *</span> <span className="text-[#ff7b72]">from</span> perfect_locations
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => router.push('/events')}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer hover:border-[#0969da] transition-all"
          >
            <Code2 className="w-8 h-8 text-[#0969da] mb-4" />
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-2">Events</h3>
            <p className="text-[#8b949e]">
              <span className="text-[#d2a8ff]">await</span> findNearbyEvents()
            </p>
          </motion.div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#ff7b72]">
              <span className="text-[#d2a8ff]">async function</span> getRecentActivity()
            </h3>
            <div className="space-y-4">
              <div className="border border-[#30363d] rounded p-4">
                <p className="text-[#8b949e]">// Latest Commits</p>
                <div className="mt-2 space-y-2">
                  <p className="text-[#c9d1d9]">
                    <Heart className="w-4 h-4 text-[#0969da] inline mr-2" />
                    <span className="text-[#79c0ff]">Matched with a TypeScript developer</span>
                  </p>
                  <p className="text-[#c9d1d9]">
                    <Calendar className="w-4 h-4 text-[#0969da] inline mr-2" />
                    <span className="text-[#79c0ff]">Scheduled: Hackathon & Chill</span>
                  </p>
                  <p className="text-[#c9d1d9]">
                    <Code2 className="w-4 h-4 text-[#0969da] inline mr-2" />
                    <span className="text-[#79c0ff]">Merged: Coffee Date PR</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#161b22] border-t border-[#30363d] py-2 px-4">
        <div className="container mx-auto flex justify-between text-sm text-[#8b949e]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0969da]"></div>
            <span>git status: seeking merge request</span>
          </div>
          <div>branch: forever-alone</div>
        </div>
      </div>
    </div>
  );
}
