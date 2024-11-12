import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: "Identity & Inclusion Workshop",
    date: "March 25, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Student Center Room 201",
    description: "Interactive workshop exploring identity, privilege, and allyship.",
    color: "from-pastel-pink to-pastel-purple"
  },
  {
    title: "Cultural Exchange Night",
    date: "April 5, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Main Hall",
    description: "Share stories, food, and traditions from different cultures.",
    color: "from-pastel-purple to-pastel-blue"
  },
  {
    title: "Pride Month Celebration",
    date: "June 1, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Campus Quad",
    description: "Annual celebration featuring performances, speakers, and activities.",
    color: "from-pastel-blue to-pastel-green"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gradient-to-b from-pastel-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className={`h-2 bg-gradient-to-r ${event.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
                <button className={`mt-6 w-full bg-gradient-to-r ${event.color} text-gray-800 hover:text-white py-2 rounded-md transition`}>
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}