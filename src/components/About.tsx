import React from 'react';
import { Target, Users, Heart, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-pastel-blue" />,
    title: "Our Mission",
    description: "To create an inclusive environment where every student feels valued, respected, and empowered to express their authentic self.",
    bgColor: "bg-pastel-blue/20"
  },
  {
    icon: <Users className="h-8 w-8 text-pastel-purple" />,
    title: "Community",
    description: "Building strong connections and fostering meaningful relationships across diverse backgrounds and experiences.",
    bgColor: "bg-pastel-purple/20"
  },
  {
    icon: <Heart className="h-8 w-8 text-pastel-pink" />,
    title: "Support",
    description: "Providing resources, mentorship, and a safe space for all students to explore and celebrate their identities.",
    bgColor: "bg-pastel-pink/20"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-pastel-yellow" />,
    title: "Growth",
    description: "Promoting personal development, leadership skills, and advocacy for positive change in our community.",
    bgColor: "bg-pastel-yellow/20"
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-pastel-blue/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Our Alliance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${value.bgColor} shadow-lg hover:shadow-xl transition`}>
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}