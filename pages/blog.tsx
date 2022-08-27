import { PrismaClient } from '@prisma/client'
import type { GetStaticProps } from 'next'
import { Post, PostCard } from '../components/Post'

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { posts },
    revalidate: 10,
  }
}

const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main className="m-6">
      <div className="text-2xl">ブログ一覧</div>
      <div className="mt-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default Blog
