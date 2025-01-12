'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DateEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  tips: string[];
  memeUrl: string;
}

export default function PlannerPage() {
  const [events, setEvents] = useState<DateEvent[]>([
    {
      title: 'Coffee & Code',
      date: '2024-03-20',
      time: '15:00',
      venue: 'Tech Hub Café',
      description: 'Casual coding session with coffee',
      tips: [
        'Bring your laptop fully charged',
        'Have some coding problems ready to discuss',
        'Be open to pair programming'
      ],
      memeUrl: 'https://api.memegen.link/images/programmer/coffee/code'
    }
  ]);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState<DateEvent>({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    tips: [],
    memeUrl: ''
  });

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4ec9b0]">
            <span className="text-[#569cd6]">class</span> DatePlanner {`{`}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="code-block p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
                <span className="text-[#dcdcaa]">async function</span> viewSchedule()
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-[#333333] rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ce9178]">{event.title}</h4>
                        <p className="text-[#d4d4d4]">
                          {event.date} @ {event.time}
                        </p>
                        <p className="text-[#6a9955]">// {event.venue}</p>
                      </div>
                      <button className="code-btn">
                        editEvent();
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="text-[#9cdcfe]">Tips:</p>
                      {event.tips.map((tip, i) => (
                        <p key={i} className="text-[#d4d4d4] pl-4">
                          - {tip}
                        </p>
                      ))}
                    </div>
                    {event.memeUrl && (
                      <img
                        src={event.memeUrl}
                        alt="Date meme"
                        className="mt-4 rounded-lg w-full h-48 object-cover"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Add Event */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="code-block p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
                <span className="text-[#dcdcaa]">function</span> quickAdd()
              </h3>
              <button
                onClick={() => setShowAddEvent(true)}
                className="code-btn w-full"
              >
                newDate.create();
              </button>

              {showAddEvent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Event title"
                    className="code-input w-full"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                  <input
                    type="date"
                    className="code-input w-full"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                  <input
                    type="time"
                    className="code-input w-full"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Venue"
                    className="code-input w-full"
                    value={newEvent.venue}
                    onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                  />
                  <textarea
                    placeholder="Description"
                    className="code-input w-full"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  />
                  <button
                    onClick={() => {
                      setEvents([...events, newEvent]);
                      setShowAddEvent(false);
                      setNewEvent({
                        title: '',
                        date: '',
                        time: '',
                        venue: '',
                        description: '',
                        tips: [],
                        memeUrl: ''
                      });
                    }}
                    className="code-btn w-full"
                  >
                    saveEvent();
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Date Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="code-block p-6 mt-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
                <span className="text-[#dcdcaa]">const</span> dateTips
              </h3>
              <div className="space-y-2">
                <p className="text-[#6a9955]">// Remember to:</p>
                <p className="text-[#d4d4d4]">1. git commit to the conversation</p>
                <p className="text-[#d4d4d4]">2. !important: be yourself</p>
                <p className="text-[#d4d4d4]">3. handle errors gracefully</p>
                <p className="text-[#d4d4d4]">4. avoid infinite loops in conversation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
