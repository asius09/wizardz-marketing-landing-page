'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Parent container animation for staggered children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// Each brand animates in one by one
const brandVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export const Brands = () => {
  const brands = [
    {
      src: '/assets/logos/amazon-logo-white.svg',
      alt: 'amazon logo',
    },
    {
      src: '/assets/logos/dribble-logo-white.svg',
      alt: 'dribble logo',
    },
    {
      src: '/assets/logos/notion-logo-white.svg',
      alt: 'notion logo',
    },
    {
      src: '/assets/logos/netflix.svg',
      alt: 'netflix logo',
    },
    {
      src: '/assets/logos/zoom-logo.svg',
      alt: 'zoom logo',
    },
  ];
  return (
    <motion.section
      id="brand-section"
      className="flex w-full flex-wrap items-center justify-center gap-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {brands.map((brand) => (
        <motion.div key={brand.alt} variants={brandVariants}>
          <Image
            className="w-36"
            src={brand.src}
            alt={brand.alt}
            width={144}
            height={48}
            style={{ width: '9rem', height: 'auto' }}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};
