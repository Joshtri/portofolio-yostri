import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const NEW_PORTFOLIO_URL = 'https://portfolio.joshtrilenggu.com/';
const DISMISS_KEY = 'newPortfolioDialogDismissed';

// Remember the dismissal only for the current browser session,
// so returning visitors still get pointed to the new portfolio.
const wasDismissed = () => {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === 'true';
  } catch {
    return false;
  }
};

const rememberDismissal = () => {
  try {
    sessionStorage.setItem(DISMISS_KEY, 'true');
  } catch {
    // Storage can be blocked (private mode); the dialog just shows again next load.
  }
};

const NewPortfolioDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => !wasDismissed());
  const primaryButtonRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  const close = () => {
    rememberDismissal();
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    primaryButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
    {/* Floating shortcut shown after the visitor chooses to stay on the old site */}
    <AnimatePresence>
      {!isOpen && (
        <motion.a
          key="new-portfolio-fab"
          href={NEW_PORTFOLIO_URL}
          aria-label="Go to my new portfolio"
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-600 to-blue-500 py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors hover:from-blue-500 hover:to-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:right-6"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            {!reduceMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
          </span>
          New portfolio
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-portfolio-title"
            aria-describedby="new-portfolio-description"
            className="relative w-full max-w-md rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 p-6 text-white shadow-2xl sm:p-8"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              Legacy portfolio
            </span>

            <h2 id="new-portfolio-title" className="mt-4 text-2xl font-bold leading-tight">
              I've moved to a new portfolio
            </h2>

            <p id="new-portfolio-description" className="mt-3 text-sm leading-relaxed text-gray-300">
              This site is no longer updated. My latest projects, skills and experience are on my
              new portfolio.
            </p>

            <p className="mt-4 truncate rounded-lg bg-gray-950/60 px-3 py-2 font-mono text-sm text-blue-300">
              portfolio.joshtrilenggu.com
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
              <a
                ref={primaryButtonRef}
                href={NEW_PORTFOLIO_URL}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-colors hover:from-blue-500 hover:to-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Go to new portfolio
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <button
                type="button"
                onClick={close}
                className="flex-1 rounded-xl border border-gray-600 px-5 py-3 font-medium text-gray-200 transition-colors hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              >
                Stay on old site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default NewPortfolioDialog;
