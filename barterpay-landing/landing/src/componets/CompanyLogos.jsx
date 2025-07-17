import { motion } from "framer-motion";

const logos = [
  "https://barterpay.ca/wp-content/uploads/2021/04/RCC-black.png",
  "https://barterpay.ca/wp-content/uploads/2021/04/restaurants-canada-black.png",
  "https://barterpay.ca/wp-content/uploads/2021/04/OCC-black.png",
  "https://barterpay.ca/wp-content/uploads/2021/04/imagine-canada-black.png",
  "https://barterpay.ca/wp-content/uploads/2021/04/global-payments-black.png",
  "https://barterpay.ca/wp-content/uploads/2021/05/start-up-can-blcak.png",
  "https://barterpay.ca/wp-content/uploads/2021/04/csga-black.png",
  "https://barterpay.ca/wp-content/uploads/2022/02/total-mom-inc-black.png",
];

export default function CompanyLogosSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Look Who’s In Our Corner
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses that trust BarterPay to grow their
            networks and save money through smarter trade.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600 transition"
          >
            Become a Partner
          </motion.button>
        </div>

        {/* Right Logos Section */}
        <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-pink-100 rounded-lg p-4 hover:bg-pink-400 transition"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-10 grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
