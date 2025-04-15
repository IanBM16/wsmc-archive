import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-pink-300 p-6 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-300">World Motorsport Championship Archive</h1>
        <p className="text-lg text-pink-200">An immersive historical record of the WSMC, from 1900 onward.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-950 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 text-pink-300">🔍 Explore by Season</h2>
          <p className="mb-2 text-pink-200">Browse race results, standings, and stories from each year of WSMC history.</p>
          <Link href="/seasons/1900" className="text-pink-600 underline">
            1900 Season
          </Link>
        </div>

        <div className="bg-blue-950 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 text-pink-300">🏎️ Teams & Constructors</h2>
          <p className="mb-2 text-pink-200">Dive into the legacies of the most iconic racing teams of the era.</p>
          <a href="/constructors" className="text-blue-300 hover:underline">Meet the teams →</a>
        </div>

        <div className="bg-blue-950 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 text-pink-300">👤 Driver Profiles</h2>
          <p className="mb-2 text-pink-200">Learn about the legendary racers who defined motorsport.</p>
          <a href="/drivers" className="text-blue-300 hover:underline">Explore drivers →</a>
        </div>

        <div className="bg-blue-950 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 text-pink-300">🗞️ WSMC Journal</h2>
          <p className="mb-2 text-pink-200">Read articles, retrospectives, and deep dives into classic moments.</p>
          <a href="/journal" className="text-blue-300 hover:underline">Read the latest →</a>
        </div>
      </section>

      <footer className="text-center text-sm text-pink-200 pt-12 border-t border-pink-300">
        <p>&copy; 2025 WSMC Archive. Built with passion for motorsport history.</p>
      </footer>
    </main>
  );
}
