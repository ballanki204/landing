import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-black text-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-20">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.p
          className="text-xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Canada’s Business Barter Exchange
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Barter your spare capacity unsold time idle inventory empty space to
          get the things you need.
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Barter what you have. Get what you need. Give what you can.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600 transition"
        >
          Get Started
        </motion.button>
      </div>

      {/* Right Image or Logo */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://barterpay.ca/wp-content/uploads/2025/03/BarterPay-Proudly-Canadian-WHITE1.svg"
          alt="BarterPay Logo"
          className="w-2/3 md:w-3/4 lg:w-2/3"
        />
      </motion.div>
    </section>
  );
}
