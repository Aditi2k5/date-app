'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <header className="bg-[#161b22] border-b border-[#30363d]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#c9d1d9]">
              <span className="text-[#0969da]">GitHubby</span>
              <span className="text-xs text-[#8b949e]"> // seeking pull requests</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <a href="/dashboard/matches" className="text-[#c9d1d9] hover:text-[#0969da]">matches.ts</a>
                <a href="/dashboard/events" className="text-[#c9d1d9] hover:text-[#0969da]">events.ts</a>
                <a href="/dashboard/profile" className="text-[#c9d1d9] hover:text-[#0969da]">profile.ts</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
