import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-x-hidden font-sans">
      
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 flex justify-center items-center bg-white text-blue-700 font-black rounded-full">
            D
          </span>
          <h1 className="text-2xl font-bold tracking-wide">Complaint Box</h1>
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <button className="px-3 py-2 border rounded-md border-white/50">Menu</button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-gray-300 transition">About</button>
          <button className="hover:text-gray-300 transition">Contact</button>
          <button className="cursor-pointer bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10 pb-20">
        
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight"
          >
            Speak Up. <br />
            Be Heard. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              Get Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 max-w-md"
          >
            Complaint Box lets you submit grievances, ask questions,
            and get responses from verified admins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button className="cursor-pointer px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition w-full sm:w-auto">
              Get Started
            </button>
            <button className="cursor-pointer px-6 py-3 bg-transparent border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto">
              Browse Queries
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/hero-illustration.svg"
            alt="People discussing complaints"
            className="w-full max-w-md sm:max-w-lg"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full bg-white/10 backdrop-blur-md py-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            ["3,500+", "Complaints resolved"],
            ["120+", "Organizations onboard"],
            ["10,000+", "Active users"],
            ["5,000+", "Queries posted"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 rounded-2xl py-6 shadow-lg border border-white/20"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">{num}</h2>
              <p className="text-gray-200 mt-1 text-sm sm:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
