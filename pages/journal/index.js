import NavBar from '../../components/NavBar';
import Link from 'next/link';
import { useState } from 'react';

const allArticles = [
  {
    title: "The Birth of the WSMC",
    date: "2025-04-20",
    slug: "birth-of-wsmc",
    category: "History",
    summary: "How the World Motorsport Championship began in 1900 with a vision for global racing dominance."
  },
  {
    title: "Peugeot’s Surprise Start",
    date: "2025-04-22",
    slug: "peugeot-start",
    category: "Teams",
    summary: "A closer look at how Peugeot emerged as a fan-favorite with their distinctive style and early pace."
  },
  {
    title: "The Rise of Jenatzy",
    date: "2025-04-18",
    slug: "jenatzy-rise",
    category: "Drivers",
    summary: "A deep dive into Camille Jenatzy’s rapid rise to prominence in the early WSMC scene."
  }
];

const categories = ["All", "History", "Teams", "Drivers"];

export default function JournalIndex() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = allArticles
    .filter(article =>
      (activeCategory === "All" || article.category === activeCategory) &&
      (article.title.toLowerCase().includes(search.toLowerCase()) ||
       article.summary.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gray-100 text-gray-900 p-6 space-y-12">
        <header className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-950">WSMC Journal</h1>
          <p className="text-lg text-gray-700">Insights, retrospectives, and commentary from the early days of motorsport.</p>
        </header>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
          />

          {/* Category filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-pink-600 text-white"
                    : "bg-white border border-pink-300 text-pink-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredArticles.map(({ title, date, slug, category, summary }) => (
              <Link key={slug} href={`/journal/${slug}`} className="block">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                  <div className="text-xs text-pink-600 font-semibold uppercase mb-1">{category}</div>
                  <h2 className="text-xl font-bold text-blue-950 mb-1">{title}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-800">{summary}</p>
                </div>
              </Link>
            ))}
          </section>

          {/* No results message */}
          {filteredArticles.length === 0 && (
            <p className="text-center text-gray-500">No articles match your filters.</p>
          )}
        </div>
      </main>
    </>
  );
}
