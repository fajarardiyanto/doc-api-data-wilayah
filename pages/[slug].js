import PostLayout from '@/layouts/PostLayout'
import postsData from '@/data/posts'

export async function getStaticPaths() {
  const posts = postsData

  return {
    paths: posts?.map((data) => ({
      params: {
        slug: data.slug,
      },
    })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context

  const post = postsData[0]

  return { props: { post } }
}

export default function Blog({ post }) {
  return (
    <>
      <PostLayout post={post} />
    </>
  )
}
