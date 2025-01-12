'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <header className="bg-[#252526] border-b border-[#333333]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#569cd6]">
              <span className="text-[#4ec9b0]">DevDate</span>
              <span className="text-xs text-[#6a9955]"> // v1.0.0</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <a href="/dashboard/venues" className="nav-tab text-[#d4d4d4] hover:text-[#569cd6]">venues.ts</a>
                <a href="/dashboard/planner" className="nav-tab text-[#d4d4d4] hover:text-[#569cd6]">planner.ts</a>
                <a href="/dashboard/ideas" className="nav-tab text-[#d4d4d4] hover:text-[#569cd6]">ideas.ts</a>
                <a href="/dashboard/profile" className="nav-tab text-[#d4d4d4] hover:text-[#569cd6]">profile.ts</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {children}
      </main>

      <div className="status-bar">
        <div>AI Match Engine Active</div>
        <div>Ln 1, Col 1</div>
        <div>UTF-8</div>
        <div>TypeScript React</div>
      </div>
    </div>
  );
}
