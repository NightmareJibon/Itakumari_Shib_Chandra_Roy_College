import { useState } from 'react'

export default function Upload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    if (data.success) {
      const newPost = {
        title,
        description,
        url: data.data.url,
        type: file.type.startsWith('video') ? 'video' : 'image',
        date: new Date().toISOString()
      }
      console.log('Upload successful:', newPost)
      setMessage('Uploaded successfully!')
    } else {
      setMessage('Upload failed.')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Media</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="p-2 border" required />
        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="p-2 border" required />
        <input type="file" accept="image/*,video/*" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Upload</button>
        <p>{message}</p>
      </form>
    </div>
  )
}