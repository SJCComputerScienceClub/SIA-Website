import React from 'react';
import { Heart, Stars, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content Box */}
        <div className="relative z-10 bg-white/90 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-pastel-pink" />
            <Stars className="h-6 w-6 text-pastel-purple" />
            <Sparkles className="h-6 w-6 text-pastel-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Student Identity Alliance
          </h1>
          <p className="text-xl mb-8 text-gray-600 leading-relaxed">
            Embracing diversity, fostering inclusion, and celebrating every student's unique identity. Join us in creating a more inclusive and understanding community.
          </p>
          <button className="bg-gradient-to-r from-pastel-blue to-pastel-purple text-gray-800 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-md">
            Join Our Community
          </button>
        </div>

        {/* Right Decorative Graphic */}
        <div className="hidden md:block relative z-10">
          <div className="relative">
            {/* Pastel rainbow circles */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pastel-pink/70 blur-2xl"></div>
            <div className="absolute top-20 right-20 w-56 h-56 rounded-full bg-pastel-purple/70 blur-2xl"></div>
            <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-pastel-blue/70 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-pastel-green/70 blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-pastel-yellow/70 blur-2xl"></div>
            
            {/* Floating elements */}
            <div className="relative">
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-pastel-orange/40 animate-pulse"></div>
              <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-pastel-yellow/40 animate-pulse delay-100"></div>
              <div className="absolute top-30 right-30 w-8 h-8 rounded-full bg-pastel-green/40 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20"></div>
    </div>
  );
}