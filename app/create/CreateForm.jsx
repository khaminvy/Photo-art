"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [style, setStyle ] = useState("")
    const [isLoading, setIsLoading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const photo = {
            name, author, style, user_email: "tv@yahoo.com"
        }

        const res = await fetch('http://localhost:4000/images',
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(photo)
            }
        )

        if (res.status === 201){
            router.refresh()
            router.push('/photos')
        }
    }

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
        <label>
            <span>Name:</span>
            <input 
                type="text" 
                required 
                onChange={e => setName(e.target.value)}
                value={name}
            />
        </label>
        <label>
            <span>Author:</span>
            <input 
                type="text" 
                required 
                onChange={e => setAuthor(e.target.value)}
                value={author}
            />
        </label>
        <label>
            <span>Style:</span>
            <input 
                type="text" 
                required 
                onChange={e => setStyle(e.target.value)}
                value={style}
            />
        </label>
        <button className="btn-primary" disabled={isLoading}>
            {isLoading && <span>Loading...</span>}
            {!isLoading && <span>Adding photo</span>}
        </button>
    </form>
   
  )
}
