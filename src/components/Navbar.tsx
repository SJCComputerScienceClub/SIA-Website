import React from 'react';
import { Users, Calendar, BookOpen, MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pastel-purple to-pastel-blue text-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="font-bold text-xl">Identity Alliance</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="flex items-center space-x-1 hover:text-white transition">
              <BookOpen className="h-4 w-4" />
              <span>About</span>
            </a>
            <a href="#events" className="flex items-center space-x-1 hover:text-white transition">
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </a>
            <a href="#join" className="flex items-center space-x-1 hover:text-white transition">
              <MessageCircle className="h-4 w-4" />
              <span>Join Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}