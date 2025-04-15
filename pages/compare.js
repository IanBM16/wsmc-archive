import { useState } from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import { teamData } from '../data/teamData';

export default function ComparePage() {
  const [team1, setTeam1] = useState('peugeot');
  const [team2, setTeam2] = useState('mercedes');

  const team1Data = teamData[team1];
  const team2Data = teamData[team2];

  const allTeams = Object.keys(teamData).sort();

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-4">🔍 Compare Constructors</h1>

        <div className="flex justify-center gap-6">
          {[team1, team2].map((selectedTeam, idx) => (
            <div key={idx} className="w-full max-w-md bg-pink-50 p-6 rounded-xl shadow space-y-4">
              <label className="block text-lg font-semibold text-pink-600 mb-2">
                {idx === 0 ? 'Constructor 1' : 'Constructor 2'}
              </label>
              <select
                className="w-full p-2 rounded border border-blue-300"
                value={selectedTeam}
                onChange={(e) => (idx === 0 ? setTeam1(e.target.value) : setTeam2(e.target.value))}
              >
                {allTeams.map((key) => (
                  <option key={key} value={key}>{teamData[key].name}</option>
                ))}
              </select>

              <div className="flex items-center gap-2">
                <Image src={teamData[selectedTeam].logo} width={80} height={50} alt="Logo" />
                <span className="text-xl font-bold">{teamData[selectedTeam].name}</span>
                <img
                  src={`https://flagcdn.com/w40/${teamData[selectedTeam].flag}.png`}
                  alt={teamData[selectedTeam].country}
                  className="h-4 w-6 object-cover rounded-sm"
                />
              </div>

              <div>
                <p><strong>Country:</strong> {teamData[selectedTeam].country}</p>
                <p><strong>Seasons Active:</strong> {teamData[selectedTeam].seasonsActive.join(', ')}</p>
              </div>

              <div className="flex gap-2 mt-2">
                {teamData[selectedTeam].colors.map((color, i) => (
                  <div key={i} className="w-6 h-6 rounded shadow" style={{ backgroundColor: color }} />
                ))}
              </div>

              <div>
                <p><strong>Races:</strong> {teamData[selectedTeam].stats.races}</p>
                <p><strong>Wins:</strong> {teamData[selectedTeam].stats.wins}</p>
                <p><strong>Podiums:</strong> {teamData[selectedTeam].stats.podiums}</p>
                <p><strong>Poles:</strong> {teamData[selectedTeam].stats.poles}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
