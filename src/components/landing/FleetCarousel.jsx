import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FleetCarousel({ items, autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const count = items.length

  const goTo = useCallback(
    (nextIndex) => {
      if (count === 0) return
      setIndex(((nextIndex % count) + count) % count)
    },
    [count]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || count <= 1) return undefined
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [paused, next, autoPlayMs, count])

  if (count === 0) return null

  const cab = items[index]

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Fleet showcase"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={cab.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${cab.title}`}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="glass-card p-6 sm:p-8 md:p-10"
          >
            <motion.div
              className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 h-52 sm:h-64 md:h-72 flex items-center justify-center p-6 overflow-hidden"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,43,138,0.12),transparent_55%)]" />
              <img
                src={cab.image}
                alt={cab.title}
                className="relative z-10 max-h-full w-full max-w-md object-contain drop-shadow-xl"
                draggable={false}
              />
            </motion.div>

            <motion.div
              className="mt-6 text-center sm:text-left sm:max-w-lg sm:mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">{cab.title}</h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">{cab.desc}</p>
              <p className="mt-4 inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-sm font-bold text-amber-800">
                {cab.price}
              </p>
            </motion.div>
          </motion.article>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-colors"
              aria-label="Previous vehicle"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-colors"
              aria-label="Next vehicle"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </motion.div>

      {count > 1 && (
        <motion.div
          className="mt-6 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-wrap justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.title}`}
                aria-current={i === index ? 'true' : undefined}
                className={[
                  'px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all',
                  i === index
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-700',
                ].join(' ')}
              >
                {item.title}
              </button>
            ))}
          </motion.div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
            {items.map((item, i) => (
              <button
                key={`dot-${item.title}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-amber-600' : 'w-2 bg-slate-300 hover:bg-amber-300',
                ].join(' ')}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
