export type Post = {
  id: string
  title: string
  author: {
    name: string
  } | null
  content: string
  published: boolean
}
