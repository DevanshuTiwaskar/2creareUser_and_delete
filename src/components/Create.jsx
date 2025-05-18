import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';



const Create = (props) => {
  
    const users = props.users;
    const setUsers = props.setUsers;
    const { register, handleSubmit, reset, formState: {errors},   } = useForm()
    
    
    
    const submitHandler = (data) => {
        data.id = nanoid()
        const copyusers = [...users]
        copyusers.push(data)
        setUsers(copyusers)
        reset()
    } 

 





  return (
    <div>

         <h1>Create User</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("name", {
                        required: "input must not be empty",
                    })}
                    type="text"
                    placeholder="Name"
                />
                <p>{errors?.name?.message}</p>

                <input
                    {...register("age", {
                        required: "input must not be empty",
                    })}
                    type="number"
                    placeholder="Age"
                />
                <p>{errors?.name?.message}</p>
                <button>Submit</button>
            
        </form>

    </div>
  )
}

export default Create