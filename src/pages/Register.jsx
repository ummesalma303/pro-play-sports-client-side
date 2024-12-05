import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const navigate = useNavigate()
  const {createNewUser,setUser,updateUser,user} =useContext(AuthContext)
  const handleSignUp=e=>{
    e.preventDefault()
    const form = e.target
    const name=form.name.value
    const photo=form.photo.value
    const email=form.email.value
    const password=form.password.value
   
    const upperCase = /^(?=.*[A-Z]).*$/;
    const lowerCase = /^(?=.*[a-z]).*$/;


    if(password.length <6){
      alert('password mast be at least six carrcters')
      return
    }else if (!upperCase.test(password)) {
      alert('Must contain one uppercase')
      return
    }else if (!lowerCase.test(password)) {
      alert('Must contain one lowercase')
      return
    }


    const updateData={
      displayName:name,
      photoURL:photo}

    createNewUser(email,password)
    .then(res=>{
      
      updateUser(updateData)
      
      setUser({...user,...updateData})
      alert('user successfully sign Up')
      navigate('/')
    })
    .catch(err=>console.log(err.message))

  }
    return (
        <div className='flex justify-center items-center my-12'>
             <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
        </div>
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
        <p>Already Have An Account.Please <NavLink className='text-blue-500' to="/login">Login</NavLink></p>
        <div className="form-control mt-6">
          <button type='submit' className="btn bg-blue-500 text-white">Sigh Up</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Register;