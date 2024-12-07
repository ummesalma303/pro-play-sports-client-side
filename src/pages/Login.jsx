import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate()
    const {googleLoginUser,signInUser,setUser} =useContext(AuthContext)
    // console.log(googleLoginUser)

    const handleSignIn=e=>{
      e.preventDefault()
      const form = e.target

      const email=form.email.value
      const password=form.password.value
      // console.log(email,password)
      

      //   createNewUser(email,password)
      signInUser(email,password)
      .then(res=>{
        console.log(res)
        // alert('user successfully sign In')
        Swal.fire({
          title: "Success",
          text: "user successfully sign In",
          icon: "success"
        });
        setUser(res?.user)
        navigate('/')
      })
      .catch(err=>{
        Swal.fire({
          title: "Error",
          text: `${err.message}`,
          icon: "error"
        });
      })
  
    }

    const handleGoogleLogin = ()=>{
      googleLoginUser()
      .then((result) => {
        // setLoader( false)
        setUser(result.user)
        console.log(result.user)
        Swal.fire({
            title: "Success",
            text: "user successfully sign In",
            icon: "success"
          });
       
      }).catch((error) => {
        Swal.fire({
            title: "Error",
            text: `${error.message}`,
            icon: "error"
          });
      });
    }




    return (
      
<div className="flex justify-center items-center">

  
<div className=' my-12 card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl '>
 
 
 <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl ">
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
    <button type='button' onClick={handleGoogleLogin} className='btn w-full'><FcGoogle />Login With Google</button>
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