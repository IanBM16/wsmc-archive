import NavBar from '../../components/NavBar';
import Link from 'next/link';
import { useState } from 'react';

const drivers = [
  { name: 'Arthur Duray', country: 'Belgium', slug: 'arthur-duray', team: 'Daimler' },
  { name: 'Selwyn Edge', country: 'United Kingdom', slug: 'selwyn-edge', team: 'Daimler' },
  { name: 'Victor Hémery', country: 'France', slug: 'victor-hemery', team: 'De Dion-Bouton' },
  { name: 'Henri Fournier', country: 'France', slug: 'henri-fournier', team: 'De Dion-Bouton' },
  { name: 'Leon Théry', country: 'France', slug: 'leon-thery', team: 'Fiat' },
  { name: 'Lars VanWieren', country: 'Netherlands', slug: 'lars-vanwieren', team: 'Fiat' },
  { name: 'Alessandro Cutillo', country: 'Italy', slug: 'alessandro-cutillo', team: 'Isotta Fraschini' },
  { name: 'Alfred Velghe', country: 'France', slug: 'alfred-velghe', team: 'Isotta Fraschini' },
  { name: 'Camille Jenatzy', country: 'Belgium', slug: 'camille-jenatzy', team: 'Mercedes' },
  { name: 'Ferenc Szisz', country: 'Hungary', slug: 'ferenc-szisz', team: 'Mercedes' },
  { name: 'Gabriel Berthiaume', country: 'Canada', slug: 'gabriel-berthiaume', team: 'Minerva' },
  { name: 'Zion Maize', country: 'Jamaica', slug: 'zion-maize', team: 'Minerva' },
  { name: 'Emanuele Marsili', country: 'Italy', slug: 'emanuele-marsili', team: 'Napier' },
  { name: 'Christos Palas', country: 'Greece', slug: 'christos-palas', team: 'Napier' },
  { name: 'Jaxon Ripper', country: 'USA', slug: 'jaxon-ripper', team: 'Oldsmobile' },
  { name: 'Owen Sturtz', country: 'Canada', slug: 'owen-sturtz', team: 'Oldsmobile' },
  { name: 'Christian Lautenschlager', country: 'Germany', slug: 'christian-lautenschlager', team: 'Opel' },
  { name: 'Auguste Doriot', country: 'France', slug: 'auguste-doriot', team: 'Opel' },
  { name: 'Barney Oldfield', country: 'USA', slug: 'barney-oldfield', team: 'Peugeot' },
  { name: 'Emile Mayade', country: 'France', slug: 'emile-mayade', team: 'Peugeot' },
  { name: 'Fernand Charron', country: 'France', slug: 'fernand-charron', team: 'Renault' },
  { name: 'Léonce Girardot', country: 'France', slug: 'leonce-girardot', team: 'Renault' }
];

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
  'Germany': 'de'
};

export default function DriversIndex() {
  const [search, setSearch] = useState('');
  const [countryFilter, setCountryFilter] = useState('All');

  const countries = ['All', ...new Set(drivers.map(driver => driver.country))];

  const filteredDrivers = drivers
    .filter(driver =>
      (countryFilter === 'All' || driver.country === countryFilter) &&
      driver.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Driver Directory</h1>
          <p className="text-lg text-blue-800 max-w-xl mx-auto">
            Meet the fearless racers who defined the early years of WSMC.
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
          />

          {/* Country filter */}
          <div className="flex flex-wrap gap-3">
            {countries.map((cty) => (
              <button
                key={cty}
                onClick={() => setCountryFilter(cty)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  countryFilter === cty
                    ? "bg-pink-600 text-white"
                    : "bg-white border border-pink-300 text-pink-600"
                }`}
              >
                {cty}
              </button>
            ))}
          </div>

          {/* Driver cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDrivers.map(({ name, country, slug, team }) => (
              <Link key={slug} href={`/drivers/${slug}`} className="block">
                <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-blue-200 bg-blue-50 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    {countryCode[country] && (
                      <img
                        src={`https://flagcdn.com/w40/${countryCode[country]}.png`}
                        alt={country}
                        className="h-4 w-6 object-cover rounded-sm"
                      />
                    )}
                  </div>
                  <p className="text-sm text-blue-800">{country}</p>
                  <p className="text-sm text-blue-700 mt-2">Team: <span className="font-semibold">{team}</span></p>
                  <p className="text-xs text-blue-600 mt-auto pt-4">Active: 1900</p>
                </div>
              </Link>
            ))}
          </section>

          {filteredDrivers.length === 0 && (
            <p className="text-center text-gray-500">No drivers match your search or filter.</p>
          )}
        </div>
      </main>
    </>
  );
}
