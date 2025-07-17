import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-4 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-6"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-400">
        At BarterPay, we're passionate about helping businesses grow through
        smarter trading. Our platform connects businesses across industries,
        helping them unlock new value through barter exchanges.
      </p>
    </section>
  );
}
