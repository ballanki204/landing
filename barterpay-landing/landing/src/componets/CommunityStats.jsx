import { motion } from "framer-motion";

const stats = [
  { title: "Businesses Joined", value: "1,200+" },
  { title: "Trades Completed", value: "15,000+" },
  { title: "Value Traded", value: "$25M+" },
  { title: "Cities Covered", value: "50+" },
];

export default function CommunityStats() {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        BarterPay Community Stats
      </motion.h1>

      <motion.p
        className="text-gray-400 mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Celebrating our growing community and the impact we’re creating together
        through smarter trade.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition"
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-pink-500 text-3xl font-bold mb-2">
              {item.value}
            </div>
            <div className="text-gray-300">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
