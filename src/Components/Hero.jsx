import React, { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/heroBanner.png";
import { IoTimeSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import image from "../assets/text.svg";

function Hero() {
  useEffect(() => {
    const menu = document.getElementById("menu");
    const closeMenu = document.getElementById("close-menu");
    const openMenu = document.getElementById("open-menu");

    const openHandler = () => {
      menu?.classList.remove("max-md:w-0");
      menu?.classList.add("max-md:w-full");
    };

    const closeHandler = () => {
      menu?.classList.remove("max-md:w-full");
      menu?.classList.add("max-md:w-0");
    };

    openMenu?.addEventListener("click", openHandler);
    closeMenu?.addEventListener("click", closeHandler);

    return () => {
      openMenu?.removeEventListener("click", openHandler);
      closeMenu?.removeEventListener("click", closeHandler);
    };
  }, []);

  // Variants for framer motion animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <main className="flex items-center flex-col justify-between">
        {/* NAVBAR */}
        <motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4"
>
  <a href="https://flygrad.tech">
    <motion.img
      src={image}
      alt="FlyGrad Logo"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
  </a>

  <div
    id="menu"
    className="max-md:absolute max-md:bg-black/50 max-md:h-[785px] max-md:w-0 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 font-medium"
  >
    {[
      { name: "Home", href: "/" },
      { name: "gradWhisper", href: "https://chat.flygrad.tech/" },
      { name: "Team", href: "#team" },
      { name: "testiominal", href: "#testiominal" },
      { name: "fAQ", href: "#FAQ" },
    ].map((link, i) => (
      <motion.a
        key={i}
        href={link.href}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={i}
        whileHover={{ scale: 1.1, color: "#6366f1" }}
      >
        {link.name}
      </motion.a>
    ))}

    <button
      aria-label="close menu"
      className="size-6 md:hidden"
      id="close-menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  </div>

  <motion.button
    className="max-md:hidden px-6 py-2 bg-white text-black hover:bg-gray-200 transition active:scale-95 rounded-full border border-gray-600"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Started
  </motion.button>

  <button aria-label="menu burger" className="size-6 md:hidden" id="open-menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-align-justify"
    >
      <path d="M3 12h18M3 18h18M3 6h18" />
    </svg>
  </button>
</motion.nav>


        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center w-full mt-32">
          <motion.h1
            className="text-4xl md:text-[40px]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            What do you want to create?
          </motion.h1>

          <motion.p
            className="text-base mt-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Create something amazing with one simple message.
          </motion.p>

          <motion.div
            className="max-w-xl w-full bg-white rounded-xl overflow-hidden mt-4 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <textarea
              className="w-full p-3 pb-0 resize-none outline-none bg-transparent text-black"
              placeholder="Tell us about your idea"
              rows="3"
            ></textarea>
            <div className="flex items-center justify-between pb-3 px-3">
              <button className="flex items-center justify-center bg-gray-500 p-1 rounded-full size-6">
                +
              </button>
              <motion.button
                className="flex items-center justify-center p-1 rounded size-6 bg-indigo-600 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </div>
          </motion.div>

          {/* FAQ SUGGESTIONS */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8 text-slate-400"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {["How do I write a resume or cover letter?",
              "How do I improve my writing skills?",
              "Can you translate something for me?",
              "How can I be more productive?"].map((q, i) => (
              <motion.p
                key={i}
                className="cursor-pointer"
                variants={fadeUp}
                whileHover={{ color: "#6366f1", scale: 1.05 }}
              >
                {q}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Hero;
