import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {googleLoginUser,signInUser,setUser} =useContext(AuthContext)
    // console.log(googleLoginUser)

    const handleSignIn=e=>{
      e.preventDefault()
      const form = e.target

      const email=form.email.value
      const password=form.password.value
      console.log(email,password)
      

      //   createNewUser(email,password)
      signInUser(email,password)
      .then(res=>{
        console.log(res)
        alert('user successfully sign In')
        setUser(res.user)
        navigate('/')
      })
      .catch(err=>console.log(err.message))
  
    }






    return (
      

<div className='flex justify-center items-center my-12'>
  <div className="">
 
<div className="card bg-base-100 shadow-lg">
<form onSubmit={handleSignIn} className="card-body">


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
<button type='submit' className="btn bg-blue-500 text-white">Login</button>
</div>
{/* google */}
<div className='text-center'>
   <button type='button' onClick={googleLoginUser} className='btn w-full'><FcGoogle />Login With Google</button>
</div>


</form>
{/* google
<div className='text-center'>
   <button onClick={googleLoginUser} className='btn'><FcGoogle />Login With Google</button>
</div> */}
</div>
  </div>
</div>
    );
};

export default Login;