'use client';

import { cn } from '@/lib/utils';
import { IconExternalLink } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import { caseStudyCards } from '@/data';

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08, ease: [0.4, 0, 0.2, 1] },
  },
};

const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.16, ease: [0.4, 0, 0.2, 1] },
  },
};

export const CaseStudy = () => {
  return (
    <motion.section
      id="case-study-section"
      className="mt-48 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        id="case-study-heading"
        className="flex w-full flex-col items-center justify-start gap-8 lg:flex-row"
      >
        <motion.h2
          className="bg-primary rounded-lg px-2 text-4xl font-bold text-black shadow"
          variants={headingVariants}
        >
          Case Study
        </motion.h2>
        <motion.p
          className="text-text-primary w-[80%] text-center text-base font-normal lg:w-[60%] lg:text-left"
          variants={subheadingVariants}
        >
          Explore how our tailored marketing solutions have driven real results
          for our clients, from boosting sales to expanding brand reach and
          improving customer retention.
        </motion.p>
      </motion.div>
      <motion.div
        className="bg-surface mt-12 flex flex-col flex-wrap rounded-[40px] px-10 py-12 lg:grid lg:grid-cols-3"
        variants={containerVariants}
      >
        {caseStudyCards.map((card, idx) => (
          <motion.div
            key={card.id}
            id={card.id}
            className={cn(
              'flex flex-col gap-6 rounded-l-2xl border-b-2 border-black/15 bg-white p-6 text-xl font-semibold shadow-lg transition-shadow duration-300 lg:border-r-2 lg:border-b-0',
              idx === 1 && 'rounded-none pt-10 lg:pt-0 lg:pl-10',
              idx === 2 &&
                'rounded-l-none rounded-r-2xl border-b-0 pt-10 lg:border-r-0 lg:pt-0 lg:pl-10'
            )}
            variants={cardVariants}
          >
            <p className="h-full w-full leading-relaxed text-black">
              {card.text}
            </p>
            <div className="mt-2 flex items-center justify-start">
              <span className="sr-only">View case study details</span>
              <IconExternalLink
                className="text-primary border-primary hover:bg-primary focus:ring-primary size-8 cursor-pointer rounded-full border-2 bg-black p-1 shadow-md transition-colors duration-200 hover:text-black focus:ring-2 focus:outline-none"
                stroke={2}
                tabIndex={0}
                role="button"
                aria-label="View case study details"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
