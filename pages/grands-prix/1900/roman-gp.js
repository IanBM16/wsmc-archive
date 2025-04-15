import NavBar from '../../../components/NavBar';

export default function RomanGP1900() {
  const finishingOrder = [
    'Victor Hémery (De Dion-Bouton)',
    'Fernand Charron (Renault)',
    'Léonce Girardot (Renault)',
    'Barney Oldfield (Peugeot)',
    'Leon Théry (Fiat)',
    'Alessandro Cutillo (Isotta Fraschini)',
    'Arthur Duray (Daimler)',
    'Camille Jenatzy (Mercedes)',
    'Alfred Velghe (Isotta Fraschini)',
    'Emanuele Marsili (Napier)',
    'Selwyn Edge (Daimler)',
    'Henri Fournier (De Dion-Bouton)',
    'Emile Mayade (Peugeot)',
    'Christos Palas (Napier)',
    'Ferenc Szisz (Mercedes)',
    'Jaxon Ripper (Oldsmobile)',
    'Owen Sturtz (Oldsmobile)',
    'Lars VanWieren (Fiat)',
    'Gabriel Berthiaume (Minerva)',
    'Christian Lautenschlager (Opel)',
    'Zion Maize (Minerva)',
    'Auguste Doriot (Opel)'
  ];

  const qualifyingTop5 = [
    'Camille Jenatzy (Mercedes)',
    'Léonce Girardot (Renault)',
    'Victor Hémery (De Dion-Bouton)',
    'Fernand Charron (Renault)',
    'Ferenc Szisz (Mercedes)'
  ];

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600">1900 Roman Grand Prix</h1>
          <p className="text-lg text-blue-700 mt-2">Round 1 • Rome, Italy • March 25, 1900</p>
        </header>

        {/* Track layout image */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">🗺️ Track Layout</h2>
          <img
            src="/placeholders/roman-gp-layout.png"
            alt="Roman GP Track Layout"
            className="w-full max-w-xl rounded-lg shadow mx-auto"
          />
        </div>

        {/* Race summary */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">📜 Race Summary</h2>
          <p className="text-blue-800">
            The streets of Rome delivered a thrilling opening to the WSMC season. Despite a dominant pole position
            by Camille Jenatzy, a poor getaway saw him slip down the order early. Victor Hémery capitalized on early
            chaos and controlled the race from the front, fending off late pressure from the Renault duo of Charron and Girardot.
          </p>
        </section>

        {/* Finishing Order Table */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-pink-500">🏁 Final Classification</h2>
          <table className="w-full table-auto border border-blue-300 text-blue-800">
            <thead className="bg-pink-100 text-left">
              <tr>
                <th className="p-2">Position</th>
                <th className="p-2">Driver & Constructor</th>
              </tr>
            </thead>
            <tbody>
              {finishingOrder.map((entry, idx) => (
                <tr key={idx} className="border-t border-blue-100">
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2">{entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Top 5 Qualifiers Table */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-pink-500 mt-8">⏱️ Top 5 Qualifiers</h2>
          <table className="w-full table-auto border border-blue-300 text-blue-800">
            <thead className="bg-pink-100 text-left">
              <tr>
                <th className="p-2">Position</th>
                <th className="p-2">Driver & Constructor</th>
              </tr>
            </thead>
            <tbody>
              {qualifyingTop5.map((entry, idx) => (
                <tr key={idx} className="border-t border-blue-100">
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2">{entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
