'use client';

import { useRouter } from 'next/navigation';

export default function SuggestionsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#c9d1d9]">
            <span className="text-[#6a9955]">// AI Match Suggestions</span>
          </h1>
          <button 
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-[#0969da] text-white rounded-md hover:bg-[#1f7cf2] transition-colors"
          >
            cd ../dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Match Suggestions */}
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#dcdcaa]">
              class PerfectMatch extends Developer {`{`}
            </h3>
            <div className="space-y-4">
              <div className="border-b border-[#30363d] pb-4">
                <p className="text-[#6a9955]">// Based on your GitHub activity</p>
                <ul className="mt-2 space-y-2 text-[#d4d4d4]">
                  <li>• Uses the same code formatter</li>
                  <li>• Contributes to similar repos</li>
                  <li>• Also writes tests first</li>
                  <li>• Shares your hatred for PHP</li>
                </ul>
              </div>
            </div>
            <div className="text-[#dcdcaa]">{`}`}</div>
          </div>

          {/* Compatibility Analysis */}
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#dcdcaa]">
              interface Compatibility {`{`}
            </h3>
            <div className="space-y-4">
              <div className="border-b border-[#30363d] pb-4">
                <p className="text-[#6a9955]">// Compatibility metrics</p>
                <div className="mt-2 space-y-2 text-[#d4d4d4]">
                  <p><span className="text-[#569cd6]">codeStyle:</span> <span className="text-[#ce9178]">"98% match"</span></p>
                  <p><span className="text-[#569cd6]">techStack:</span> <span className="text-[#ce9178]">"TypeScript, React, Node"</span></p>
                  <p><span className="text-[#569cd6]">commitFrequency:</span> <span className="text-[#ce9178]">"Daily pusher"</span></p>
                  <p><span className="text-[#569cd6]">debuggingStyle:</span> <span className="text-[#ce9178]">"console.log enthusiast"</span></p>
                </div>
              </div>
            </div>
            <div className="text-[#dcdcaa]">{`}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
