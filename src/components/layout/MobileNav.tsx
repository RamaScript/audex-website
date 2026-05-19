import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, ArrowRight, Mail } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationItems } from '../../data/nav'
import { Logo } from '../ui/Logo'

const mobileNavItems = navigationItems.filter((item) => item.href !== '/')

function MobileMenu({ onClose }: { onClose: () => void }) {
  const location = useLocation()

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(6,11,52,0.08)',
            flexShrink: 0,
          }}
        >
          <NavLink to="/" onClick={onClose}>
            <Logo variant="dark" />
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              border: '1px solid rgba(6,11,52,0.10)',
              background: 'transparent',
              cursor: 'pointer',
              color: 'rgba(6,11,52,0.55)',
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links — takes all remaining space */}
        <div style={{ flex: '1 1 0%', overflowY: 'auto', padding: '8px 16px' }}>
          {mobileNavItems.map((item, i) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== '/' && location.pathname.startsWith(item.href))

            return (
              <div
                key={item.href}
                style={{
                  animationName: 'mobileNavIn',
                  animationDuration: '0.28s',
                  animationDelay: `${0.04 + i * 0.04}s`,
                  animationFillMode: 'both',
                  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(6,11,52,0.06)',
                    color: isActive ? '#0B5DFF' : 'rgba(6,11,52,0.55)',
                    backgroundColor: isActive ? 'rgba(11,93,255,0.05)' : 'transparent',
                    borderRadius: 2,
                    transition: 'color 0.15s, background-color 0.15s',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#0B5DFF',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </NavLink>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            padding: '16px 20px 24px',
            borderTop: '1px solid rgba(6,11,52,0.08)',
            flexShrink: 0,
            animationName: 'mobileNavIn',
            animationDuration: '0.3s',
            animationDelay: '0.32s',
            animationFillMode: 'both',
          }}
        >
          <NavLink
            to="/contact"
            onClick={onClose}
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '14px 24px',
              borderRadius: 2,
              backgroundColor: '#0B5DFF',
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(11,93,255,0.3)',
              marginBottom: 12,
            }}
          >
            Book Free Diagnostic
            <ArrowRight size={16} />
          </NavLink>

          <a
            href="mailto:mitesh@audexglobal.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontSize: 11,
              color: 'rgba(6,11,52,0.38)',
              textDecoration: 'none',
              fontFamily: 'monospace',
            }}
          >
            <Mail size={12} />
            mitesh@audexglobal.com
          </a>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-deepsea/12 bg-white text-deepsea transition-all duration-200 hover:border-blue/30 hover:bg-blue/5 active:scale-95"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Portal-mounted full-screen menu */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </div>
  )
}
