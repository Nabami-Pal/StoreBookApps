import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
    return (
        <div >
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").closest()}
                        >✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                  
                    <div className='mt-4 space-y-2'>
                       <span>Email</span> 
                       <br/>
                       <input type="email"
                       placeholder='Enter your Email' className='w-80 px-3 border rounded-md outline-none '
                       {...register("email", { required: true })}
                       />
                       {errors.email && <span>This field is required</span>}
                    </div>
                    {/* password */}
                    <div className='mt-4 space-y-2'>
                       <span>Password</span> 
                       <br/>
                       <input type="text"
                       placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none '
                       {...register("password", { required: true })}
                       />
                       {errors.password && <span>This field is required</span>}
                    </div>
                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                       <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Login</button> 
                       <p>
                            Not registered?    
                            <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>

                       </p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
