'use client';

import { cn } from '@/lib/utils';
import { IconArrowNarrowUp } from '@tabler/icons-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const caseStudyCards = [
  {
    id: 'case-study-card1',
    extraClass: '',
    text: 'How we helped an e-commerce brand increase their sales by 40% through targeted social media campaigns and conversion optimization.',
  },
  {
    id: 'case-study-card2',
    extraClass: 'pt-10 lg:pl-10 lg:pt-0',
    text: 'Discover how a SaaS startup reduced customer churn by 25% with our personalized email marketing automation and onboarding strategies.',
  },
  {
    id: 'case-study-card3',
    extraClass: 'pt-10 lg:pl-10 lg:pt-0 border-b-0 lg:border-r-0',
    text: 'See how a local business expanded their reach and doubled their leads in 3 months using our SEO and content marketing solutions.',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] },
  },
};

const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.18, ease: [0.4, 0, 0.2, 1] },
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
          className="text-text-secondary bg-primary rounded-lg px-2 text-4xl font-bold"
          variants={headingVariants}
        >
          Case Study
        </motion.h2>
        <motion.p
          className="w-[80%] text-center text-base font-normal text-white lg:w-[60%] lg:text-left"
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
              'text-text-secondary flex flex-col gap-4 border-b-2 border-black bg-white/80 p-4 text-xl font-medium shadow-md transition-shadow duration-300 hover:bg-white hover:shadow-xl lg:border-r-2 lg:border-b-0',
              card.extraClass,
              idx === 2 && 'border-b-0 lg:border-r-0'
            )}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.12)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="h-full w-[90%]">{card.text}</p>
            <Link
              href="#"
              className={cn(
                'flex items-center justify-start text-lg font-medium text-slate-600 transition-colors duration-200 hover:underline'
              )}
            >
              <span>Learn more</span>
              <IconArrowNarrowUp className={cn('ml-1 size-6 rotate-45')} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
