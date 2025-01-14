'use client';

import { motion } from 'framer-motion';
import { GitBranch, Heart, Code2, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

const codeSnippet = `
interface CSMajor {
  name: string;
  crushOn: string[];
  socialSkills: number; // usually 404
}

class DateMatcher {
  static async findLove(dev: CSMajor): Promise<Match> {
    if (dev.socialSkills === 404) {
      return this.improveSkills();
    }
    return this.findPerfectPair();
  }
}
`.trim();

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col">
      <header className="bg-[#161b22] border-b border-[#30363d] sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#0969da]" />
              <span className="text-white">GitHubby</span>
              <span className="text-xs text-[#8b949e] font-mono">beta</span>
            </h1>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#238636]/10 rounded-full">
              <span className="text-[#0969da] text-sm font-mono">sudo apt-get install girlfriend</span>
            </div>
            <h2 className="text-6xl font-bold text-white leading-tight">
              Where !single Meets println("love")
            </h2>
            <p className="text-xl text-[#8b949e] leading-relaxed">
              Because even programmers deserve a life outside the terminal. 
              Find someone who understands why you debug until 3 AM! 
            </p>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/auth')}
                className="px-6 py-3 bg-[#0969da] text-white rounded-md font-semibold hover:bg-[#1f7cf2] transition-colors"
              >
                git push --force relationship
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#161b22] border border-[#30363d] rounded-md shadow-xl"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#30363d] bg-[#161b22]">
              <GitBranch className="w-4 h-4 text-[#8b949e]" />
              <span className="text-sm text-[#8b949e]">GitHubby.ts</span>
            </div>
            <pre className="p-6 font-mono text-sm overflow-x-auto">
              <code>
                {codeSnippet.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex"
                  >
                    <span className="text-[#8b949e] w-8">{i + 1}</span>
                    <span className="flex-1 text-[#c9d1d9]">
                      {line.split(' ').map((word, j) => {
                        if (word.match(/(interface|class|async|static|await)/))
                          return <span key={j} className="text-[#ff7b72]">{word} </span>;
                        if (word.match(/(string|Developer|Match)/))
                          return <span key={j} className="text-[#79c0ff]">{word} </span>;
                        if (word.match(/(findMatch|analyze|findPerfectPair)/))
                          return <span key={j} className="text-[#d2a8ff]">{word} </span>;
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
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#161b22] p-8 rounded-md border border-[#30363d] hover:border-[#238636] transition-colors"
          >
            <Heart className="w-12 h-12 text-[#0969da] mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">AI Matching</h3>
            <p className="text-[#8b949e] leading-relaxed">
              Our algorithm has O(1) complexity in finding your perfect match. No more O(n²) dating!
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#161b22] p-8 rounded-md border border-[#30363d] hover:border-[#238636] transition-colors"
          >
            <Users className="w-12 h-12 text-[#0969da] mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">Developer Network</h3>
            <p className="text-[#8b949e] leading-relaxed">
              Meet people who understand why your code works on localhost but not in production.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#161b22] p-8 rounded-md border border-[#30363d] hover:border-[#238636] transition-colors"
          >
            <Code2 className="w-12 h-12 text-[#0969da] mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">Code Together</h3>
            <p className="text-[#8b949e] leading-relaxed">
              Find someone to debug your heart and fix your lonely exception.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <footer className="bg-[#161b22] border-t border-[#30363d] mt-12">
        <div className="container mx-auto px-6 py-3 flex justify-between text-sm text-[#8b949e]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0969da]"></div>
              Servers Running on Coffee
            </div>
            <div>main</div>
          </div>
          <div className="flex items-center gap-4">
            <div>TypeScript</div>
            <div>React</div>
          </div>
        </div>
      </footer>
    </div>
  );
}