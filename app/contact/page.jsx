"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { DevTool } from "@hookform/devtools"

export default function Contact() {

  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm({
    defaultValues:{
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }, 
    mode: "onBlur"
  });

  let [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const onError = (errors) => {
    console.log("Form error:", errors)
    console.log("isDirty:", isDirty)
  }

  const onSubmit = async (data) => {

    let message = {...data};  
    setState({firstName: '', lastName: '', email: '', message: '' })  

    console.log(message)

    const res = await fetch('http://localhost:3000/api/messages',{
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
   <main className="drop-shadow-sm">
        <h2 className="text-center">Contact Page</h2>
        <form className="w-1/2 text-black" onSubmit={handleSubmit(onSubmit, onError)} noValidate> 
          <label>
            <span>First Name:</span>
            <input 
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                      required: 'First name is required',
                  }
              )}
              value={state.firstName}
              autoComplete="off"
              onChange={(e)=> setState((prevState)=>{
                  return {...prevState, firstName: e.target.value}
              })}
            />
          </label>
          {errors?.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
                            
          <label>
            <span>Last Name:</span>
            <input  
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: 'Last name is required',
              }
            )}
            value={state.lastName}
            autoComplete="off"
            onChange={(e)=> setState((prevState)=>{
                return {...prevState, lastName: e.target.value}
            })}
            />
            {errors?.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </label>
          <label>
            <span>Email:</span>
            <input 
              type="email" 
              placeholder="email here."
              {...register("email", {
                  required: 'Email is required',
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
