
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function CreateForm() {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors, isDirty}}  = useForm({
        mode: "onBlur",
        defaultValues: {
            photoName: "",
            author: "",
            style: "photo",
            price: "0",
            avaiableUnits: "0",
            selectedFile: ""
        }
    })

    const [selectedFile, setSelectedFile] = useState("")


    const [state, setState] = useState({
        photoName:"",
        author: "",
        style: "",
        price: "",
        avaiableUnits: "",
        selectedFile: ""
    })
    const [isLoading, setIsLoading ] = useState(false) 
    
    const onError = (errors) => {
        console.log("Form error:", errors)
        console.log("isDirty:", isDirty)
    }

    const onSubmit = async (data) => {

        setIsLoading(true)

        const image = Math.floor(Math.random()*999999);
        const imageId = "image" + image


        if(selectedFile){

            const formData = new FormData()
            
            formData.set('file', selectedFile, `${imageId}.jpg`)
            
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
            photoId: imageId,
            photoName: data.photoName,
            author: data.author,
            style: data.style,
            price: data.price,
            avaiableUnits: data.avaiableUnits
        }

        const res = await fetch('http://localhost:3000/api/photos',
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(photo)
            }
        )
        if (res.status === 201){
            router.push('/photos')
            router.refresh()
        }
    }

  return (
    <form className="w-1/2" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <label>
            <span>Photo Name:</span>
            <input 
                type="text" 
                placeholder="Photo Name"
                {...register("photoName", {
                    required: "Photo Name is required."
                })}
                onChange={(e)=> setState((prevState)=>{
                    return {...prevState, photoName: e.target.value}
                })}
                value={state.photoName}
                autoComplete="off"
            />
        </label>
        {errors?.photoName && (
            <p className="error">{errors.photoName.message}</p>
        )}
        <label>
            <span>Author:</span>
            <input 
                type="text" 
                placeholder="Author..."
                {...register("author", {
                    required: "Author Name is required."
                })}
                onChange={(e)=> setState((prevState)=>{
                    return {...prevState, author: e.target.value}
                })}
                value={state.author}
                autoComplete="off"
            />
        </label>
        {errors?.author && (
            <p className="error">{errors.author.message}</p>
        )}
        <label>
            <span>Style:</span>
            <select
                {...register("style")}
                onChange={(e)=> setState((prevState)=>{
                    return {...prevState, style: e.target.value}
                })}
                value={state.style}
            >
                <option value="photo">Photo</option>
                <option value="oil">Oil</option>
                <option value="video">Video</option>
            </select>
        </label>
        <label>
            <span>Price:</span>
            <input 
                type="text" 
                placeholder="Photo price..."
                {...register("price", {    
                    required: "Photo's price is required.",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Price should be a number"
                    }
                })}
                onChange={(e)=> setState((prevState)=>{
                    return {...prevState, price: e.target.value}
                })}
                value={state.price}
                autoComplete="off"
            />
        </label>
        {errors?.price && (
            <p className="error">{errors.price.message}</p>
        )}
        <label>
            <span>avaiableUnits:</span>
            <input 
                type="text" 
                placeholder="avaiableUnits..."
                {...register("avaiableUnits", {
                    required: "avaiableUnits is required.",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "avaiableUnits should be a number"
                    }
                })}
                onChange={(e)=> setState((prevState)=>{
                    return {...prevState, avaiableUnits: e.target.value}
                })}
                value={state.avaiableUnits}
                autoComplete="off"
            />
        </label>
        {errors?.avaiableUnits && (
            <p className="error">{errors.avaiableUnits.message}</p>
        )}
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
