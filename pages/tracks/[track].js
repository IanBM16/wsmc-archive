import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import { tracksData } from '../../data/tracksData.js';

export default function TrackPage() {
  const router = useRouter();
  const { track } = router.query;

  if (!track) return <p className="p-6">Loading...</p>;

  const trackDetails = tracksData.find(t => t.slug === track);
  if (!trackDetails) return <p className="p-6">Track not found.</p>;

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600">{trackDetails.name}</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-lg">{trackDetails.location}</span>
            <img
              src={`https://flagcdn.com/w40/${trackDetails.countryCode}.png`}
              alt={trackDetails.location}
              className="h-4 w-6 object-cover rounded-sm"
            />
          </div>
        </header>

        {/* Description */}
        <section className="max-w-3xl mx-auto space-y-6">
          <p className="text-blue-800">{trackDetails.description}</p>

          {/* Most Wins */}
          {trackDetails.mostWins && (
            <div className="bg-pink-100 p-4 rounded shadow text-blue-900">
              <h2 className="text-xl font-semibold mb-1">🏆 Most Wins</h2>
              <p>
                <strong>{trackDetails.mostWins.driver}</strong> — {trackDetails.mostWins.wins} win
                {trackDetails.mostWins.wins > 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Layout Image */}
          {trackDetails.layoutImage && (
            <div>
              <h2 className="text-xl font-semibold text-pink-500 mb-2">🗺️ Track Layout</h2>
              <img
                src={trackDetails.layoutImage}
                alt={`${trackDetails.name} layout`}
                className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
              />
            </div>
          )}

          {/* Results Table */}
          {trackDetails.results?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-pink-500 mb-2">📊 Results</h2>
              <table className="w-full table-auto border border-blue-300">
                <thead className="bg-pink-100 text-left">
                  <tr>
                    <th className="p-2">Year</th>
                    <th className="p-2">Winner</th>
                    <th className="p-2">Constructor</th>
                    <th className="p-2">P2</th>
                    <th className="p-2">P3</th>
                  </tr>
                </thead>
                <tbody className="text-blue-800">
                  {trackDetails.results.map(result => (
                    <tr key={result.year} className="border-t border-blue-100">
                      <td className="p-2">
  <Link href={`/grands-prix/${result.year}/${trackDetails.slug}`} className="text-pink-600 underline">
    {result.year}
  </Link>
</td>

                      <td className="p-2">{result.winner}</td>
                      <td className="p-2">{result.constructor}</td>
                      <td className="p-2">{result.p2}</td>
                      <td className="p-2">{result.p3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Trivia Section */}
          {trackDetails.trivia?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-pink-500 mb-2">💡 Did You Know?</h2>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                {trackDetails.trivia.map((fact, idx) => (
                  <li key={idx}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
