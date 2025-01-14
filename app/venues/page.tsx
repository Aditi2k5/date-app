'use client';

import { useRouter } from 'next/navigation';

export default function VenuesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#c9d1d9]">
            <span className="text-[#ff69b4]">❤ </span>
            <span className="text-[#6a9955]">// Perfect Date Locations</span>
          </h1>
          <button 
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-[#0969da] text-white rounded-md hover:bg-[#1f7cf2] transition-colors"
          >
            cd ../dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tech-themed Coffee Shops */}
          <div className="code-block p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-[#dcdcaa]">
              class CoffeeDate extends Romance {`{`}
            </h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Cozy cafes for pair programming</span>
            </p>
            <ul className="text-[#d4d4d4]">
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Laptop-friendly ambiance</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>High-speed connection</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Coffee.join(love)</li>
            </ul>
            <div className="text-[#dcdcaa]">{`}`}</div>
          </div>

          {/* Co-working Spaces */}
          <div className="code-block p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-[#dcdcaa]">
              class CoworkingLove extends Romance {`{`}
            </h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Where code meets chemistry</span>
            </p>
            <ul className="text-[#d4d4d4]">
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Private coding rooms</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Collaborative space</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>24/7 together</li>
            </ul>
            <div className="text-[#dcdcaa]">{`}`}</div>
          </div>

          {/* Tech Museums */}
          <div className="code-block p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-[#dcdcaa]">
              class MuseumDate extends Romance {`{`}
            </h3>
            <p className="text-[#d4d4d4] mb-4">
              <span className="text-[#6a9955]">// Explore tech history together</span>
            </p>
            <ul className="text-[#d4d4d4]">
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Interactive memories</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Learn && grow</li>
              <li className="mb-2"><span className="text-[#ff69b4]">❤ </span>Share.knowledge()</li>
            </ul>
            <div className="text-[#dcdcaa]">{`}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
