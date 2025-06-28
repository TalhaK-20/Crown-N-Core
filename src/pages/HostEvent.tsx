// src/pages/HostEvent.tsx

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import eventHero from "../assets/img/host-event/event-hero.jpg";
import bridal from "../assets/img/host-event/bridal.jpg";
import cooking from "../assets/img/host-event/cooking.jpg";
import birthday from "../assets/img/host-event/birthday.jpg";
import corporate from "../assets/img/host-event/corporate.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

const HostEvent: React.FC = () => {
  return (
    <div className="font-neue-regular text-gray-800 antialiased">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative h-[600px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={eventHero}
          alt="Host Your Event"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="mb-4 text-6xl font-ghania text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
          >
            Where Wellness Meets Celebration
          </motion.h1>
          <motion.p
            className="max-w-2xl text-xl font-ezra-medium text-gray-200"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Host unforgettable events in a one-of-a-kind space that nourishes the body, mind, and soul.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Content Sections Container */}
      <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-20">

        {/* The Space */}
        <motion.section variants={fadeInUp} className="py-16 px-8 bg-white text-center">
          <motion.h2
            className="mb-6 text-4xl font-neue-bold text-gray-900"
            whileHover={{ color: '#2563EB' }}
            transition={{ duration: 0.3 }}
          >
            A Modern Venue With Heart
          </motion.h2>
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-neue-medium"
          >
            Our beautiful kitchen and gathering space blends style, comfort, and function—perfect for small events of up to 20 guests.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[bridal, cooking, birthday, corporate].map((src, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg"
                variants={fadeInUp}
              >
                <motion.img
                  src={src}
                  alt="event preview"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Event Types */}
        <motion.section variants={fadeInUp} className="py-16 px-8 bg-gray-100 text-center">
          <motion.h2 className="mb-8 text-3xl font-neue-bold text-gray-800">Perfect for Any Occasion</motion.h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Birthday Parties',
              'Bridal Showers',
              'Cooking & Nutrition Classes',
              'Corporate Events & Retreats',
              "Friends' Nights & Spa Days",
            ].map((type, i) => (
              <motion.div
                key={i}
                className="rounded-lg bg-white p-6 shadow-md"
                whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-ezra-medium text-xl text-gray-700">{type}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Wellness Add-Ons */}
        <motion.section variants={fadeInUp} className="py-16 px-8 text-center">
          <motion.h2 className="mb-6 text-3xl font-neue-bold text-gray-900">Wellness Add-Ons for a Truly Rejuvenating Experience</motion.h2>
          <motion.ul className="mx-auto max-w-lg space-y-4 text-lg font-neue-medium">
            {[
              'Infrared Sauna Sessions',
              'Cryotherapy Chamber',
              'Red Light Therapy',
              'Hair, Skin & Nail Services (Customizable)',
              'Private Relaxation Area Access',
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="relative pl-6 before:absolute before:left-0 before:top-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-blue-600"
                whileHover={{ scale: 1.02, color: '#2563EB' }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Packages */}
        <motion.section variants={fadeInUp} className="py-16 px-8 bg-gray-100 text-center">
          <motion.h2 className="mb-4 text-3xl font-neue-bold text-gray-800">Customizable Packages to Fit Your Vision</motion.h2>
          <motion.p className="mx-auto mb-12 max-w-2xl text-lg font-neue-medium">
            Flexible event packages starting at <span className="font-ghania text-2xl text-blue-600">$XXX</span>.
          </motion.p>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: 'Essentials', desc: 'Space rental + use of kitchen' },
              { title: 'Wellness Social', desc: 'Includes space, sauna, cryo + light refreshments' },
              { title: 'Total Indulgence', desc: 'Add spa & salon services, catered meals, and more' },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                className="rounded-lg bg-white p-8 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0px 25px 40px rgba(0,0,0,0.25)' }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-2xl font-neue-bold text-gray-900">{pkg.title}</h3>
                <p className="font-neue-medium text-gray-700">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Booking CTA */}
        <motion.section variants={fadeInUp} className="py-16 px-8 text-center">
          <motion.h2 className="mb-6 text-3xl font-neue-bold text-gray-900">Ready to Elevate Your Next Event?</motion.h2>
          <motion.p className="mx-auto mb-8 max-w-lg text-lg font-neue-medium">
            Let us help you design an event that feels as good as it looks.
          </motion.p>
          <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {[
              { label: 'Call to Book', color: 'blue' },
              { label: 'Schedule a Tour', color: 'green' },
              { label: 'Inquire About Packages', color: 'pink' },
            ].map((btn, i) => (
              <motion.button
                key={i}
                className={`rounded-lg px-8 py-4 text-lg font-neue-bold text-white shadow-lg bg-${btn.color}-600`}
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section variants={fadeInUp} className="bg-gray-100 py-16 px-8 text-center">
          <motion.h2 className="mb-8 text-3xl font-neue-bold text-gray-800">What Our Guests Are Saying</motion.h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              "“Absolutely stunning venue! The spa add-ons made our bridal shower unforgettable.” – Sarah J.",
              "“Everything was smooth and luxurious. Highly recommend!” – Michael T.",
              "“It felt like a mini-retreat. My team left feeling so refreshed.” – Priya N.",
            ].map((quote, idx) => (
              <motion.blockquote
                key={idx}
                className="italic font-ezra-medium text-gray-700"
                whileInView={{ opacity: [0, 1], x: [-30, 0] }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
              >
                {quote}
              </motion.blockquote>
            ))}
          </div>
        </motion.section>

      </motion.div>

      <Footer />
    </div>
  );
};

export default HostEvent;