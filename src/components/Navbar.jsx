import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from './shared/Logo'

const LINKS = [
  { label: 'Company', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#custom' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setSolid(y > 40)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-cream/95 backdrop-blur border-b border-forest/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center">
          <motion.div
            key={solid ? 'solid' : 'transparent'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Logo className="h-10 w-auto md:h-11" light={!solid} />
          </motion.div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[13.5px] font-medium transition-colors hover:text-lime ${
                solid ? 'text-charcoal' : 'text-cream/90'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#enquiry"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-semibold transition-colors ${
              solid
                ? 'bg-forest text-cream hover:bg-lime-deep'
                : 'bg-lime text-forest hover:bg-cream'
            }`}
          >
            Request a Quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid h-10 w-10 place-items-center border focus-ring ${
              solid ? 'border-forest/20 text-forest' : 'border-cream/40 text-cream'
            }`}
          >
            <div className="relative h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden bg-forest lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/10 py-4 text-cream text-lg font-head font-semibold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-4 bg-lime text-forest text-center py-3 font-semibold"
              >
                Request a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
