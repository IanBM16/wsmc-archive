import { useMDXComponent } from 'next-contentlayer/hooks';
import { allJournals } from 'contentlayer/generated';
import NavBar from '../../components/NavBar';

export async function getStaticPaths() {
  return {
    paths: allJournals.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allJournals.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function JournalEntry({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-blue-950">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">{post.title}</h1>
        <div className="text-sm text-blue-700 mb-6">
          By {post.author} • {new Date(post.date).toLocaleDateString()}
        </div>
        <article className="prose prose-pink max-w-none">
          <MDXContent />
        </article>
      </main>
    </>
  );
}
