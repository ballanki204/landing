import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-16 px-4 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        whileInView={{ scale: 1 }}
        initial={{ scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        Ready to Start?
      </motion.h2>
      <p className="text-gray-400 mb-6">
        Join the future of smart trading today.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
      >
        Contact Us
      </motion.button>
    </section>
  );
}
