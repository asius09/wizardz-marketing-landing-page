'use client';

import { cn } from '@/lib/utils';
import { IconArrowNarrowUp } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const serviceCards = [
  {
    id: 'card1',
    title: 'Search Engine Optimization',
    img: 'https://maxbuzz.agency/services/01.svg',
    bg: 'bg-transparent',
    titleBg: 'bg-[#b9ff66]',
    iconColor: 'text-[#b9ff66]',
    iconBg: 'bg-white',
    iconText: 'text-[#b9ff66]',
  },
  {
    id: 'card2',
    title: 'Pay per click advertising',
    img: 'https://maxbuzz.agency/services/02.svg',
    bg: 'bg-surface',
    titleBg: 'bg-white',
    iconColor: 'text-black',
    iconBg: 'bg-white',
    iconText: 'text-black',
  },
  {
    id: 'card3',
    title: 'E-mail marketing',
    img: 'https://maxbuzz.agency/services/04.svg',
    bg: 'bg-surface',
    titleBg: 'bg-white',
    iconColor: 'text-black',
    iconBg: 'bg-white',
    iconText: 'text-black',
  },
  {
    id: 'card4',
    title: 'Social media marketing',
    img: 'https://maxbuzz.agency/services/03.svg',
    bg: 'bg-transparent',
    titleBg: 'bg-[#b9ff66]',
    iconColor: 'text-[#b9ff66]',
    iconBg: 'bg-white',
    iconText: 'text-[#b9ff66]',
  },
];

// Animation variants for the cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.12 + i * 0.13,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const Service = () => {
  return (
    <motion.section
      className="my-32"
      id="services-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Service Section Heading */}
      <motion.div
        id="service-section-heading"
        className="flex w-full flex-col items-center justify-start gap-8 lg:flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.h2
          className="rounded-lg bg-[#b9ff66] px-2 text-4xl font-bold text-black"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          Services
        </motion.h2>
        <motion.p
          className="w-[80%] text-center text-base font-normal text-white lg:w-[60%] lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          Elevate your brand with tailored SEO, PPC, email, and social media
          marketing for real growth.
        </motion.p>
      </motion.div>

      {/* Cards Containers */}
      <section className="mt-12 flex flex-wrap gap-10 pb-12 lg:grid lg:grid-cols-2">
        {serviceCards.map((card, i) => (
          <motion.div
            key={card.id}
            id={card.id}
            className={cn(
              'border-surface grid h-72 grid-cols-2 rounded-[40px] border-2 p-6 shadow-[0_20px_0_rgba(242,242,242,1)]',
              card.bg
            )}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={i}
          >
            <div className="flex flex-col justify-between py-4">
              <h2
                className={cn(
                  'rounded-md p-1 text-4xl font-semibold text-black',
                  card.titleBg
                )}
              >
                {card.title}
              </h2>
              <a
                className={cn(
                  'flex items-center justify-start gap-2 text-lg font-medium',
                  card.iconText
                )}
                href="#"
              >
                <IconArrowNarrowUp
                  className={cn(
                    'ri-arrow-right-up-line flex h-12 w-12 rotate-45 items-center justify-center rounded-full p-2 text-2xl',
                    card.iconBg,
                    card.iconText
                  )}
                />
                Learn More
              </a>
            </div>
            {/* Image Part */}
            <div className="flex h-full items-center justify-center">
              <Image src={card.img} alt={card.title} width={120} height={120} />
            </div>
          </motion.div>
        ))}
      </section>
      {/* Cards Containers Ends */}
    </motion.section>
  );
};
