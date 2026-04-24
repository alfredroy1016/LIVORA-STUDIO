import { useState, useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Loader          from './components/layout/Loader'
import MainLayout      from './layouts/MainLayout'
import AppRoutes       from './routes/AppRoutes'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [loading, setLoading] = useState(true)
  useScrollReveal()

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [loading])

  return (
    <Router>
      {loading && <Loader onDone={() => setLoading(false)} />}
      
      <div style={{ 
        opacity: loading ? 0 : 1, 
        transition: 'opacity .6s ease' 
      }}>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </div>
    </Router>
  )
}


