export default function IdeasPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-[#569cd6] mb-6">
          <span className="text-[#ce9178]">// </span>
          Date Ideas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Coding Challenge Date */}
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#dcdcaa]">function codingChallenge() {`{`}</h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Solve problems on LeetCode together</span>
            </p>
            <div className="text-[#d4d4d4]">
              <p><span className="text-[#569cd6]">type:</span> <span className="text-[#ce9178]">"Problem-solving"</span></p>
              <p><span className="text-[#569cd6]">duration:</span> <span className="text-[#ce9178]">"1-2 hours"</span></p>
              <p><span className="text-[#569cd6]">difficulty:</span> <span className="text-[#ce9178]">"Adjustable"</span></p>
            </div>
            <div className="text-[#dcdcaa] mt-3">{`}`}</div>
          </div>

          {/* Hackathon Date */}
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#dcdcaa]">function miniHackathon() {`{`}</h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Build a project in one day</span>
            </p>
            <div className="text-[#d4d4d4]">
              <p><span className="text-[#569cd6]">type:</span> <span className="text-[#ce9178]">"Creative building"</span></p>
              <p><span className="text-[#569cd6]">duration:</span> <span className="text-[#ce9178]">"Full day"</span></p>
              <p><span className="text-[#569cd6]">difficulty:</span> <span className="text-[#ce9178]">"Challenging"</span></p>
            </div>
            <div className="text-[#dcdcaa] mt-3">{`}`}</div>
          </div>

          {/* Tech Meetup */}
          <div className="code-block p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#dcdcaa]">function techMeetup() {`{`}</h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Attend local tech events</span>
            </p>
            <div className="text-[#d4d4d4]">
              <p><span className="text-[#569cd6]">type:</span> <span className="text-[#ce9178]">"Networking"</span></p>
              <p><span className="text-[#569cd6]">duration:</span> <span className="text-[#ce9178]">"2-3 hours"</span></p>
              <p><span className="text-[#569cd6]">difficulty:</span> <span className="text-[#ce9178]">"Easy"</span></p>
            </div>
            <div className="text-[#dcdcaa] mt-3">{`}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
