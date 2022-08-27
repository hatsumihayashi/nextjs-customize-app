export type Post = {
  id: string
  title: string
  author: {
    name: string
  } | null
  content: string
  published: boolean
}

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="border-gray-500 border-2 p-4 my-2">
      <div className="text-xl">{post.title}</div>
      <div className="flex flex-col">
        <p className="text-sm">{post.author?.name}</p>
        {/** TODO: 日付を出せると良さそう */}
      </div>
      <div className="truncate">{post.content}</div>
    </div>
  )
}
