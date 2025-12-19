import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Linkedin, Github, Award, 
  Briefcase, MapPin, Calendar, Globe, Star
} from 'lucide-react';

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  const teamMembers = [
    {
      name: "Akarsh",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Strategic vision and business development expert with 10+ years in cybersecurity. Passionate about protecting Penang's SME heritage.",
      education: "yo",
      expertise: ["Business Strategy", "Cybersecurity Sales", "SME Market"],
      contact: {
        email: "a@legacyshield.my",
        linkedin: "linkedin.com/in/akarsh",
        phone: "+6012-345 6789"
      },
      color: "blue"
    },
    {
      name: "Hooiqi",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      bio: "Technical architect and security specialist. Leads the development of SentryNode OS Monitor and real-time threat detection systems.",
      education: "Yo",
      expertise: ["System Architecture", "Threat Intelligence", "API Security"],
      contact: {
        email: "hoooiqi@legacyshield.my",
        github: "github.com/sarahlim",
        phone: "+6012-987 6543"
      },
      color: "purple"
    },
    {
      name: "An yi",
      role: "CPO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop",
      bio: "UI/UX designer and product manager. Focuses on creating intuitive security dashboards that SMEs can actually understand and use.",
      education: "Yo",
      expertise: ["UI/UX Design", "Product Management", "User Research"],
      contact: {
        email: "anyi@legacyshield.my",
        linkedin: "linkedin.com/in/anyi",
        behance: "behance.net/anyi"
      },
      color: "green"
    }
  ];

  const achievements = [
    "🏆 Best Startup Penang 2024",
    "🚀 500+ SMEs Protected",
    "⭐ 4.9/5 Customer Rating",
    "🔐 ISO 27001 Certified",
    "👥 15+ Team Members",
    "📍 3 Penang Locations"
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Founders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three Computer Science graduates united by a mission to secure Penang's digital future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveMember(index)}
              className={`relative rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                activeMember === index
                  ? `border-${member.color}-500 shadow-2xl`
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Profile Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Profile Info */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${member.color}-100 text-${member.color}-800 text-sm font-semibold mt-2`}>
                      <Briefcase className="h-4 w-4 mr-2" />
                      {member.role}
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-${member.color}-100 flex items-center justify-center`}>
                    <User className={`h-6 w-6 text-${member.color}-600`} />
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="h-4 w-4 mr-2" />
                    <span>{member.education.split('•')[0]}</span>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 bg-${member.color}-50 text-${member.color}-700 rounded-full text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Links */}
                <div className="flex space-x-4 mt-6 pt-6 border-t">
                  <a href={`mailto:${member.contact.email}`} className="text-gray-400 hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                  </a>
                  {member.contact.linkedin && (
                    <a href={`https://${member.contact.linkedin}`} className="text-gray-400 hover:text-blue-700">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.contact.github && (
                    <a href={`https://${member.contact.github}`} className="text-gray-400 hover:text-gray-800">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Member Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMember}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-16"
          >
            <div className={`bg-gradient-to-br from-${teamMembers[activeMember].color}-50 to-white rounded-2xl p-8 shadow-xl border border-${teamMembers[activeMember].color}-100`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {teamMembers[activeMember].name}
                  </h3>
                  <p className="text-gray-600 text-lg">{teamMembers[activeMember].bio}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">
                    {teamMembers[activeMember].role}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Co-Founder</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Education & Details */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Background</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-700">Education</div>
                        <div className="text-gray-600">{teamMembers[activeMember].education}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-700">Location</div>
                        <div className="text-gray-600">Bayan Lepas, Penang</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-700">Joined</div>
                        <div className="text-gray-600">January 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-700">Email</div>
                        <a href={`mailto:${teamMembers[activeMember].contact.email}`} className="text-blue-600 hover:underline">
                          {teamMembers[activeMember].contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-700">Phone</div>
                        <div className="text-gray-600">{teamMembers[activeMember].contact.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className={`h-5 w-5 text-${teamMembers[activeMember].color}-600 mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-700">Social</div>
                        <div className="flex space-x-3 mt-1">
                          {teamMembers[activeMember].contact.linkedin && (
                            <a href={`https://${teamMembers[activeMember].contact.linkedin}`} className="text-blue-700 hover:underline text-sm">
                              LinkedIn
                            </a>
                          )}
                          {teamMembers[activeMember].contact.github && (
                            <a href={`https://${teamMembers[activeMember].contact.github}`} className="text-gray-800 hover:underline text-sm">
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Company Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl mb-2">{achievement.split(' ')[0]}</div>
                <div className="text-sm text-gray-600">{achievement.split(' ').slice(1).join(' ')}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to Join Our Mission?</h3>
            <p className="text-xl mb-6 opacity-90">
              We're hiring passionate cybersecurity professionals in Penang.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;