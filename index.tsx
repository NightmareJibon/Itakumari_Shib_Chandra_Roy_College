import MediaCard from '../components/MediaCard'
import posts from '../data/posts.json'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">🎓 Itakumari College Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <MediaCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}