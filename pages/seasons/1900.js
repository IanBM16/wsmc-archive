export default function Season1900() {
    const teamColors = {
      'Daimler': 'bg-blue-100 text-blue-800',
      'De Dion-Bouton': 'bg-yellow-100 text-yellow-800',
      'Fiat': 'bg-red-100 text-red-800',
      'Isotta Fraschini': 'bg-green-100 text-green-800',
      'Mercedes': 'bg-cyan-100 text-cyan-800',
      'Minerva': 'bg-red-100 text-red-800',
      'Napier': 'bg-indigo-100 text-indigo-800',
      'Oldsmobile': 'bg-gray-100 text-gray-800',
      'Opel': 'bg-purple-100 text-purple-800',
      'Peugeot': 'bg-pink-100 text-pink-800',
      'Renault': 'bg-yellow-100 text-yellow-800'
    };
  
    const countryCode = {
      'Belgium': 'be',
      'United Kingdom': 'gb',
      'France': 'fr',
      'Netherlands': 'nl',
      'Italy': 'it',
      'Hungary': 'hu',
      'Canada': 'ca',
      'Jamaica': 'jm',
      'Greece': 'gr',
      'USA': 'us',
      'Germany': 'de',
      'United States': 'us',
      'Switzerland': 'ch'
    };
  
    const drivers = [
      ['Arthur Duray', 24, 'Daimler', 'Belgium'],
      ['Selwyn Edge', 32, 'Daimler', 'United Kingdom'],
      ['Victor Hémery', 26, 'De Dion-Bouton', 'France'],
      ['Henri Fournier', 30, 'De Dion-Bouton', 'France'],
      ['Leon Théry', 27, 'Fiat', 'France'],
      ['Lars VanWieren', 25, 'Fiat', 'Netherlands'],
      ['Alessandro Cutillo', 36, 'Isotta Fraschini', 'Italy'],
      ['Alfred Velghe', 31, 'Isotta Fraschini', 'France'],
      ['Camille Jenatzy', 31, 'Mercedes', 'Belgium'],
      ['Ferenc Szisz', 26, 'Mercedes', 'Hungary'],
      ['Gabriel Berthiaume', 39, 'Minerva', 'Canada'],
      ['Zion Maize', 40, 'Minerva', 'Jamaica'],
      ['Emanuele Marsili', 26, 'Napier', 'Italy'],
      ['Christos Palas', 35, 'Napier', 'Greece'],
      ['Jaxon Ripper', 28, 'Oldsmobile', 'USA'],
      ['Owen Sturtz', 27, 'Oldsmobile', 'Canada'],
      ['Christian Lautenschlager', 22, 'Opel', 'Germany'],
      ['Auguste Doriot', 35, 'Opel', 'France'],
      ['Barney Oldfield', 22, 'Peugeot', 'USA'],
      ['Emile Mayade', 41, 'Peugeot', 'France'],
      ['Fernand Charron', 31, 'Renault', 'France'],
      ['Léonce Girardot', 32, 'Renault', 'France']
    ];
  
    const races = [
      [1, 'Roman GP', 'Rome, Italy'],
      [2, 'Paris GP', 'Le Mans, France'],
      [3, 'French GP', 'Clermont-Ferrand, France'],
      [4, 'Swiss GP', 'Bern, Switzerland'],
      [5, 'Austro-Hungarian GP', 'Budapest, Hungary'],
      [6, 'Italian GP', 'Turin, Italy'],
      [7, 'German GP', 'Frankfurt, Germany'],
      [8, 'Rhineland GP', 'Cologne, Germany'],
      [9, 'Chicago GP', 'Chicago, USA'],
      [10, 'New York GP', 'Hudson Valley, USA']
    ];
  
    const teamCountryMap = {
      'Daimler': 'Germany',
      'De Dion-Bouton': 'France',
      'Fiat': 'Italy',
      'Isotta Fraschini': 'Italy',
      'Mercedes': 'Germany',
      'Minerva': 'Belgium',
      'Napier': 'United Kingdom',
      'Oldsmobile': 'United States',
      'Opel': 'Germany',
      'Peugeot': 'France',
      'Renault': 'France'
    };
  
    const teamDriversMap = {};
    drivers.forEach(([name, age, team, country]) => {
      if (!teamDriversMap[team]) teamDriversMap[team] = [];
      teamDriversMap[team].push({ name, age, country });
    });
  
    return (
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-500 mb-2">1900 Season Preview</h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            The inaugural season of the World Motorsport Championship kicks off with ten Grand Prix races across Europe and North America. Twenty-two drivers from eleven legendary constructors will compete for glory in a sport where engineering meets raw courage.
          </p>
        </header>
  
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">🏁 Race Calendar</h2>
            <table className="w-full table-auto border border-blue-300">
              <thead>
                <tr className="bg-pink-100 text-left">
                  <th className="p-2">Round</th>
                  <th className="p-2">Grand Prix</th>
                  <th className="p-2">Location</th>
                </tr>
              </thead>
              <tbody className="text-blue-800">
                {races.map(([round, gp, location]) => {
                  const countryFromLocation = location.split(', ').pop();
                  const code = countryCode[countryFromLocation];
                  return (
                    <tr key={round} className="border-t border-blue-200">
                      <td className="p-2">{round}</td>
                      <td className="p-2 font-semibold text-pink-600">{gp}</td>
                      <td className="p-2 flex items-center gap-2">
                        {location}
                        {code && (
                          <img
                            src={`https://flagcdn.com/w40/${code}.png`}
                            alt={countryFromLocation}
                            className="h-4 w-6 object-cover rounded-sm"
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">📊 Standings (TBD)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Driver Standings</h3>
                <table className="w-full table-auto border border-blue-300">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="p-2 text-left">Position</th>
                      <th className="p-2 text-left">Driver</th>
                      <th className="p-2 text-left">Team</th>
                      <th className="p-2 text-left">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5].map((pos) => (
                      <tr key={pos} className="border-t border-blue-100">
                        <td className="p-2">{pos}</td>
                        <td className="p-2">TBD</td>
                        <td className="p-2">TBD</td>
                        <td className="p-2">—</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Constructor Standings</h3>
                <table className="w-full table-auto border border-blue-300">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="p-2 text-left">Position</th>
                      <th className="p-2 text-left">Constructor</th>
                      <th className="p-2 text-left">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5].map((pos) => (
                      <tr key={pos} className="border-t border-blue-100">
                        <td className="p-2">{pos}</td>
                        <td className="p-2">TBD</td>
                        <td className="p-2">—</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">🏎️ Constructors & Drivers</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(teamDriversMap).map(([team, teamDrivers]) => {
              const country = teamCountryMap[team];
              const code = countryCode[country];
              const logoFilename = team.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '') + '.png';
              return (
                <li key={team} className={`${teamColors[team]} p-4 rounded-xl shadow`}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {team}
                      {code && (
                        <img
                          src={`https://flagcdn.com/w40/${code}.png`}
                          alt={country}
                          className="h-4 w-6 object-cover rounded-sm"
                        />
                      )}
                    </h3>
                    <img
                      src={`/logos/${logoFilename}`}
                      alt={`${team} logo`}
                      className="h-16 w-auto"
                    />
                  </div>
                  <p className="mb-2">{country}</p>
                  <ul className="space-y-1">
                    {teamDrivers.map(driver => (
                      <li key={driver.name} className="flex items-center gap-2">
                        {driver.name}, {driver.age},
                        {countryCode[driver.country] && (
                          <img
                            src={`https://flagcdn.com/w40/${countryCode[driver.country]}.png`}
                            alt={driver.country}
                            className="h-4 w-6 object-cover rounded-sm"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
  