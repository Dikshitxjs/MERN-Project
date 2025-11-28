import { motion } from "framer-motion";
import Image1 from "./image.png"; // relative path
import CountUp from "react-countup";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#0C0F2D] text-white font-inter overflow-hidden">

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center bg-white text-blue-700 font-black rounded-full">
            D
          </span>
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">Complaint Box</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="hover:text-gray-300 transition">About</button>
          <button className="hover:text-gray-300 transition">Contact</button>
          <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>

        <button className="md:hidden border border-white/50 px-3 py-1 rounded-md">Menu</button>
      </nav>


      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-10 pt-10">

        {/* Left */}
        <div className="order-2 md:order-1 mt-8 md:mt-0">
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
            className="mt-4 text-gray-300 max-w-md text-sm sm:text-base"
          >
            A secure place to raise complaints and get verified responses from officials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex gap-4"
          >
            <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition font-semibold">
              Browse Queries
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <img
        src ={Image1}
            alt="People discussing complaints"
            className="w-64 sm:w-80 md:w-96 drop-shadow-2xl"
          />
        </motion.div>

      </div>

{/* Stats */}
<div className="bg-[#111432] mt-16 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-8">
    {[
      [1500, "Resolved", "+"],
      [20, "Organizations", "+"],
      [5000, "Users", "+"],
      [5000, "Queries", "+"]
    ].map(([value, label, suffix], i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-[#1B1E45] rounded-xl py-6 border border-white/10"
      >
        <h2 className="text-2xl font-bold text-blue-400">
          <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
        </h2>
        <p className="text-gray-300 mt-1 text-sm">{label}</p>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  );
}
