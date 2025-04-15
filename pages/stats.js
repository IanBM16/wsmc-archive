import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function StatsLanding() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">📊 WSMC Stats & Analytics</h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Dive into historical comparisons, data breakdowns, and analytical tools that bring the story of racing to life.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <Link href="/compare" className="block bg-pink-100 hover:bg-pink-200 p-6 rounded-xl shadow transition">
            <h2 className="text-2xl font-semibold text-pink-700 mb-2">🏁 Constructor Comparison</h2>
            <p className="text-blue-800">Compare team stats, history, and visual identity head to head.</p>
          </Link>

          <Link href="/compare-drivers" className="block bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">👥 Driver Comparison</h2>
            <p className="text-blue-800">See how drivers stack up across seasons and results.</p>
          </Link>

          <Link href="#" className="block bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow transition cursor-not-allowed">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">📈 More Stats Coming Soon</h2>
            <p className="text-blue-800">Track evolution, season breakdowns, and all-time records.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
