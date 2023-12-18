"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { DevTool } from "@hookform/devtools"

export default function Contact() {

  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm({
    defaultValues:{
      fname: "",
      lname: "",
      email: "",
      message: ""
    }, 
    mode: "onBlur"
  });

  let [state, setState] = useState({
    fname: '',
    lname: '',
    email: ''
  })
  // const [isLoading, setIsLoading] = useState(false);

  const onError = (errors) => {
    console.log("Form error:", errors)
    console.log("isDirty:", isDirty)
  }

  const onSubmit = async (data) => {

    let message = {...data};  
    setState({fname: '', lname: '', email: '', message: '' })  

    const res = await fetch('http://localhost:4000/message',{
      method: 'POST',
      headers: { "content-Type": "application/json"},
      body: JSON.stringify(message)
    })


    if (res.status === 201){
      router.refresh()
      router.push('/photos')
     }
  }

  return (
   <main>
        <h2 className="text-center">Contact Page</h2>
        <form className="w-1/2 drop-shadow-lg" onSubmit={handleSubmit(onSubmit, onError)} noValidate> 
          <label>
            <span>First Name:</span>
            <input 
              type="text"
              placeholder="First Name"
              {...register("fname", {
                      required: 'First name is required',
                  }
              )}
              value={state.fname}
              autoComplete="off"
              onChange={(e)=> setState((prevState)=>{
                  return {...prevState, fname: e.target.value}
              })}
            />
          </label>
          {errors?.fname && (
            <p className="error">{errors.fname.message}</p>
          )}
                            
          <label>
            <span>Last Name:</span>
            <input  
              type="text"
              placeholder="Last Name"
              {...register("lname", {
                required: 'Last name is required',
              }
            )}
            value={state.lname}
            autoComplete="off"
            onChange={(e)=> setState((prevState)=>{
                return {...prevState, lname: e.target.value}
            })}
            />
            {errors?.lname && (
              <p className="error">{errors.lname.message}</p>
            )}
          </label>
          <label>
            <span>Email:</span>
            <input 
              type="email" 
              placeholder="email here."
              {...register("email", {
                  pattern:{
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid'
                  }
              })}
              value={state.email}
              onChange={(e)=> setState((prevState)=>{
                return {...prevState, email: e.target.value}
              })}
            />
            {errors?.email && (
              <p className="error">{errors?.email?.message}</p>
            )}
          </label>
          <label>
            <span>Message:</span>
            <textarea 
              type="text" 
              placeholder="Message..."
              cols="30" 
              rows="5" 
              {...register("message")}
              value={state.message}
                onChange={(e)=> setState((prevState)=>{
               return {...prevState, message: e.target.value}
              })}
            />
          </label>
          <button type="submit" disabled={isDirty || !isValid} className="button btn-primary">submit</button>
        </form>
        {/* <DevTool control={control}/> */}
   </main>
  )
}
