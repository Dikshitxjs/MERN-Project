import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VideoHero from "./assets/Video.mp4"; // Transparent video
import Image from './assets/image.png'
import LoginPage from "./LoginPage";
export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0C0F2D] text-white font-inter overflow-x-hidden">

      {/* Navbar */}
<nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 md:px-10">
  <div className="flex items-center gap-3">

    {/* Logo */}
    <span className="w-10 h-10 flex justify-center items-center bg-white rounded-full overflow-hidden">
      <img
        src={Image}
        alt="logo"
        className="w-7 h-7 object-contain"
      />
    </span>

    <h1 className="text-xl sm:text-2xl font-bold">Complaint Box</h1>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-8">
    <button
      onClick={() =>
        document.getElementById("about").scrollIntoView({ behavior: "smooth" })
      }
      className="hover:text-gray-300 transition"
    >
      About
    </button>

    <button className="hover:text-gray-300 transition">Contact</button>

    <button
      onClick={() => navigate("/LoginPage")}
      className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-lg font-semibold"
    >
      Login
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden border border-white/50 px-3 py-1 rounded-md"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    Menu
  </button>
</nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B1E45] border-t border-white/10 py-4 text-center space-y-4">
          <button
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            className="block w-full py-2 hover:text-blue-400"
          >
            About
          </button>
          <button className="block w-full py-2 hover:text-blue-400">Contact</button>
          <button
            onClick={() => navigate("/LoginPage")}
            className="block w-full py-2 hover:text-blue-400"
          >
            Login
          </button>
        </div>
      )}

    {/* Hero Section */}
<div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center px-5 md:px-10 pt-10 lg:pt-20 gap-10">

  {/* Video - comes first on mobile */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative w-full flex justify-center mb-6 md:mb-0 order-1 md:order-2"
  >
    <video
      src={VideoHero}
      autoPlay
      loop
      muted
      playsInline
      className="w-full max-w-md md:max-w-lg drop-shadow-2xl object-cover rounded-xl"
      style={{ backgroundColor: "transparent" }}
    />

    {/* Top Gradient */}
    <div
      className="absolute top-0 left-0 w-full"
      style={{
        height: "120px",
        background: "linear-gradient(to bottom, #0C0F2D 0%, rgba(12,15,45,0) 100%)",
        pointerEvents: "none",
      }}
    />

    {/* Bottom Gradient */}
    <div
      className="absolute bottom-0 left-0 w-full"
      style={{
        height: "160px",
        background: "linear-gradient(to top, #0C0F2D 0%, rgba(12,15,45,0.25) 30%, rgba(12,15,45,0.1) 60%, rgba(12,15,45,0) 100%)",
        pointerEvents: "none",
      }}
    />

    {/* Left Gradient */}
    <div
      className="absolute top-0 left-0 h-full"
      style={{
        width: "50px",
        background: "linear-gradient(to right, #0C0F2D 0%, rgba(12,15,45,0) 100%)",
        pointerEvents: "none",
      }}
    />

    {/* Right Gradient */}
    <div
      className="absolute top-0 right-0 h-full"
      style={{
        width: "80px",
        background: "linear-gradient(to left, #0C0F2D 0%, rgba(12,15,45,0) 100%)",
        pointerEvents: "none",
      }}
    />
  </motion.div>

  {/* Text */}
  <div className="text-center md:text-left order-2 md:order-1">
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
    >
      Speak Up. Be Heard.
      <br />
      <span className="text-blue-400">Get Solutions.</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-4 text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base"
    >
      A secure place to raise complaints and receive verified responses from officials.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3"
    >
      <button
        onClick={() => navigate("/LoginPage")}
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold transition"
      >
        Get Started
      </button>
      <button
        onClick={() => navigate("/LoginPage")}
        className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition font-semibold"
      >
        Browse Queries
      </button>
    </motion.div>
  </div>
</div>



      {/* Stats Section */}
      <div className="bg-[#111432] mt-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            [1500, "Resolved", "+"],
            [20, "Organizations", "+"],
            [5000, "Users", "+"],
            [5000, "Queries", "+"],
          ].map(([value, label, suffix], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B1E45] rounded-xl py-6 border border-white/10 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                <CountUp end={value} duration={2.5} suffix={suffix} />
              </h2>
              <p className="text-gray-300 mt-1 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-[#0C0F2D] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Our Complaint System
          </motion.h2>

          <motion.p
            className="text-gray-300 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            We provide a transparent communication channel to ensure better services and faster resolutions.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {[
              ["Secure & Confidential", "Your complaints are protected and only accessible to authorized officials."],
              ["Track Anytime", "Monitor your progress from submission to resolution."],
              ["Quick Actions", "Ensuring faster responses and improved outcomes."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-[#1B1E45] border border-white/10 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090B20] text-gray-300 py-10 mt-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

          <div>
            <h2 className="text-xl font-bold text-white">Complaint Box</h2>
            <p className="mt-3 text-sm opacity-80">
              Speak up for change — together we build a safer community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm opacity-80">Email: support@complaintbox.com</p>
            <p className="text-sm opacity-80 mt-1">Phone: +977-9812345678</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} Complaint Box — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
