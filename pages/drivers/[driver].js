import { useRouter } from 'next/router';
import { driversData } from '../../data/driversData';
import NavBar from '../../components/NavBar';

export default function DriverPage() {
  const router = useRouter();
  const { driver } = router.query;

  if (!driver) return <p className="p-6">Loading...</p>;

  const driverInfo = driversData.find(d => d.slug === driver);

  if (!driverInfo) return <p className="p-6">Driver not found.</p>;

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">{driverInfo.name}</h1>
          <div className="flex items-center justify-center gap-2 text-lg text-blue-700">
            <span>{driverInfo.country}</span>
            <img
              src={`https://flagcdn.com/w40/${driverInfo.flag}.png`}
              alt={driverInfo.country}
              className="h-4 w-6 object-cover rounded-sm"
            />
          </div>
        </header>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">🧠 Bio</h2>
          <p className="text-blue-800">{driverInfo.bio}</p>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">🏎️ Team</h2>
          <p className="text-blue-800">{driverInfo.constructor}</p>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">📊 Season Stats</h2>
          <table className="w-full table-auto border border-blue-300 text-blue-800">
            <thead className="bg-pink-100 text-left">
              <tr>
                <th className="p-2">Season</th>
                <th className="p-2">Races</th>
                <th className="p-2">Wins</th>
                <th className="p-2">Podiums</th>
                <th className="p-2">Points</th>
                <th className="p-2">Avg Finish</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(driverInfo.statsBySeason).map(([season, stats]) => (
                <tr key={season} className="border-t border-blue-100">
                  <td className="p-2">{season}</td>
                  <td className="p-2">{stats.races}</td>
                  <td className="p-2">{stats.wins}</td>
                  <td className="p-2">{stats.podiums}</td>
                  <td className="p-2">{stats.points}</td>
                  <td className="p-2">{stats.avgFinish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
