import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import VisionMission from './components/VisionMission/VisionMission'
import USP from './components/USP/USP'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Suspense, lazy } from 'react'

const Services = lazy(() => import('./components/Services/Services'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Edge = lazy(() => import('./components/Edge/Edge'))
const Workflow = lazy(() => import('./components/Workflow/Workflow'))

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <USP />
      <Suspense fallback={<div className="py-12 text-center">Loading experience...</div>}>
        <Experience />
      </Suspense>

      <Suspense fallback={<div className="py-12 text-center">Loading edge...</div>}>
        <Edge />
      </Suspense>

      <Suspense fallback={<div className="py-12 text-center">Loading services...</div>}>
        <Services />
      </Suspense>

      <Suspense fallback={<div className="py-12 text-center">Loading workflow...</div>}>
        <Workflow />
      </Suspense>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
