import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-black z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          <img
            src="https://barterpay.ca/wp-content/uploads/2021/04/BP_Stacked_White.svg"
            alt="BarterPay Logo"
            className="h-10 mx-auto md:mx-0"
          />
        </h1>
        <div className="hidden md:flex space-x-6">
          {["Home", "How it Works", "Benefits", "About", "Contact"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-pink-500 transition">
                {item}
              </a>
            )
          )}
        </div>
        <FiMenu className="md:hidden text-2xl" onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="flex flex-col items-center bg-black space-y-4 py-4"
        >
          {["Home", "How it Works", "Benefits", "About", "Contact"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-pink-500 transition">
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
}
