"use client"

import { useRouter } from "next/router"
import { useState } from "react"

export default function CreateForm() {
    // const router = useRouter()

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [style, setStyle ] = useState("")
    const [isLoading, setIsLoading ] = useState(false)

  return (
    <form className="w-1/2">
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
