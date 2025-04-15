import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-pink-600">World Motorsport Championship Archive</h1>
        <p className="text-lg text-blue-800">An immersive historical record of the WSMC, from 1900 onward.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-pink-700">🔍 Explore by Season</h2>
          <p className="mb-2 text-blue-800">Browse race results, standings, and stories from each year of WSMC history.</p>
          <Link href="/seasons" className="text-pink-600 underline">
  Browse seasons →
</Link>

        </div>

        <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
  <h2 className="text-2xl font-semibold mb-2 text-pink-700">🏎️ Teams & Constructors</h2>
  <p className="mb-2 text-blue-800">Dive into the legacies of the most iconic racing teams of the era.</p>
  <Link href="/constructors" className="text-pink-600 underline">
    Browse constructors →
  </Link>
</div>


        <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-pink-700">👤 Driver Profiles</h2>
          <p className="mb-2 text-blue-800">Learn about the legendary racers who defined motorsport.</p>
          <Link href="/drivers" className="text-pink-600 underline">
            Explore drivers →
          </Link>
        </div>

        <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-pink-700">🗺️ Tracks</h2>
          <p className="mb-2 text-blue-800">Explore the circuits that shaped WSMC history.</p>
          <Link href="/tracks" className="text-pink-600 underline">
            View tracks →
          </Link>
        </div>

        <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-pink-700">🗞️ WSMC Journal</h2>
          <p className="mb-2 text-blue-800">Read retrospectives and deep dives into iconic races and rivalries.</p>
          <Link href="/journal" className="text-pink-600 underline">
            Read the latest →
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-blue-800 pt-12 border-t border-pink-300">
        <p>&copy; 2025 WSMC Archive. Built with passion for motorsport history.</p>
      </footer>
    </main>
  );
}
