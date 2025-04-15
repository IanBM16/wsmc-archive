import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function SeasonsIndex() {
  const seasons = [1900]; // Add more as you go (1901, 1902, etc.)

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">WSMC Seasons</h1>
          <p className="text-lg text-blue-800 max-w-xl mx-auto">
            Explore each championship season in WSMC history. View race results, standings, and team performances by year.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {seasons.map((year) => (
            <Link key={year} href={`/seasons/${year}`} className="block">
              <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
                <h2 className="text-2xl font-bold text-pink-700 mb-2">Season {year}</h2>
                <p className="text-blue-700">View race calendar, standings, and driver stats.</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
