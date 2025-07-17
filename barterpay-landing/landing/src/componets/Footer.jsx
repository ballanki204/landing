import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
        {/* Logo + Description */}
        <div>
          <img
            src="https://barterpay.ca/wp-content/uploads/2021/04/BP_Stacked_White.svg"
            alt="BarterPay Logo"
            className="h-10 mx-auto md:mx-0"
          />
          <p className="text-gray-500 mt-4 max-w-xs">
            Revolutionizing business through smart barter trade solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Quick Links</h3>
          {["Home", "How it Works", "Benefits", "About", "Contact"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-400 hover:text-pink-500 transition"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Social Media Icons */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BarterPay. All rights reserved.
      </div>
    </footer>
  );
}
