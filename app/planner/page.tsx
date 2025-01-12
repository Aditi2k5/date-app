export default function PlannerPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-[#569cd6] mb-6">
          <span className="text-[#ff69b4]">❤ </span>
          <span className="text-[#6a9955]">// Plan Your Perfect Date</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="code-block p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#dcdcaa]">
              async function planRomance() {`{`}
            </h2>
            <div className="space-y-4">
              <div className="border border-[#333333] rounded-lg p-4">
                <h3 className="font-medium mb-2 text-[#569cd6]">
                  const nextDate = await heart.schedule();
                </h3>
                <p className="text-[#d4d4d4]">
                  <span className="text-[#6a9955]">// TODO: Create new memories</span>
                </p>
              </div>
              <button className="code-btn w-full">
                <span className="text-[#ff69b4]">❤ </span>
                scheduleDate.now()
              </button>
            </div>
            <div className="text-[#dcdcaa] mt-4">{`}`}</div>
          </div>

          {/* Preferences Section */}
          <div className="code-block p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#dcdcaa]">
              const lovePreferences = {`{`}
            </h2>
            <div className="space-y-4">
              <div className="border-b border-[#333333] pb-4">
                <h3 className="font-medium mb-2 text-[#569cd6]">passions: [</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#264f78] rounded-full text-sm hover:bg-[#ff69b4] transition-colors">
                    "JavaScript"
                  </span>
                  <span className="px-3 py-1 bg-[#264f78] rounded-full text-sm hover:bg-[#ff69b4] transition-colors">
                    "Python"
                  </span>
                  <span className="px-3 py-1 bg-[#264f78] rounded-full text-sm hover:bg-[#ff69b4] transition-colors">
                    "React"
                  </span>
                </div>
                <h3 className="font-medium mt-2 text-[#569cd6]">],</h3>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[#569cd6]">romance: {`{`}</h3>
                <p className="text-[#ce9178]">type: "Forever && Always"</p>
                <h3 className="font-medium mt-2 text-[#569cd6]">}</h3>
              </div>
            </div>
            <div className="text-[#dcdcaa] mt-4">{`}`};</div>
          </div>
        </div>
      </div>
    </div>
  );
}
