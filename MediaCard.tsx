export default function MediaCard({ post }) {
  return (
    <div className="border rounded p-2">
      {post.type === 'image' ? (
        <img src={post.url} alt={post.title} className="w-full h-48 object-cover mb-2" />
      ) : (
        <video controls className="w-full h-48 object-cover mb-2">
          <source src={post.url} type="video/mp4" />
        </video>
      )}
      <h2 className="font-semibold">{post.title}</h2>
      <p className="text-sm">{post.description}</p>
      <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
    </div>
  )
}