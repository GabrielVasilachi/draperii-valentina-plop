import { useEffect, useState } from 'react'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/'

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to: string) => {
    const next = normalizePath(to)
    if (next !== path) window.history.pushState({}, '', next)
    setPath(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let page = <HomePage navigate={navigate} />
  if (path.startsWith('/magazin')) page = <CatalogPage path={path} navigate={navigate} />
  else if (path === '/servicii') page = <ServicesPage navigate={navigate} />
  else if (path === '/despre-noi') page = <AboutPage navigate={navigate} />
  else if (path === '/contact') page = <ContactPage />

  return <SiteLayout path={path} navigate={navigate}>{page}</SiteLayout>
}

export default App
