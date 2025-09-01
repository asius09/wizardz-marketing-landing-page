'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      className="relative h-dvh w-full lg:grid lg:h-screen lg:grid-cols-[40%_1fr]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.section
        id="headers-heading-text"
        className="text-text-primary flex h-full w-full flex-col pt-16"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.h2
          className="text-4xl font-bold lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Navigating the digital landscape for success
        </motion.h2>
        <motion.div
          id="headers-image"
          className="mt-8 flex justify-center lg:hidden"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image
            src="/assets/wizardz-hero.svg"
            alt="hero image"
            width={600}
            height={400}
            className="max-h-[40vh] w-auto bg-center bg-no-repeat object-cover"
            priority
          />
        </motion.div>
        <motion.p
          className="mt-4 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of servies inclunding SEO, PFC, social media marketing
          and content creation.
        </motion.p>
        <motion.button
          className="word-spacing bg-surface text-text-secondary mt-10 w-[100%] rounded-lg py-4 text-lg font-semibold lg:w-[60%]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          Book a consultation
        </motion.button>
      </motion.section>

      <motion.section
        id="headers-image"
        className="hidden h-full bg-[url('/assets/Wizardz-hero.svg')] bg-center bg-no-repeat object-cover lg:block"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
      ></motion.section>
    </motion.div>
  );
};
