import NavBar from '../../components/NavBar';
import Link from 'next/link';

const constructors = [
  { name: 'Peugeot', slug: 'peugeot', country: 'France', flag: 'fr', colors: ['#ffc0cb', '#ffffff'] },
  { name: 'Daimler', slug: 'daimler', country: 'Germany', flag: 'de', colors: ['#0000ff', '#ff0000'] },
  { name: 'De Dion-Bouton', slug: 'de-dion-bouton', country: 'France', flag: 'fr', colors: ['#000000', '#ffd700'] },
  { name: 'Fiat', slug: 'fiat', country: 'Italy', flag: 'it', colors: ['#808080', '#8b0000'] },
  { name: 'Isotta Fraschini', slug: 'isotta-fraschini', country: 'Italy', flag: 'it', colors: ['#ff0000', '#008000'] },
  { name: 'Mercedes', slug: 'mercedes', country: 'Germany', flag: 'de', colors: ['#c0c0c0', '#00d2be'] },
  { name: 'Minerva', slug: 'minerva', country: 'Belgium', flag: 'be', colors: ['#ff0000', '#808080'] },
  { name: 'Napier', slug: 'napier', country: 'United Kingdom', flag: 'gb', colors: ['#000080', '#ffffff'] },
  { name: 'Oldsmobile', slug: 'oldsmobile', country: 'United States', flag: 'us', colors: ['#808080', '#000080'] },
  { name: 'Opel', slug: 'opel', country: 'Germany', flag: 'de', colors: ['#800080', '#ffffff'] },
  { name: 'Renault', slug: 'renault', country: 'France', flag: 'fr', colors: ['#000000', '#ffff00'] }
];

export default function ConstructorsIndex() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Constructors</h1>
          <p className="text-lg text-blue-800 max-w-xl mx-auto">
            Discover the teams that shaped the world of early motorsport. Explore their drivers, colors, and legacies.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
  {constructors.map(({ name, slug, country, flag, colors }) => {
    const logoFilename = `new-${slug}.png`;

    return (
      <Link key={slug} href={`/constructors/${slug}`} className="block">
        <div
          className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-blue-200 flex flex-col justify-between h-full"
          style={{ backgroundColor: colors[0], color: colors[1] }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <img
              src={`https://flagcdn.com/w40/${flag}.png`}
              alt={country}
              className="h-4 w-6 object-cover rounded-sm"
            />
          </div>
          <p className="text-sm mb-4">{country}</p>
          <div className="flex justify-end">
            <img
              src={`/logos/${logoFilename}`}
              alt={`${name} logo`}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </Link>
    );
  })}
</section>

      </main>
    </>
  );
}
