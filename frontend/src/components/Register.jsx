import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const [username,setUserName]= useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError] = useState({})
  const [succesfull,setSuccesfull] = useState(false)

  const handleRegistration= async (e)=>{
    e.preventDefault();
    const userData = {
      username,email,password
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log(response.data)
      console.log("registration succesfull")
      setError({})
      setSuccesfull(true)
      
    } catch (error) {
      console.error(response.data.error)
      setError(error.response.data)
    }

  }
  return (
    <>
    <div className="container mb-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 bg-light-dark p-5 rounded-4">
          <h3 className="text-light text-center mb-5">Create a account</h3>
          <form onSubmit={handleRegistration}>
            <input type='text' className='form-control mb-4 ' placeholder='Enter your username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <input type='email' className='form-control mb-4' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' className='form-control mb-5' placeholder='set password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {
              succesfull && <div className='alert alert-success'>Registration succesfull</div>
            }
            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>

          </form>
        </div>

      </div>
    </div>
    </>
  )
}

export default Register