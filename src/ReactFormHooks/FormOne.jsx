import React from 'react'
import {useForm} from 'react-hook-form';
import './styles.css'
function FormOne() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: {errors,isSubmitting},
  } = useForm()


  const delay = (d) => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)

    if(data.username !== "miso") {
      setError("myForm", {message:"You are not miso "} )
    } 
    if(data.username === "rohan") {
      setError("blocked", {message:"sorry this uyser is blocked "} )

    }
  }

  console.log(watch("example"));


  return (
    <>
    {isSubmitting && <div>Loading....</div>}
    <form onSubmit ={handleSubmit(onSubmit)}>
      <label >
    UserName: 
      <input  {...register("username",{required:true , minLength:{value:3, message: "You message should be be greater then the 3 "}, maxLength:{value:8,message:"Oe alu message alik dherai rakh"}})} />
      {errors.username && <div>{errors.username.message}</div>}
      </label>

      <label>
        Passwords 
      <input  {...register("password",{required:true})} />
      {errors.password && <span>Please enter your email </span>}
      </label>
      <input disabled={isSubmitting} type="submit" />
      {errors.myForm && <div>{errors.myForm.message}</div>}
      {errors.blocked && <div>{errors.blocked.message}</div>}
    </form>
    </>
  )
}

export default FormOne
