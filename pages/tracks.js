import NavBar from '../components/NavBar';
import Link from 'next/link';

const countryCode = {
  Italy: 'it',
  France: 'fr',
  Switzerland: 'ch',
  Hungary: 'hu',
  Germany: 'de',
  USA: 'us',
  'United States': 'us'
};

const tracks = [
  { slug: 'roman-gp', name: 'Roman GP', location: 'Rome, Italy', year: 1900 },
  { slug: 'paris-gp', name: 'Paris GP', location: 'Le Mans, France', year: 1900 },
  { slug: 'french-gp', name: 'French GP', location: 'Clermont-Ferrand, France', year: 1900 },
  { slug: 'swiss-gp', name: 'Swiss GP', location: 'Bern, Switzerland', year: 1900 },
  { slug: 'austro-hungarian-gp', name: 'Austro-Hungarian GP', location: 'Budapest, Hungary', year: 1900 },
  { slug: 'italian-gp', name: 'Italian GP', location: 'Turin, Italy', year: 1900 },
  { slug: 'german-gp', name: 'German GP', location: 'Frankfurt, Germany', year: 1900 },
  { slug: 'rhineland-gp', name: 'Rhineland GP', location: 'Cologne, Germany', year: 1900 },
  { slug: 'chicago-gp', name: 'Chicago GP', location: 'Chicago, USA', year: 1900 },
  { slug: 'new-york-gp', name: 'New York GP', location: 'Hudson Valley, USA', year: 1900 }
];

export default function TracksPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <h1 className="text-4xl font-bold text-pink-500 mb-2 text-center">Track Archive</h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto text-center">
          Discover the legendary circuits that shaped the inaugural season of the World Motorsport Championship.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const country = track.location.split(', ').pop();
            const code = countryCode[country];

            return (
              <div key={track.slug} className="p-4 border border-blue-300 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-blue-800">{track.name}</h2>
                <p className="text-blue-600 flex items-center gap-2">
                  {track.location}
                  {code && (
                    <img
                      src={`https://flagcdn.com/w40/${code}.png`}
                      alt={country}
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                  )}
                </p>
                <p className="text-blue-600">First Race: {track.year}</p>
                <Link href={`/tracks/${track.slug}`} legacyBehavior>
                  <a className="text-pink-600 hover:underline">View Track Details →</a>
                </Link>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
