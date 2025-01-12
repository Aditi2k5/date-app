'use client';

import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4ec9b0]">
            <span className="text-[#569cd6]">class</span> Dashboard extends DevDate {`{`}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="code-block p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
              <span className="text-[#dcdcaa]">async function</span> getMatches()
            </h3>
            <div className="space-y-4">
              <div className="border-b border-[#333333] pb-4">
                <p className="text-[#6a9955]">// Recent AI Match Suggestions</p>
                <div className="mt-2 space-y-2">
                  <div className="text-[#d4d4d4]">
                    <span className="text-[#4ec9b0]">match_1</span>: 95% compatibility
                  </div>
                  <div className="text-[#d4d4d4]">
                    <span className="text-[#4ec9b0]">match_2</span>: 92% compatibility
                  </div>
                </div>
              </div>
              <button className="code-btn w-full">
                viewAllMatches();
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="code-block p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
              <span className="text-[#dcdcaa]">const</span> profileMetrics
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-[#d4d4d4]">
                  <p className="text-[#6a9955]">// Profile Views</p>
                  <span className="text-[#ce9178]">42</span>
                </div>
                <div className="text-[#d4d4d4]">
                  <p className="text-[#6a9955]">// Match Rate</p>
                  <span className="text-[#ce9178]">87%</span>
                </div>
                <div className="text-[#d4d4d4]">
                  <p className="text-[#6a9955]">// Tech Stack Match</p>
                  <span className="text-[#ce9178]">8</span>
                </div>
                <div className="text-[#d4d4d4]">
                  <p className="text-[#6a9955]">// Active Chats</p>
                  <span className="text-[#ce9178]">3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
              <span className="text-[#dcdcaa]">async function</span> getUpcomingEvents()
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#333333] rounded p-4">
                <p className="text-[#6a9955]">// Local Hackathon</p>
                <p className="text-[#d4d4d4]">Date: <span className="text-[#ce9178]">2024-03-15</span></p>
                <p className="text-[#d4d4d4]">Matches: <span className="text-[#ce9178]">5</span></p>
              </div>
              <div className="border border-[#333333] rounded p-4">
                <p className="text-[#6a9955]">// Tech Meetup</p>
                <p className="text-[#d4d4d4]">Date: <span className="text-[#ce9178]">2024-03-18</span></p>
                <p className="text-[#d4d4d4]">Matches: <span className="text-[#ce9178]">3</span></p>
              </div>
              <div className="border border-[#333333] rounded p-4">
                <p className="text-[#6a9955]">// Code & Coffee</p>
                <p className="text-[#d4d4d4]">Date: <span className="text-[#ce9178]">2024-03-20</span></p>
                <p className="text-[#d4d4d4]">Matches: <span className="text-[#ce9178]">4</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
