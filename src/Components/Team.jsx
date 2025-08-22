import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Zarrin Fariha",
    role: "Marketing Lead",
    bio: "CEO, Founder.",
    image: "https://i.postimg.cc/5yZkBcm1/Screenshot-from-2025-08-19-15-15-57.png",
    email: "alice@example.com",
    whatsapp: "15551234561",
  },
  {
    name: "Azmain Mahtab",
    role: "Website developer, UI designer, AI developer.",
    bio: "Loves developing.",
    image: "https://i.postimg.cc/J4yZN9sD/Whats-App-Image-2025-08-19-at-11-10-32-PM.jpg",
    email: "azmain.2005.mahtab@gmail.com",
    whatsapp: "01905151803",
  },
  {
    name: "Fairooz Binta Kabir",
    role: "Advisor",
    bio: "Designs intuitive and user-friendly interfaces.",
    image: "https://i.postimg.cc/nrK8gdzv/Whats-App-Image-2025-08-19-at-10-31-46-PM.jpg",
    email: "clara@example.com",
    whatsapp: "15551234563",
  },
  {
    name: "Abdullah Al Abir",
    role: "Developer",
    bio: "MSE, RUET.",
    image: "https://i.postimg.cc/XNT2Dbw6/Whats-App-Image-2025-08-19-at-00-11-48-cf403f61.pngg",
    email: "david@example.com",
    whatsapp: "15551234564",
  },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <div id="team" className="flex flex-col items-center text-center mt-20 bg-gray-900 bg-opacity-50 pb-20">
      <hr className="w-full max-w-5xl border-t border-gray-500 my-8" />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-white"
      >
        Meet Our People
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-3/5 mb-14 text-white text-sm"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-6 items-center justify-center"
      >
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: "1deg" }}
            className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-2xl shadow-lg cursor-pointer hover:border-white hover:bg-black transition-all duration-300"
          >
            <img
              className="w-24 h-24 rounded-full object-cover shadow-md"
              src={member.image}
              alt={member.name}
            />
            <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
              {member.name}
            </h2>
            <p className="text-gray-500 group-hover:text-white/80">{member.role}</p>
            <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              {member.bio}
            </p>

            <div className="flex items-center space-x-6 mt-6 text-gray-500 group-hover:text-white">
              <a href={`mailto:${member.email}`} className="hover:scale-110 transition-transform" aria-label="Send Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4z" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48C18.29 1.25 15.26 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.61 6.01L0 24l6.15-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.26-1.25-6.29-3.48-8.52zM12 21.82c-1.91 0-3.77-.51-5.39-1.47l-.39-.23-3.65.96.98-3.56-.25-.37A9.8 9.8 0 0 1 2.18 12c0-5.42 4.4-9.82 9.82-9.82 2.62 0 5.09 1.02 6.94 2.87A9.74 9.74 0 0 1 21.82 12c0 5.42-4.4 9.82-9.82 9.82z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
