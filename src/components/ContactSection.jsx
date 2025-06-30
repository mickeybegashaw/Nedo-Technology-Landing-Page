"use client";

import { motion } from "motion/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">
          We'd love to hear from you. Fill out the form or find us on the map!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form + Info */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <form
            className="bg-white/5 p-8 rounded-2xl shadow-xl space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full"
            >
              Send Message
            </button>
          </form>

         
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="overflow-hidden shadow-xl h-[400px] md:h-auto rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <iframe
            title="weVenture Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.5897208021665!2d38.7652158684738!3d8.999727069717036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8543b328f965%3A0x7f7d093b55e73a57!2sweVenture%20Hub!5e1!3m2!1sen!2set!4v1751295342949!5m2!1sen!2set"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[65%] border-0"
            allowFullScreen
          ></iframe>
           {/* Contact Details */}
          <div className="space-y-4 mt-5 text-gray-300 px-2">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400" />
              <span>+251 97 907 6934</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400" />
              <span>nedotechnologysolutions@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;
