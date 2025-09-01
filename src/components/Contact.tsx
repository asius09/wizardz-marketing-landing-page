'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Use correct typing for Variants and Easing
const ease: [number, number, number, number] = [0.4, 0, 0.2, 1];

// Reduced durations and stagger for snappier entrance
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease,
      when: 'beforeChildren',
      staggerChildren: 0.09,
    },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, delay: 0.07, ease },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, delay: 0.13, ease },
  },
};

export const Contact = () => {
  return (
    <motion.section
      id="contact-section"
      className="my-24 w-full"
      aria-labelledby="contact-heading"
      tabIndex={-1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="contacts bg-surface flex w-full items-center justify-between rounded-[40px] px-12 py-5"
        role="region"
        aria-label="Contact us"
        variants={containerVariants}
      >
        <motion.div
          className="flex w-full flex-col lg:w-1/2"
          variants={leftVariants}
        >
          <motion.h2
            id="contact-heading"
            className="text-text-secondary text-4xl font-bold"
            tabIndex={0}
            initial={false}
            animate={false}
          >
            Let&apos;s make things happen
          </motion.h2>
          <motion.p
            className="text-text-secondary my-5 text-xl font-medium"
            tabIndex={0}
            initial={false}
            animate={false}
          >
            Ready to elevate your brand and reach new customers? Our team is
            here to help you achieve your goals and drive real results.
          </motion.p>
          <motion.button
            className="bg-primary hover:bg-primary/90 focus:ring-primary/60 w-full rounded-lg px-4 py-4 text-2xl font-semibold text-black shadow-md shadow-black/30 transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none lg:w-[60%] dark:shadow-black/60"
            aria-label="Get your free proposal"
            type="button"
            variants={buttonVariants}
          >
            Get your free proposal
          </motion.button>
        </motion.div>
        <motion.div
          className="flex w-[40%] justify-end lg:block"
          aria-hidden="true"
          variants={rightVariants}
        >
          <div className="relative aspect-[4/3] w-full max-w-md">
            <Image
              src="/assets/contact-page.webp"
              alt=""
              fill
              className="rounded-[20px] object-cover"
              priority
              sizes="(max-width: 1024px) 60vw, 400px"
              role="presentation"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
