import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {googleLoginUser} =useContext(AuthContext)
    // console.log(googleLoginUser)

    const {createNewUser} =useContext(AuthContext)
    const handleSignUp=e=>{
      e.preventDefault()
      const form = e.target
      const name=form.name.value
      const photo=form.photo.value
      const email=form.email.value
      const password=form.password.value
      console.log(name,photo,email,password)
      const upperCase = /^(?=.*[A-Z]).*$/;
      const lowerCase = /^(?=.*[a-z]).*$/;
  
  
      if(password.length <5){
        alert('password mast be six carrcters')
        return
      }else if (!upperCase.test(password)) {
        alert('Must contain one uppercase')
        return
      }else if (!lowerCase.test(password)) {
        alert('Must contain one lowercase')
        return
      }
  
      createNewUser(email,password)
      .then(res=>{
        console.log(res)
        alert('user successfully sign Up')
      })
      .catch(err=>console.log(err.message))
  
    }






    return (
        // <div className='h-[60vh]'>
       








        // </div>




<div className='flex justify-center items-center my-12'>
  <div className="">
  <div className='text-center'>
   <button onClick={googleLoginUser} className='btn'><FcGoogle />Login With Google</button>
    </div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<form onSubmit={handleSignUp} className="card-body">


<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" placeholder="email" name='email' className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" placeholder="password" name='password' className="input input-bordered" required />

</div>
<p>Don't have an account. Please <NavLink className='text-blue-500' to="/register">Register</NavLink></p>
<div className="form-control mt-6">
<button type='submit' className="btn bg-blue-500 text-white">Sigh Up</button>
</div>
</form>
</div>
  </div>
</div>
    );
};

export default Login;