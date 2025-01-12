'use client';

import { motion } from 'framer-motion';

const codeSnippet = `
interface Developer {
  name: string;
  skills: string[];
  lookingFor: string;
}

class DevDate {
  static async findMatch(dev: Developer): Promise<Match> {
    const compatibility = await AI.analyze(dev);
    return compatibility.findPerfectPair();
  }
}
`.trim();

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <header className="bg-[#252526] border-b border-[#333333]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#569cd6]">
              <span className="text-[#4ec9b0]">DevDate</span>
              <span className="text-xs text-[#6a9955]"> // v1.0.0</span>
            </h1>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-[#4ec9b0] mb-6">
              Where Code Meets Compatibility
            </h2>
            <p className="text-xl text-[#d4d4d4] mb-8">
              <span className="text-[#6a9955]">// AI-powered dating platform for developers</span>
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/profile"
                className="code-btn inline-block text-lg"
              >
                initializeProfile();
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="code-block p-6 font-mono"
          >
            <pre className="text-sm">
              <code>
                {codeSnippet.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex"
                  >
                    <span className="text-[#858585] w-8">{i + 1}</span>
                    <span className="flex-1">
                      {line.split(' ').map((word, j) => {
                        if (word.match(/(interface|class|async|static|await)/))
                          return <span key={j} className="text-[#569cd6]">{word} </span>;
                        if (word.match(/(string|Developer|Match)/))
                          return <span key={j} className="text-[#4ec9b0]">{word} </span>;
                        if (word.match(/(findMatch|analyze|findPerfectPair)/))
                          return <span key={j} className="text-[#dcdcaa]">{word} </span>;
                        return <span key={j}>{word} </span>;
                      })}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#4ec9b0]">AI Matching</h3>
            <p className="text-[#d4d4d4]">
              <span className="text-[#6a9955]">// </span>
              Advanced algorithms analyze compatibility based on coding preferences
            </p>
          </div>

          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#4ec9b0]">Tech Events</h3>
            <p className="text-[#d4d4d4]">
              <span className="text-[#6a9955]">// </span>
              Find dates at hackathons, conferences, and tech meetups
            </p>
          </div>

          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#4ec9b0]">Code Together</h3>
            <p className="text-[#d4d4d4]">
              <span className="text-[#6a9955]">// </span>
              Build projects and solve problems as a team
            </p>
          </div>
        </motion.div>
      </main>

      <div className="status-bar">
        <div>AI Match Engine Ready</div>
        <div>Ln 1, Col 1</div>
        <div>UTF-8</div>
        <div>TypeScript React</div>
      </div>
    </div>
  );
}
