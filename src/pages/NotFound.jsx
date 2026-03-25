import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-xl mb-8">The space you are looking for does not exist.</p>
      <Link to="/" className="btn-livora">Back to Luxury</Link>
    </div>
  )
}
