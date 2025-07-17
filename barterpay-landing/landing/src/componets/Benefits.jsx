import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://barterpay.ca/wp-content/uploads/2021/03/BarterPay-HowitWorks-Loan.png"
            alt="Benefits of BarterPay"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose BarterPay?</h2>
          <p className="text-gray-400 mb-4">
            At BarterPay, we help businesses unlock hidden value through barter
            trade—allowing you to grow, save, and build valuable connections
            without spending cash.
          </p>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-pink-500 font-bold mr-2">✔</span>
              Increase your sales by trading your excess inventory or downtime.
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 font-bold mr-2">✔</span>
              Save cash by acquiring goods and services using trade credits.
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 font-bold mr-2">✔</span>
              Build a trusted business network through a secure, organized
              platform.
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 font-bold mr-2">✔</span>
              Access new customers from multiple industries.
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
