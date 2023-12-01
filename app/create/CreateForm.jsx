"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [style, setStyle ] = useState("")
    // const [pho, setPho] = useState('')
    const [price, setPrice] = useState('')
    const [avaiableUnits, setAvaiableUnits] = useState(0)
    const [selectedFile, setSelectedFile] = useState("")
    const [isLoading, setIsLoading ] = useState(false)


    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)



        if(selectedFile){
            const formData = new FormData()
            formData.set('file', selectedFile, `${name}.jpg`)
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
            if (res.status === 201){
                router.refresh()
                router.push('/photos')
            }
        }

        const photo = {
            name, author, style, price, avaiableUnits
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
                onChange={e => {
                    setName(e.target.value)
                 }
                }
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
        {/* <label>
            <span>Pho:</span>
            <input 
                type="text" 
                required 
                onChange={e => setPho(e.target.value)}
                value={pho}
            />
        </label> */}
        <label>
            <span>Style:</span>
            <select name="style" required onChange={e => setStyle(e.target.value)} value={style}>
                <option value="photo">photo</option>
                <option value="video">video</option>
                <option value="oil">oil</option>
            </select>
        </label>
        <label>
            <span>avaiableUnits:</span>
            <input 
                type="number" 
                required 
                onChange={e => setAvaiableUnits(e.target.value)}
                value={avaiableUnits}
            />
        </label>
        <label>
            <span>Price:</span>
            <input 
                type="text" 
                required 
                onChange={e => setPrice(e.target.value)}
                value={price}
            />
        </label>
        <label>
            <span>Image:</span>
            <input 
                type="file" 
                required 
                onChange={(e) => setSelectedFile(e.target.files?.[0])}
            />
        </label>

        <button className="btn-primary" disabled={isLoading}>
            {isLoading && <span>Loading...</span>}
            {!isLoading && <span>Adding photo</span>}
        </button>
    </form>
   
  )
}
