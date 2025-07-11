"use client";

import { motion } from "motion/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-gray-300 pt-20 pb-10 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Company Info */}
        <div>
          <Image
            src={"/NedoWhiteLogo.png"}
            alt="logo"
            width={140}
            height={40}
            className="w-20 mdw-24 object-contain"
          />{" "}
          <p className="text-base mt-4">
            Building digital solutions for Ethiopia and beyond. Passion.
            Innovation. Impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#culture" className="hover:text-white">
                Culture
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="text-base space-y-2">
            <li>Phone: +251 97 907 6934 </li>
            <li>Email: nedotechnologysolutions@gmail.com</li>
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@nedo_technology?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/company/nedo-technology-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/nedo_technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="text-center text-base text-gray-500 mt-12 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Nedo Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
