import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Join() {
  return (
    <section id="join" className="py-16 bg-gradient-to-b from-white to-pastel-purple/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-12">
            Be part of a supportive community that celebrates diversity and promotes understanding.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-left text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 border border-pastel-purple/30 rounded-md focus:ring-2 focus:ring-pastel-purple focus:border-pastel-purple bg-white"
                  placeholder="Your name"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-left text-gray-700 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    className="pl-10 px-4 py-2 w-full border border-pastel-purple/30 rounded-md focus:ring-2 focus:ring-pastel-purple focus:border-pastel-purple bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-left text-gray-700 font-medium">Why would you like to join?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="px-4 py-2 border border-pastel-purple/30 rounded-md focus:ring-2 focus:ring-pastel-purple focus:border-pastel-purple bg-white"
                  placeholder="Tell us a bit about yourself..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pastel-blue to-pastel-purple text-gray-800 hover:text-white py-3 rounded-md transition flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Submit Application</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}