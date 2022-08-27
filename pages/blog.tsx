import { PrismaClient } from '@prisma/client'
import type { GetStaticProps } from 'next'

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
