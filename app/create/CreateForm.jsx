// "use client"

// import { useRouter } from "next/navigation"

// import { useState } from "react"

// export default function CreateForm() {
//     const router = useRouter()

//     const [name, setName] = useState('')
//     const [author, setAuthor] = useState('')
//     const [style, setStyle ] = useState("")
//     // const [pho, setPho] = useState('')
//     const [price, setPrice] = useState('')
//     const [avaiableUnits, setAvaiableUnits] = useState(0)
//     const [selectedFile, setSelectedFile] = useState("")
//     const [isLoading, setIsLoading ] = useState(false)


    

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setIsLoading(true)



//         if(selectedFile){
//             const formData = new FormData()
//             formData.set('file', selectedFile, `${name}.jpg`)
//             const res = await fetch('/api/upload', {
//                 method: 'POST',
//                 body: formData
//             })
//             if (res.status === 201){
//                 router.refresh()
//                 router.push('/photos')
//             }
//         }

//         const photo = {
//             name, author, style, price, avaiableUnits
//         }


//         const res = await fetch('http://localhost:3000/api/photos',
//             {
//                 method: "POST",
//                 headers: {"Content-Type":"application/json"},
//                 body: JSON.stringify(photo)
//             }
//         )

//         if (res.status === 201){
//             router.refresh()
//             router.push('/photos')
//         }
//     }

//   return (
//     <form className="w-1/2" onSubmit={handleSubmit}>
//         <label>
//             <span>Name:</span>
//             <input 
//                 type="text" 
//                 required 
//                 onChange={e => {
//                     setName(e.target.value)
//                  }
//                 }
//                 value={name}
//             />
//         </label>
//         <label>
//             <span>Author:</span>
//             <input 
//                 type="text" 
//                 required 
//                 onChange={e => setAuthor(e.target.value)}
//                 value={author}
//             />
//         </label>
//         {/* <label>
//             <span>Pho:</span>
//             <input 
//                 type="text" 
//                 required 
//                 onChange={e => setPho(e.target.value)}
//                 value={pho}
//             />
//         </label> */}
//         <label>
//             <span>Style:</span>
//             <select name="style" required onChange={e => setStyle(e.target.value)} value={style}>
//                 <option value="photo">photo</option>
//                 <option value="video">video</option>
//                 <option value="oil">oil</option>
//             </select>
//         </label>
//         <label>
//             <span>avaiableUnits:</span>
//             <input 
//                 type="number" 
//                 required 
//                 onChange={e => setAvaiableUnits(e.target.value)}
//                 value={avaiableUnits}
//             />
//         </label>
//         <label>
//             <span>Price:</span>
//             <input 
//                 type="text" 
//                 required 
//                 onChange={e => setPrice(e.target.value)}
//                 value={price}
//             />
//         </label>
//         <label>
//             <span>Image:</span>
//             <input 
//                 type="file" 
//                 required 
//                 onChange={(e) => setSelectedFile(e.target.files?.[0])}
//             />
//         </label>

//         <button className="btn-primary" disabled={isLoading}>
//             {isLoading && <span>Loading...</span>}
//             {!isLoading && <span>Adding photo</span>}
//         </button>
//     </form>
   
//   )
// }


"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

export default function CreateForm() {
    const router = useRouter()

    const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}}  = useForm({
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

        if(selectedFile){
            const formData = new FormData()
            formData.set('file', selectedFile, `${data.photoName}.jpg`)
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
        // const res = await axios.post(
        //     'http://localhost:3000/api/photos',
        //     photo
        // )

        console.log(res)
        if (res.status === 201){
              router.refresh()
              router.push('/photos')
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
                   
                    required: true
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
                    pattern: {
                        value: /^[1-9]+$/,
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
