export async function generateMetadata({ params }) {
  return {
    title: 'My blog post',
  }
}

export default function Page({ params }) {
  return <h1>Blog id {params.id}</h1>
}
