import { NavLink, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { navigationItems } from '../../data/nav'
import { MobileNav } from './MobileNav'
import { Logo } from '../ui/Logo'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Desktop nav links — excludes Home & Contact (they live in CTA)
const desktopNavItems = navigationItems.filter(
  (item) => item.href !== '/' && item.href !== '/contact',
)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(6,11,52,0.06)] shadow-sm'
          : 'bg-white/70 backdrop-blur-md border-b border-deepsea/8'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="Audex home"
        >
          <Logo variant="dark" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {desktopNavItems.map((item) => {
            const isActive = location.pathname === item.href ||
              (item.href !== '/' && location.pathname.startsWith(item.href))

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-[0.05em] uppercase rounded-[2px] transition-colors duration-200 ${
                  isActive
                    ? 'text-deepsea'
                    : 'text-deepsea/70 hover:text-deepsea hover:bg-deepsea/4'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </NavLink>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/contact"
            className="text-[13px] font-semibold text-deepsea/70 hover:text-deepsea tracking-[0.05em] uppercase transition-colors px-3 py-2"
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-[2px] bg-blue px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#0550d6] hover:-translate-y-px shadow-[0_4px_14px_rgba(7,93,239,0.3)] hover:shadow-[0_6px_20px_rgba(7,93,239,0.45)]"
          >
            Book Diagnostic
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <MobileNav />
      </div>
    </header>
  )
}
