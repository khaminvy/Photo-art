"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Contact() {

  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: 'onBlur',
    defaultValues: {
        fname: "",
        lname: "",
        email: "",
        message: ""
    }
});
  let [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    let message = {
            
      ...state
    };  

    console.log(message)
    setState({
        fname: '',
        lname: '',
        email: '',
        message: ''     
    })    
    setIsLoading(true);
    fetch('http://localhost:4000/message',{
      method: 'POST',
      headers: { "content-Type": "application/json"},
      body: JSON.stringify(message)
    }).then(()=>{
      setIsLoading(false);
      router.refresh()
      router.push('/photos')
     })
  }

  return (
   <main>
        <h2 className="text-center">Contact Page</h2>
        <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}> 
          <label>
            <span>First Name:</span>
            <input 
              type="text"
              placeholder="First Name"
              {...register("fname", {
                      required: 'First name is required',
                      minLength: {
                          value: 3,
                          message: "First name is more than 2 characters,"
                      }
                  }
              )}
              value={state.fname}
              onChange={(e)=> setState((prevState)=>{
                  return {...prevState, fname: e.target.value}
              })}
            />
          </label>
          {errors.fname && (
            <p className="error">{errors.fname.message}</p>
          )}
                            
          <label>
            <span>Last Name:</span>
            <input  
              type="text"
              placeholder="Last Name"
              {...register("lname", {
                required: 'Last name is required',
                minLength: {
                    value: 3,
                    message: "last name is more than 2 characters,"
                }
              }
            )}
            value={state.lname}
            onChange={(e)=> setState((prevState)=>{
                return {...prevState, lname: e.target.value}
            })}
            />
            {errors.lname && (
              <p className="error">{errors.lname.message}</p>
            )}
          </label>
          <label>
            <span>Email:</span>
            <input 
              type="email" 
              placeholder="email here."
              {...register("email", {
                  required:"email is required.",
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
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </label>
          <label>
            <span>Message:</span>
            <textarea 
              type="text" 
              placeholder="Message..."
              cols="30" 
              rows="10" 
              {...register("message")}
              value={state.message}
                onChange={(e)=> setState((prevState)=>{
               return {...prevState, message: e.target.value}
              })}
            />
          </label>
          {!isLoading && <button type="submit" className="btn btn-primary">Submit</button>}
          {isLoading && <button type="submit" className="btn btn-primary" disabled>Submit</button>}
        </form>
   </main>
  )
}
