import { useMDXComponent } from 'next-contentlayer/hooks';
import { allArticles } from '../../.contentlayer/generated';
import NavBar from '../../components/NavBar';

export async function getStaticPaths() {
  const paths = allArticles.map((article) => ({
    params: { slug: article.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((a) => a.slug === params.slug);
  return { props: { article } };
}

export default function ArticlePage({ article }) {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-blue-950 px-4 py-12 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">{article.title}</h1>
          <p className="text-blue-600 text-sm">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            • By {article.author}
          </p>
        </header>
        <article className="prose prose-pink max-w-4xl mx-auto">
          <MDXContent />
        </article>
      </main>
    </>
  );
}
