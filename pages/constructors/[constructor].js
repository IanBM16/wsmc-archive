import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import Image from 'next/image';

const teamData = {
  peugeot: {
    name: 'Peugeot',
    country: 'France',
    flag: 'fr',
    colors: ['#ffc0cb', '#ffffff'], // pink and white
    logo: '/logos/new-peugeot.png',
    driversBySeason: {
      '1900': [
        { name: 'Barney Oldfield', age: 22, country: 'USA' },
        { name: 'Emile Mayade', age: 41, country: 'France' }
      ]
    }
  }
};

const countryCode = {
  USA: 'us',
  France: 'fr'
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
      <main>
        <header className="text-white p-6" style={{ backgroundColor: team.colors[0] }}>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold">{team.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg">{team.country}</span>
                <img src={`https://flagcdn.com/w40/${team.flag}.png`} alt={team.country} className="h-4 w-6 object-cover rounded-sm" />
              </div>
            </div>
            <Image
              src={team.logo}
              alt={`${team.name} Logo`}
              width={100}
              height={60}
              className="rounded"
            />
          </div>
        </header>

        <section className="max-w-4xl mx-auto p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">🎨 Team Colors</h2>
            <div className="flex gap-4">
              {team.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded shadow"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">👥 Drivers by Season</h2>
            {Object.entries(team.driversBySeason).map(([season, drivers]) => (
              <div key={season} className="mb-4">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Season {season}</h3>
                <ul className="space-y-1">
                  {drivers.map((driver) => (
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
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
