import NavBar from '../../components/NavBar';

export default function LeaderboardsPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏆 All-Time Leaderboards</h1>
          <p className="text-blue-700 text-lg">Tracking the legends of the WSMC across categories</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Most Wins */}
          <div className="bg-pink-100 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">🏁 Most Wins</h2>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>TBD</li>
              ))}
            </ol>
          </div>

          {/* Most Podiums */}
          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">🥈 Most Podiums</h2>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>TBD</li>
              ))}
            </ol>
          </div>

          {/* Most Points */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-4">📊 Most Points</h2>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>TBD</li>
              ))}
            </ol>
          </div>

          {/* Most Poles */}
          <div className="bg-purple-100 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">🎯 Most Poles</h2>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>TBD</li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
