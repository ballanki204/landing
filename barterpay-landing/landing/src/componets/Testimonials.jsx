import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            className="bg-black border border-gray-700 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-400">
              "BarterPay helped us reduce costs significantly while expanding
              our network!"
            </p>
            <p className="mt-4 text-pink-500 font-semibold">
              - Business Owner {num}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
