import { allArticles } from '../../.contentlayer/generated';
import NavBar from '../../components/NavBar';
import Link from 'next/link';

export default function JournalIndex() {
  const sortedArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 text-blue-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* HEADER */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 mb-3">
              🗞️ WSMC Journal
            </h1>
            <p className="text-blue-700 text-lg">
              Dive into the golden age of motorsport with deep dives, race previews, and untold stories.
            </p>
          </header>

          {/* ARTICLE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white border border-pink-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-pink-600 mb-2">
                    <Link href={`/journal/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-blue-600 mb-3">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    • By {article.author}
                  </p>
                  <p className="text-blue-800 mb-4">
                    {article.summary || 'Get reved up for the 1900 WSMC Season'}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-block text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition"
                  >
                    📖 Read Full Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
