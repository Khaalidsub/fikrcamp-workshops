import { useEffect, useState } from 'react'
import { usePosts } from './api/api'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  const getPosts = usePosts()

  useEffect(() => {
    getPosts().then(({ data }) => {
      setPosts(data)
    })

  }, [getPosts])
  return (
    <div className="App">
      <h1 className='text-4xl text-center'>Posts</h1>
      <div className='grid grid-cols-2'>
        {
          posts.map((post: any) => (
            <div className='bg-gray-400 m-2 rounded-md p-4' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
