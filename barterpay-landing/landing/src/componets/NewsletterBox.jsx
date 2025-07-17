import { motion } from "framer-motion";

export default function NewsletterBox() {
  return (
    <section className="bg-black py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-10 text-center border border-gray-800"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay in the Loop
        </motion.h2>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and receive updates on new opportunities,
          community success stories, and barter insights.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
