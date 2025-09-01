'use client';
import { cn } from '@/lib/utils';
import {
  IconBrandFacebook,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconSparkles,
} from '@tabler/icons-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const footerSectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 + i * 0.13,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const Footer = () => {
  return (
    <motion.footer
      className="bg-footer-bg text-text-primary mt-16 w-full rounded-t-[40px] px-6 py-16"
      aria-label="Site footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
        },
      }}
    >
      <motion.section
        id="footer-header-section"
        className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0"
        aria-labelledby="footer-logo"
        custom={0}
        variants={footerSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          id="logo"
          className="ml-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            href="/"
            id="footer-logo"
            aria-label="Go to WizardZ homepage"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <IconSparkles
              size={28}
              aria-hidden="true"
              className="text-primary"
            />
            <span>WizardZ</span>
          </Link>
        </motion.div>

        <motion.nav
          aria-label="Footer navigation"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          <ul className="flex flex-col items-center justify-center gap-4 font-semibold lg:flex-row">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
            ].map((item, idx) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.22 + idx * 0.07,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="hover:text-primary focus:ring-primary rounded transition-all duration-200 hover:underline focus:ring-2 focus:outline-none"
                  tabIndex={0}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Social Links */}
        <motion.ul
          className="mt-2 flex gap-3 text-3xl lg:mt-0"
          aria-label="Social media links"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href="https://facebook.com/wizardzmarketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WizardZ on Facebook"
              className="hover:text-footer-link-hover focus:ring-primary rounded transition-colors focus:ring-2 focus:outline-none"
            >
              <IconBrandFacebook aria-hidden="true" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href="https://instagram.com/wizardzmarketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WizardZ on Instagram"
              className="hover:text-footer-link-hover focus:ring-primary rounded transition-colors focus:ring-2 focus:outline-none"
            >
              <IconBrandInstagramFilled aria-hidden="true" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.36, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href="https://linkedin.com/company/wizardzmarketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WizardZ on LinkedIn"
              className="hover:text-footer-link-hover focus:ring-primary rounded transition-colors focus:ring-2 focus:outline-none"
            >
              <IconBrandLinkedinFilled aria-hidden="true" />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.div
        id="contact-links-form"
        className="flex flex-col px-4 py-10 lg:grid lg:grid-cols-[30%_1fr]"
        custom={1}
        variants={footerSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          id="contact-details"
          className="flex flex-col items-center justify-center gap-5 text-lg font-normal lg:items-start lg:justify-start"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-2xl font-bold" id="footer-contact-heading">
            Contact us:
          </h3>
          <address className="text-footer-link flex w-[90%] flex-col items-center justify-center gap-4 not-italic lg:items-start lg:justify-start">
            <motion.a
              href="mailto:hello@wizardzmarketing.com"
              className="hover:text-footer-link-hover focus:ring-primary rounded transition-colors focus:ring-2 focus:outline-none"
              aria-label="Email WizardZ"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              Email: hello@wizardzmarketing.com
            </motion.a>
            <motion.a
              href="tel:+14155552671"
              className="hover:text-footer-link-hover focus:ring-primary rounded transition-colors focus:ring-2 focus:outline-none"
              aria-label="Call WizardZ"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.22,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              Phone: +1 (415) 555-2671
            </motion.a>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.26,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              Address: 500 Market St, San Francisco, CA 94105, USA
            </motion.span>
          </address>
        </motion.div>

        <motion.div
          id="form"
          className="bg-footer-bg-dark mt-4 rounded-xl lg:mt-0"
          style={{ backgroundColor: 'var(--footer-bg-dark)' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          <form
            action="https://formspree.io/f/mnqkzjzv"
            method="POST"
            className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-xl font-medium md:flex-row"
            aria-labelledby="footer-contact-heading"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <motion.input
              id="footer-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email address"
              className={cn(
                'border-footer-border',
                'focus:ring-primary',
                'bg-surface',
                'text-text-secondary',
                'w-full',
                'rounded-lg',
                'border-2',
                'px-4',
                'py-2',
                'placeholder-gray-500',
                'transition-all',
                'outline-none',
                'focus:ring-2',
                'md:w-[70%]'
              )}
              aria-label="Enter your email address to subscribe"
              maxLength={100}
              inputMode="email"
              spellCheck={false}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.22,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
            <motion.button
              type="submit"
              className="bg-primary focus:ring-primary text-text-secondary w-full rounded-lg py-2.5 transition-all hover:scale-[1.02] hover:bg-white focus:ring-2 focus:outline-none md:flex-1"
              aria-label="Subscribe to newsletter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.26,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              Talk with Us
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <motion.section
        id="footer-end"
        className="border-footer-border flex flex-col items-center justify-between border-t-[0.5px] py-5 text-base font-medium lg:flex-row"
        custom={2}
        variants={footerSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span
          className="text-text-primary/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
        >
          &copy; {new Date().getFullYear()} WizardZ Marketing – Empowering
          Brands with Creativity
        </motion.span>
        <motion.span
          className="text-text-primary/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          built by{' '}
          <Link
            href="https://asius.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-footer-link-hover focus:ring-primary text-primary rounded underline transition-colors outline-none focus:ring-2"
            aria-label="Bobby Tiwari portfolio"
          >
            asius.in
          </Link>
        </motion.span>
      </motion.section>
    </motion.footer>
  );
};
