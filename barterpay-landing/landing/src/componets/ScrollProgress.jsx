import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-pink-500 z-[999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
