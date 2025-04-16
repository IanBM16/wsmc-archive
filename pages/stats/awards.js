import NavBar from '../../components/NavBar';

const awardsData = {
  '1900': [
    {
      title: "Driver's Champion",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Driver's Constructor",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Constructor's Champion",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Constructor's Champ. #1 Driver",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Constructor's Champ. #2 Driver",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Rookie of the Year",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Most Improved",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Transfer of the Year",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Best of the Rest",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Most Disappointing",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Race of the Year",
      recipient: 'TBD',
      team: null,
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
    {
      title: "Performance of the Year",
      recipient: 'TBD',
      team: 'TBD',
      description: 'TBD',
      image: '/portraits/placeholder.png',
    },
  ]
};

export default function AwardsPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 p-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏆 WSMC Annual Awards</h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Celebrating excellence and standout performances each season.
          </p>
        </header>

        {Object.entries(awardsData).map(([season, awards]) => (
          <section key={season} className="space-y-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-3">{season} Season</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-pink-100 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-pink-700 mb-2">{award.title}</h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src={award.image}
                      alt={award.recipient}
                      className="h-16 w-16 object-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">{award.recipient}</p>
                      {award.team && <p className="text-sm text-blue-800">{award.team}</p>}
                    </div>
                  </div>
                  <p className="mt-2 text-blue-800">{award.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
