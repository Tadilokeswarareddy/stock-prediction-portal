
import  { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashbord = () => {
    
    useEffect(()=>{
        const fetchProtectedData = async ()=>{
            try{
                const response = await axiosInstance.get('/protected-view/')
                console.log(`success`,response.data)


            }catch(error){
                console.error("there is an error",error)
            }


        }
        fetchProtectedData();
    },[])
  return (
    <div className='text-light'>Dashbord</div>
  )
}

export default Dashbord