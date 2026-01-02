import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Linkedin, Github, Award, 
  Briefcase, MapPin, Calendar, Globe
} from 'lucide-react';

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const colorVariants = {
    blue: {
      borderActive: 'border-blue-500',
      shadow: 'shadow-blue-500/20',
      softBg: 'bg-blue-500/20',
      softBorder: 'border-blue-500/30',
      text: 'text-blue-400',
      hoverBorder: 'hover:border-blue-500/50'
    },
    purple: {
      borderActive: 'border-purple-500',
      shadow: 'shadow-purple-500/20',
      softBg: 'bg-purple-500/20',
      softBorder: 'border-purple-500/30',
      text: 'text-purple-400',
      hoverBorder: 'hover:border-purple-500/50'
    },
    green: {
      borderActive: 'border-green-500',
      shadow: 'shadow-green-500/20',
      softBg: 'bg-green-500/20',
      softBorder: 'border-green-500/30',
      text: 'text-green-400',
      hoverBorder: 'hover:border-green-500/50'
    }
  };

  const teamMembers = [
    {
      name: "Akarsh Srivastava",
      role: "CEO & Co-Founder",
      image: '/images/founder1.png',
      bio: "Strategic vision and business development expert with 10+ years in cybersecurity. Passionate about protecting Penang's SME heritage.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Business Strategy", "Cybersecurity Sales", "SME Market"],
      contact: {
        email: "akarshh.pvt@gmail.com",
        linkedin: "linkedin.com/",
        github: "github.com/akarshcodes",
        phone: "+6016-4194960"
      },
      color: "blue"
    },
    {
      name: "Anyi",
      role: "CTO & Co-Founder",
      image: '/images/founder2.png',
      bio: "Technical architect and security specialist. Leads the development of SentryNode OS Monitor and real-time threat detection systems.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["System Architecture", "Threat Intelligence", "API Security"],
      contact: {
        email: "anyiong22@gmail.com",
        github: "github.com/user0-0qwq",
        phone: "+6011-60672045"
      },
      color: "purple"
    },
    {
      name: "HooiQi",
      role: "CPO & Co-Founder",
      image: '/images/founder3.png',
      bio: "UI/UX designer and product manager. Focuses on creating intuitive, actionable security dashboards that SMEs can actually understand and use effectively.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["UI/UX Design", "Product Management", "User Research"],
      contact: {
        email: "hooiqi1003@gmail.com",
        github: "github.com/Hooiqi",
        linkedin: "linkedin.com/in/hooi-qi-gooi-625606339/",
        phone: "+6011-56968520"
      },
      color: "green"
    }
  ];

  const activeColors = colorVariants[teamMembers[activeMember].color];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Founders
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three Computer Science graduates united by a mission to secure Penang's digital future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const style = colorVariants[member.color];

            return (
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
                    ? `${style.borderActive} shadow-2xl ${style.shadow}`
                    : 'border-gray-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Profile Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                        e.target.style.display='none'; 
                        e.target.parentElement.classList.add('bg-gray-800');
                        e.target.parentElement.innerText = '[Image Missing]';
                    }}
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full ${style.softBg} ${style.text} text-sm font-semibold mt-2 border ${style.softBorder}`}>
                        <Briefcase className="h-4 w-4 mr-2" />
                        {member.role}
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full ${style.softBg} flex items-center justify-center border ${style.softBorder}`}>
                      <User className={`h-6 w-6 ${style.text}`} />
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{member.education.split('•')[0]}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${style.softBg} ${style.text} rounded-full text-xs font-medium border ${style.softBorder}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="flex space-x-4 pt-6 border-t border-gray-700">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={`mailto:${member.contact.email}`} 
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                    {member.contact.linkedin && (
                      <motion.a 
                        whileHover={{ scale: 1.2 }}
                        href={`https://${member.contact.linkedin}`} 
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    )}
                    {member.contact.github && (
                      <motion.a 
                        whileHover={{ scale: 1.2 }}
                        href={`https://${member.contact.github}`} 
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border ${activeColors.softBorder}`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {teamMembers[activeMember].name}
                  </h3>
                  <p className="text-gray-400 text-lg">{teamMembers[activeMember].bio}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    {teamMembers[activeMember].role}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Co-Founder</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Education & Details */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Background</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className={`h-5 w-5 ${activeColors.text} mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-300">Education</div>
                        <div className="text-gray-400">{teamMembers[activeMember].education}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 ${activeColors.text} mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-300">Location</div>
                        <div className="text-gray-400">Bayan Lepas, Penang</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className={`h-5 w-5 ${activeColors.text} mr-3 mt-1`} />
                      <div>
                        <div className="font-semibold text-gray-300">Joined</div>
                        <div className="text-gray-400">January 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className={`h-5 w-5 ${activeColors.text} mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-300">Email</div>
                        <a href={`mailto:${teamMembers[activeMember].contact.email}`} className="text-blue-400 hover:underline">
                          {teamMembers[activeMember].contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className={`h-5 w-5 ${activeColors.text} mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-300">Phone</div>
                        <div className="text-gray-400">{teamMembers[activeMember].contact.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className={`h-5 w-5 ${activeColors.text} mr-3`} />
                      <div>
                        <div className="font-semibold text-gray-300">Social</div>
                        <div className="flex space-x-3 mt-1">
                          {teamMembers[activeMember].contact.linkedin && (
                            <a href={`https://${teamMembers[activeMember].contact.linkedin}`} className="text-blue-400 hover:underline text-sm">
                              LinkedIn
                            </a>
                          )}
                          {teamMembers[activeMember].contact.github && (
                            <a href={`https://${teamMembers[activeMember].contact.github}`} className="text-blue-400 hover:underline text-sm">
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

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Want to Join Our Mission?</h3>
            <p className="text-xl mb-6 opacity-90">
              We're hiring passionate cybersecurity professionals in Penang.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;