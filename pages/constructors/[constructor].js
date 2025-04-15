import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import Image from 'next/image';

const countryCode = {
  USA: 'us',
  'United States': 'us',
  France: 'fr',
  Germany: 'de',
  Italy: 'it',
  Belgium: 'be',
  Hungary: 'hu',
  Netherlands: 'nl',
  'United Kingdom': 'gb',
  Canada: 'ca',
  Jamaica: 'jm',
  Greece: 'gr'
};


const teamData = {
  peugeot: {
    name: 'Peugeot',
    country: 'France',
    flag: 'fr',
    colors: ['#ffc0cb', '#ffffff'],
    logo: '/logos/new-peugeot.png',
    description: "Peugeot entered the inaugural WSMC season with flair and passion...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Barney Oldfield', country: 'USA', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Emile Mayade', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  daimler: {
    name: 'Daimler',
    country: 'Germany',
    flag: 'de',
    colors: ['#0033cc', '#ff0000'],
    logo: '/logos/new-daimler.png',
    description: "Daimler brought German engineering excellence to the forefront...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Arthur Duray', country: 'Belgium', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Selwyn Edge', country: 'United Kingdom', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  'de-dion-bouton': {
    name: 'De Dion-Bouton',
    country: 'France',
    flag: 'fr',
    colors: ['#000000', '#ffd700'],
    logo: '/logos/new-de-dion-bouton.png',
    description: "De Dion-Bouton was one of the most refined and technically advanced teams...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Victor Hémery', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Henri Fournier', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  fiat: {
    name: 'Fiat',
    country: 'Italy',
    flag: 'it',
    colors: ['#808080', '#8b0000'],
    logo: '/logos/new-fiat.png',
    description: "Fiat launched its WSMC journey with a pair of quick but unpredictable machines...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Leon Théry', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Lars VanWieren', country: 'Netherlands', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  'isotta-fraschini': {
    name: 'Isotta Fraschini',
    country: 'Italy',
    flag: 'it',
    colors: ['#b22222', '#228b22'],
    logo: '/logos/new-isotta-fraschini.png',
    description: "A proud Italian entrant, Isotta Fraschini came into the WSMC with bold national pride...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Alessandro Cutillo', country: 'Italy', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Alfred Velghe', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  mercedes: {
    name: 'Mercedes',
    country: 'Germany',
    flag: 'de',
    colors: ['#c0c0c0', '#00bcd4'],
    logo: '/logos/new-mercedes.png',
    description: "Mercedes joined the championship with a reputation for excellence and speed...",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Camille Jenatzy', country: 'Belgium', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Ferenc Szisz', country: 'Hungary', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  minerva: {
    name: 'Minerva',
    country: 'Belgium',
    flag: 'be',
    colors: ['#ff0000', '#808080'],
    logo: '/logos/new-minerva.png',
    description: "Minerva entered as an underdog with a global driver lineup and a reputation for bold strategy. The Belgian outfit aimed to challenge the more established teams with ambition.",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Gabriel Berthiaume', country: 'Canada', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Zion Maize', country: 'Jamaica', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  napier: {
    name: 'Napier',
    country: 'United Kingdom',
    flag: 'gb',
    colors: ['#000080', '#ffffff'],
    logo: '/logos/new-napier.png',
    description: "A proudly British entrant, Napier emphasized mechanical refinement and tradition. The team was known for its quiet confidence and composed driver lineup.",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Emanuele Marsili', country: 'Italy', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Christos Palas', country: 'Greece', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  oldsmobile: {
    name: 'Oldsmobile',
    country: 'United States',
    flag: 'us',
    colors: ['#808080', '#000080'],
    logo: '/logos/new-oldsmobile.png',
    description: "Representing American ingenuity, Oldsmobile focused on power and durability. With North American drivers, the team brought a new-world attitude to European roads.",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Jaxon Ripper', country: 'USA', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Owen Sturtz', country: 'Canada', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  opel: {
    name: 'Opel',
    country: 'Germany',
    flag: 'de',
    colors: ['#9b30ff', '#ffffff'],
    logo: '/logos/new-opel.png',
    description: "Opel's flashy design and young talent made them a team to watch. Though inexperienced, they came into the season with nothing to lose and everything to prove.",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Christian Lautenschlager', country: 'Germany', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Auguste Doriot', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  },
  renault: {
    name: 'Renault',
    country: 'France',
    flag: 'fr',
    colors: ['#000000', '#ffff00'],
    logo: '/logos/new-renault.png',
    description: "Renault balanced experience with reliability, fielding a duo of technically gifted drivers and a well-built machine. Though quiet, their potential for surprises loomed.",
    seasonsActive: ['1900'],
    stats: { races: 0, wins: 0, podiums: 0, poles: 0 },
    driversBySeason: {
      '1900': [
        { name: 'Fernand Charron', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 },
        { name: 'Léonce Girardot', country: 'France', wins: 0, podiums: 0, points: 0, avgFinish: 0 }
      ]
    }
  }


  // ... include all the other 9 teams just like this ...
  // Use the formatted blocks I prepared earlier for de-dion-bouton, fiat, isotta-fraschini, mercedes, minerva, napier, oldsmobile, opel, renault
};

export default function ConstructorPage() {
  const router = useRouter();
  const { constructor } = router.query;
  if (!constructor || (Array.isArray(constructor) && !constructor[0])) {
    return <p className="p-6">Loading...</p>;
  }

  const teamName = Array.isArray(constructor) ? constructor[0] : constructor;
  const team = teamData[String(teamName).toLowerCase()];

  if (!team) return <p className="p-6">Team not found.</p>;

  return (
    <>
      <NavBar />
      <main className="bg-white text-blue-950">
        <header className="text-white p-6" style={{ backgroundColor: team.colors[0] }}>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold">{team.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg">{team.country}</span>
                <img src={`https://flagcdn.com/w40/${team.flag}.png`} alt={team.country} className="h-4 w-6 object-cover rounded-sm" />
              </div>
            </div>
            <Image src={team.logo} alt={`${team.name} Logo`} width={100} height={60} className="rounded" />
          </div>
        </header>

        <section className="max-w-4xl mx-auto p-6 space-y-10">
          <p className="text-lg text-blue-900 italic">{team.description}</p>

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">📆 Seasons Active</h2>
            <p>{team.seasonsActive.join(', ')}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">📊 Team Stats</h2>
            <ul className="grid grid-cols-2 gap-4 text-blue-800">
              <li><strong>Races:</strong> {team.stats.races}</li>
              <li><strong>Wins:</strong> {team.stats.wins}</li>
              <li><strong>Podiums:</strong> {team.stats.podiums}</li>
              <li><strong>Poles:</strong> {team.stats.poles}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">🏎️ Driver Performance by Season</h2>
            {Object.entries(team.driversBySeason).map(([season, drivers]) => (
              <div key={season} className="mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Season {season}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-blue-300 text-blue-900">
                    <thead className="bg-pink-100">
                      <tr>
                        <th className="p-2 text-left">Driver</th>
                        <th className="p-2 text-left">Country</th>
                        <th className="p-2 text-left">Wins</th>
                        <th className="p-2 text-left">Podiums</th>
                        <th className="p-2 text-left">Points</th>
                        <th className="p-2 text-left">Avg. Finish</th>
                      </tr>
                    </thead>
                    <tbody>
                      {drivers.map(driver => (
                        <tr key={driver.name} className="border-t border-blue-100">
                          <td className="p-2 text-pink-700 font-medium">{driver.name}</td>
                          <td className="p-2 flex items-center gap-2">
                            {driver.country}
                            {countryCode[driver.country] && (
                              <img
                              src={`https://flagcdn.com/w40/${countryCode[driver.country]}.png`}
                              alt={driver.country}
                                className="h-4 w-6 object-cover rounded-sm"
                              />
                            )}
                          </td>
                          <td className="p-2">{driver.wins}</td>
                          <td className="p-2">{driver.podiums}</td>
                          <td className="p-2">{driver.points}</td>
                          <td className="p-2">{driver.avgFinish}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
