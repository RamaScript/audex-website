import { Mail, MapPin, MoveRight, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/nav'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-deepsea/10 bg-white text-deepsea">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div className="space-y-5">
          <Logo variant="dark" />
          <p className="max-w-xl text-sm leading-7 text-deepsea/80 sm:text-base">
            Audex helps enterprises detect hidden logistics leakages, recover
            freight costs, improve supply chain visibility, and build smarter
            logistics systems through consulting, technology, and intelligence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="primary" size="sm">
              Book My Free Diagnostic Now
            </Button>
            <Button to="/platform" variant="ghost" size="sm">
              See the Freight Audit Platform
              <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-blue)]">
            Navigation
          </p>
          <div className="grid gap-3 text-sm">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="text-deepsea/80 transition hover:text-deepsea"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-[1.75rem] border border-deepsea/10 bg-deepsea/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-blue)]">
            Contact
          </p>
          <div className="space-y-3 text-sm text-deepsea/80">
            <p className="font-semibold text-deepsea">
              AUDEX LOGISTIC LABS PRIVATE LIMITED
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
              <span className="break-all">mitesh@audexglobal.com / vishwesh@audexglobal.com / askus@audexglobal.com</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
              <span>+91 98843 00076 / +91 99400 12674</span>
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
              <div className="space-y-2">
                <p>Marketing office: The Executive Zone, Shakti towers, Spencer plaza, Chennai - 600002</p>
                <p>Development office: A6 3rd floor, PM towers, Chennai-600089</p>
              </div>
            </div>
            <a
              href="https://www.audexglobal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-deepsea transition hover:text-[var(--color-blue)]"
            >
              www.audexglobal.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
