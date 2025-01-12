'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Venue {
  name: string;
  type: string;
  features: string[];
  techAmenities: string[];
  atmosphere: string;
  image: string;
  rating: number;
}

export default function VenuesPage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const venues: Venue[] = [
    {
      name: 'Tech Hub Café',
      type: 'cafe',
      features: ['High-speed WiFi', 'Power outlets', 'Private booths'],
      techAmenities: ['Monitors available', 'Whiteboard walls'],
      atmosphere: 'Casual coding environment',
      image: 'https://source.unsplash.com/random/800x600/?cafe',
      rating: 4.8
    },
    {
      name: 'Code & Coffee',
      type: 'cafe',
      features: ['24/7 access', 'Meeting rooms', 'Coffee bar'],
      techAmenities: ['Projector', 'Git visualization screens'],
      atmosphere: 'Modern tech workspace',
      image: 'https://source.unsplash.com/random/800x600/?workspace',
      rating: 4.5
    },
    {
      name: 'Dev Workshop',
      type: 'coworking',
      features: ['Conference rooms', 'Event space', 'Kitchen'],
      techAmenities: ['High-performance workstations', '3D printers'],
      atmosphere: 'Professional tech hub',
      image: 'https://source.unsplash.com/random/800x600/?coworking',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#4ec9b0]">
            <span className="text-[#569cd6]">class</span> TechVenues {`{`}
          </h2>
          
          <div className="flex gap-4 mt-4">
            {['all', 'cafe', 'coworking'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`code-btn ${
                  selectedType === type ? 'bg-[#264f78]' : 'bg-[#333333]'
                }`}
              >
                filter("{type}");
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues
            .filter((venue) => selectedType === 'all' || venue.type === selectedType)
            .map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="code-block overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#569cd6]">
                    <span className="text-[#dcdcaa]">const</span> {venue.name.replace(/\s+/g, '')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-[#ce9178]">{venue.rating}</span>
                      <span className="text-[#d4d4d4]">/5.0</span>
                    </div>
                    <p className="text-[#6a9955]">// {venue.atmosphere}</p>
                    <div className="space-y-2">
                      <p className="text-[#9cdcfe]">Features:</p>
                      {venue.features.map((feature, i) => (
                        <p key={i} className="text-[#d4d4d4] pl-4">
                          - {feature}
                        </p>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#9cdcfe]">Tech Amenities:</p>
                      {venue.techAmenities.map((amenity, i) => (
                        <p key={i} className="text-[#d4d4d4] pl-4">
                          - {amenity}
                        </p>
                      ))}
                    </div>
                    <button className="code-btn w-full mt-4">
                      bookVenue();
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
