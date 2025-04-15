import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-pink-100 border-b border-pink-300 text-blue-900 px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl font-bold">WSMC Archive</h1>
        <ul className="flex gap-4 text-sm font-semibold">
          <li>
            <Link href="/">🏠 Home</Link>
          </li>
          <li><Link href="/seasons">📅 Seasons</Link></li>

          <li><Link href="/constructors">🏎️ Constructors</Link></li>

          <li><Link href="/tracks">🗺️ Tracks</Link></li>
<li>
            <Link href="/drivers">👤 Drivers</Link>
          </li>
          <li>
            <Link href="/journal">🗞️ Journal</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
