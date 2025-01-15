import React from 'react';
import { ChevronRight } from 'lucide-react';

const OurMessage = () => {
  const teamMembers = [
    {
      name: "Dr. Deepak Shivanna",
      title: "President, KOA",
      image: "/image4.jpg", // Replace with actual image path
    },
    {
      name: "Dr. Harish Murthy",
      title: "Secretary General, KOA",
      image: "/image3.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 w-fit">
              Our Message
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-700">
                KOA President's Theme, 2024 – 25
              </h3>
              <h4 className="text-lg font-semibold text-gray-600">
                "Collaborate – Share – Support"
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This community has been setup for the Karnataka Orthopaedic Association Members and will attempt to be a high-quality forum for academic discussion, provide an information-sharing service for basic science and clinical practice research, be a discussion forum of contemporary issues, reports of relevant meetings, conferences, articles, and publications.
            </p>
            <a
              href="/about-us/our-message/"
              className="text-red-600 hover:text-red-700 flex items-center gap-2 font-medium"
            >
              read our message
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Team Members */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMessage;
