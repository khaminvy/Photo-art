"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
// import { writeFile, readFile, readdir } from 'fs/promises'

export default function EditForm({id, photoName, author, style, price, avaiableUnits}) {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}}  = useForm({
        mode: "onBlur"
    })

    const [state, setState] = useState({author, style, price, avaiableUnits})
    const [isLoading, setIsLoading ] = useState(false) 
    
    const onError = (errors) => {
        console.log("Form error:", errors)
        console.log("isDirty:", isDirty)
    }

    const onSubmit = async (data) => {

        setIsLoading(true)

        // fs.readdirSync(__dirname + "/public/img").forEach(file => { 
        //     console.log(file); 
        // }); 

        const photo = { 
            photoName,
            author: data.author,
            style: data.style,
            price: data.price,
            avaiableUnits: data.avaiableUnits
        }
        const res = await fetch(`http://localhost:3000/api/photos/${id}`,
            {
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(photo)
            }
        )
        //if(res.status === 201){
            router.push('/photos')
            router.refresh()
       // }
    }

  return (
    <form className="w-1/2" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
        

        <button className="btn-primary" disabled={isLoading}>
            {isLoading && <span>Loading...</span>}
            {!isLoading && <span>Edit photo</span>}
        </button>
    </form>
   
  )
}
