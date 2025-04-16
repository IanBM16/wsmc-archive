import NavBar from '../../components/NavBar';
import { driversData } from '../../data/driversData';
import { teamData } from '../../data/teamData';

const calculateAggregates = () => {
  return driversData.map(driver => {
    const allSeasons = Object.values(driver.statsBySeason || {});
    const totals = {
      races: 0,
      wins: 0,
      podiums: 0,
      points: 0,
      finishes: []
    };

    allSeasons.forEach(season => {
      totals.races += season.races || 0;
      totals.wins += season.wins || 0;
      totals.podiums += season.podiums || 0;
      totals.points += season.points || 0;
      if (season.avgFinish !== undefined && season.races > 0) {
        totals.finishes.push({ avg: season.avgFinish, count: season.races });
      }
    });

    const weightedFinishSum = totals.finishes.reduce((acc, curr) => acc + curr.avg * curr.count, 0);
    const totalFinishCount = totals.finishes.reduce((acc, curr) => acc + curr.count, 0);
    const avgFinish = totalFinishCount > 0 ? (weightedFinishSum / totalFinishCount).toFixed(2) : null;

    return {
      ...driver,
      totalRaces: totals.races,
      totalWins: totals.wins,
      totalPodiums: totals.podiums,
      totalPoints: totals.points,
      avgFinish: avgFinish,
    };
  });
};

const statCategories = [
  { key: 'totalWins', label: '🏆 Most Wins' },
  { key: 'totalPodiums', label: '🥈 Most Podiums' },
  { key: 'totalPoints', label: '🔢 Most Points' },
  { key: 'avgFinish', label: '📉 Best Avg Finish (Min 5 starts)', isAvg: true }
];

export default function Leaderboards() {
  const allStats = calculateAggregates();

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏁 All-Time Leaderboards</h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            See who’s left the biggest mark on WSMC history.
          </p>
        </header>

        {statCategories.map(({ key, label, isAvg }) => {
          const sorted = allStats
            .filter(d => (isAvg ? d.totalRaces >= 5 && d.avgFinish !== null : true))
            .sort((a, b) => {
              const aVal = isAvg ? parseFloat(a[key]) : a[key];
              const bVal = isAvg ? parseFloat(b[key]) : b[key];
              return isAvg ? aVal - bVal : bVal - aVal;
            })
            .slice(0, 10);

          return (
            <section key={key}>
              <h2 className="text-2xl font-semibold text-pink-500 mb-3">{label}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-blue-300 text-sm">
                  <thead className="bg-pink-100 text-blue-900">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Driver</th>
                      <th className="p-2">Team</th>
                      <th className="p-2">{label.includes('Avg') ? 'Avg Finish' : 'Total'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((d, i) => {
                      const team = teamData[d.constructor.toLowerCase().replace(/ /g, '-')];
                      const bg = team?.colors?.[0] || '#f0f0f0';
                      const text = team?.colors?.[1] || '#000';
                      return (
                        <tr key={d.slug} className="border-t border-blue-200" style={{ backgroundColor: bg, color: text }}>
                          <td className="p-2 font-bold">{i + 1}</td>
                          <td className="p-2 flex items-center gap-2">
                            <img src={`/portraits/${d.slug}.png`} alt={d.name} className="h-8 w-8 rounded-full" />
                            <span>{d.name}</span>
                            <img
                              src={`https://flagcdn.com/w40/${d.flag}.png`}
                              alt={d.country}
                              className="h-4 w-6 object-cover rounded-sm"
                            />
                          </td>
                          <td className="p-2 flex items-center gap-2">
                            {team?.name || d.constructor}
                            {team?.logo && (
                              <img src={team.logo} alt={team.name} className="h-6 w-auto" />
                            )}
                          </td>
                          <td className="p-2">
                            {isAvg ? d.avgFinish : d[key]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
