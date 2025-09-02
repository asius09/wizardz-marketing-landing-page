'use client';

import Link from 'next/link';
import { IconMenu4, IconMinus, IconSparkles } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { sectionLinks } from '@/data';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 flex w-full items-center justify-between pt-4">
      <motion.div
        id="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link
          href="/"
          id="footer-logo"
          aria-label="Go to WizardZ homepage"
          className="text-text-primary flex items-center gap-2 text-2xl font-bold"
        >
          <motion.span
            initial={{ rotate: -30, scale: 0.7 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
          >
            <IconSparkles
              size={28}
              aria-hidden="true"
              className="text-primary"
            />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            WizardZ
          </motion.span>
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <ul
        id="nav-bar-menu"
        className={cn(
          'hidden text-xl font-medium lg:relative lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:bg-transparent lg:p-0 lg:text-white'
        )}
      >
        {sectionLinks.map(({ label, href }, idx) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.07, duration: 0.3 }}
            className="hover:text-primary text-text-primary cursor-pointer underline-offset-6 hover:underline"
          >
            <Link href={href}>{label}</Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2 + sectionLinks.length * 0.07,
            duration: 0.3,
          }}
        >
          <button
            type="button"
            aria-label="Request a quote"
            className={cn(
              'px-4 py-2 lg:px-6 lg:py-2',
              'lg:border-surface border-2 border-black',
              'text-text-primary',
              'rounded-lg font-semibold shadow-md',
              'transition-all duration-200',
              'hover:bg-surface hover:text-text-secondary',
              'focus:ring-primary focus:ring-2 focus:ring-offset-2 focus:outline-none'
            )}
          >
            Request a Quote
          </button>
        </motion.li>
      </ul>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            className="fixed inset-0 z-40 flex items-stretch lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => setMenuOpen(false)}
            style={{ touchAction: 'none' }}
          >
            <motion.nav
              id="nav-bar-menu"
              className={cn(
                'fixed top-0 right-0 z-50 h-full w-[78vw] max-w-[350px] min-w-[220px]',
                'flex flex-col gap-7 px-8 py-16',
                'border-l border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl',
                'text-text-primary text-xl font-semibold',
                'glass-nav'
              )}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 18,
                mass: 0.7,
              }}
              onClick={(e) => e.stopPropagation()}
              role="menu"
              aria-label="Mobile Navigation"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                borderTopLeftRadius: '1.5rem',
                borderBottomLeftRadius: '1.5rem',
              }}
            >
              <ul className="flex flex-col gap-7">
                <AnimatePresence mode="wait">
                  {sectionLinks.map(({ href, label }, idx) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, x: 48 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 48 }}
                      transition={{
                        type: 'tween',
                        ease: [0.4, 0, 0.2, 1],
                        duration: 0.32,
                        delay: menuOpen
                          ? 0.18 + idx * 0.09
                          : 0.09 * (sectionLinks.length - idx),
                      }}
                      whileHover={{ scale: 1.06, x: 12 }}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-primary cursor-pointer transition-transform"
                      role="menuitem"
                      tabIndex={0}
                      style={{
                        borderRadius: '0.75rem',
                        padding: '0.5rem 0.75rem',
                        transition: 'background 0.22s, color 0.22s',
                      }}
                    >
                      <Link href={href} tabIndex={-1}>
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    key="mobile-quote-btn"
                    initial={{ opacity: 0, x: 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 48 }}
                    transition={{
                      type: 'tween',
                      ease: [0.4, 0, 0.2, 1],
                      duration: 0.32,
                      delay: menuOpen
                        ? 0.18 + sectionLinks.length * 0.09
                        : 0.09 * (sectionLinks.length + 1), // reverse stagger on exit
                    }}
                    whileHover={{ scale: 1.06, x: 12 }}
                    className="transition-transform"
                  >
                    <button
                      type="button"
                      aria-label="Request a quote"
                      className={cn(
                        'mt-8 w-full px-4 py-2',
                        'border-primary border-2',
                        'text-primary bg-white/20 backdrop-blur-md',
                        'rounded-lg font-bold shadow-md',
                        'transition-all duration-200',
                        'hover:bg-primary hover:text-black',
                        'focus:ring-primary focus:ring-2 focus:ring-offset-2 focus:outline-none'
                      )}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        boxShadow: '0 2px 12px 0 rgba(185,255,102,0.10)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Request a Quote
                    </button>
                  </motion.li>
                </AnimatePresence>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Toggle Button */}
      <motion.button
        id="menu-toggle-btn"
        className={cn(
          'z-50 block cursor-pointer text-xl shadow-lg backdrop-blur-md transition-all duration-300 lg:hidden',
          menuOpen ? 'text-text-secondary' : 'text-text-primary'
        )}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((prev) => !prev)}
        initial={{ opacity: 0, y: -24, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: menuOpen ? 1.08 : 1,
        }}
        transition={{
          type: 'tween',
          ease: [0.22, 1, 0.36, 1],
          duration: 0.32,
        }}
        style={{
          background: 'none',
        }}
      >
        {menuOpen ? (
          <motion.span
            className="text-text-primary relative block size-6"
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.span
              className={cn(
                'absolute top-1/2 left-0 size-6 -translate-y-1/2',
                'text-text-secondary'
              )}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 45, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.08,
              }}
            >
              <IconMinus stroke={2} className="text-text-primary size-6" />
            </motion.span>
            <motion.span
              className={cn(
                'absolute top-1/2 left-0 size-6 -translate-y-1/2',
                'text-text-secondary'
              )}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: -45, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.13,
              }}
            >
              <IconMinus stroke={2} className="text-text-primary size-6" />
            </motion.span>
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
              transition: { duration: 0.18 },
            }}
            transition={{
              type: 'spring',
              stiffness: 340,
              damping: 22,
              delay: 0.08,
            }}
          >
            <IconMenu4 className="text-text-primary" />
          </motion.span>
        )}
      </motion.button>
    </nav>
  );
};
