import React from "react";
import { useForm } from "react-hook-form";

function FormValidation() {

    const {
        register,
        handleSubmit,
        watch,
        formState:{error}
    } = useForm();

    const onSubmit = (data) => {
        alert(json.stringify(data));
    }

    console.log(watch("example"));

  return (
    <>
    <form handleSubmit={onsubmit}>
        <label>First Name</label>
        <input type="text" {...register("firstname",{required:true,maxLength:10, pattern: /^[A-Za-z]+$/i})} />
        {error.firstname?.type === "required" && <p>This is field of required </p>}
        {error.firstname?.type = "max-length" && (
            <p>First name is matharchod bhosdkine</p>
        )}
    </form>
    </>
  )
}

export default FormValidation
