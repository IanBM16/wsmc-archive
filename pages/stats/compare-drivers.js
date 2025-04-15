import { useState } from 'react';
import NavBar from '../../components/NavBar';
import { driversData } from '../../data/driversData';
import { teamData } from '../../data/teamData';

export default function CompareDrivers() {
  const [driverA, setDriverA] = useState('');
  const [driverB, setDriverB] = useState('');

  const getDriverData = (slug) => driversData.find(d => d.slug === slug);

  const bothDriversSelected = driverA && driverB;
  const d1 = getDriverData(driverA);
  const d2 = getDriverData(driverB);

  const sharedSeasons = bothDriversSelected
    ? Object.keys(d1.statsBySeason).filter(season => season in d2.statsBySeason)
    : [];

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">👥 Driver Comparison</h1>

        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 mb-8 justify-center">
          <select
            value={driverA}
            onChange={e => setDriverA(e.target.value)}
            className="border border-blue-300 rounded px-4 py-2"
          >
            <option value="">Select Driver A</option>
            {driversData.map(d => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>

          <select
            value={driverB}
            onChange={e => setDriverB(e.target.value)}
            className="border border-blue-300 rounded px-4 py-2"
          >
            <option value="">Select Driver B</option>
            {driversData.map(d => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>

        {bothDriversSelected && (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-blue-300 text-sm text-left">
              <thead className="bg-pink-100 text-blue-900">
                <tr>
                  <th className="p-2">Season</th>
                  <th className="p-2">{d1.name}</th>
                  <th className="p-2">{d2.name}</th>
                </tr>
              </thead>
              <tbody>
                {sharedSeasons.map((season) => {
                  const stats1 = d1.statsBySeason[season];
                  const stats2 = d2.statsBySeason[season];

                  const row = (label, val1, val2) => {
                    let bg1 = '';
                    let bg2 = '';
                    if (val1 > val2) bg1 = 'bg-green-100';
                    if (val2 > val1) bg2 = 'bg-green-100';
                    return (
                      <tr key={`${season}-${label}`} className="border-t border-blue-200">
                        <td className="p-2 font-semibold text-pink-500">{label}</td>
                        <td className={`p-2 ${bg1}`}>{val1}</td>
                        <td className={`p-2 ${bg2}`}>{val2}</td>
                      </tr>
                    );
                  };

                  return (
                    <tbody key={season} className="border-b border-blue-300">
                      <tr className="bg-blue-100 text-blue-900">
                        <td className="p-2 font-bold text-lg">{season}</td>
                        <td className="p-2 font-semibold">
                          {d1.constructor}
                          <img src={`/portraits/${d1.slug}.png`} alt={d1.name} className="h-10 w-auto mt-1 rounded" />
                        </td>
                        <td className="p-2 font-semibold">
                          {d2.constructor}
                          <img src={`/portraits/${d2.slug}.png`} alt={d2.name} className="h-10 w-auto mt-1 rounded" />
                        </td>
                      </tr>
                      {row('Races', stats1.races, stats2.races)}
                      {row('Wins', stats1.wins, stats2.wins)}
                      {row('Podiums', stats1.podiums, stats2.podiums)}
                      {row('Points', stats1.points, stats2.points)}
                      {row('Avg Finish', stats1.avgFinish, stats2.avgFinish)}
                    </tbody>
                  );
                })}
              </tbody>
            </table>
            {sharedSeasons.length === 0 && (
              <p className="text-center text-blue-600 mt-6">No overlapping seasons between these drivers.</p>
            )}
          </div>
        )}
      </main>
    </>
  );
}
