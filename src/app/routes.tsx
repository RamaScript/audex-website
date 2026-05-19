import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import App from './App'
import { AboutPage } from '../pages/About'
import { ConsultingPage } from '../pages/Consulting'
import { ContactPage } from '../pages/Contact'
import { HomePage } from '../pages/Home'
import { IndustriesPage } from '../pages/Industries'
import { IntelligenceCenterPage } from '../pages/IntelligenceCenter'
import { NotFoundPage } from '../pages/NotFound'
import { PlatformPage } from '../pages/Platform'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route
            path="/intelligence-center"
            element={<IntelligenceCenterPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
