
import  { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner } from '@fortawesome/free-solid-svg-icons'

const Dashbord = () => {
    const [ticker,setTicker]=useState('')
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)
    const [plot,setPlot]=useState()
    const [ma100,setMa100] = useState()
    const [ma200,setMa200] = useState()
    const [finalPre,setFinalPre] = useState()
    const [mse,setMse]=useState()
    const [rmse,setRmse]=useState()
    const [r2,setR2]=useState()
    
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
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
            const response = await axiosInstance.post('/predict/',{
                ticker:ticker
            })
            console.log(response.data)
            const backendRoot = import.meta.env.VITE_BACKEND_ROOT
            const plotUrl = `${backendRoot}${response.data.plot_img}`
            const ma100Url = `${backendRoot}${response.data.plot_100_dma}`
            const ma200Url = `${backendRoot}${response.data.plot_200_dma}`
            const finalpredictionUrl = `${backendRoot}${response.data.plot_prediction}`
            setPlot(plotUrl)
            setMa100(ma100Url)
            setMa200(ma200Url)
            setFinalPre(finalpredictionUrl)
            setMse(response.data.mse)
            setRmse(response.data.rmse)
            setR2(response.data.r2)
            if(response.data.error){
                setError(response.data.error)
            }

        }catch(error){
            console.error("there is an error")
        }finally{
            setLoading(false)
        }

    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder='Enter stock ticker' value={ticker} onChange={(e)=>setTicker(e.target.value)}required/>
                    <small>{error && <div className='text-danger mt-3'>{error}</div>}</small>
                    <button type='submit' className='btn btn-info mt-3'>
                        {loading ? <span><FontAwesomeIcon icon={faSpinner} spin />please wait...</span>:'predict'}
                    </button>
                </form>
            </div>
            {finalPre &&(
            <div className="prediction mt-5">
                <div className="p-5">
                    {plot && (
                        <img src={plot} style={{maxWidth:'100%'}}/>
                    )}
                </div>
                <div className="p-5">
                    {ma100 &&(
                        <img src={ma100} style={{maxWidth:'100%'}}/>
                    )}
                </div>
                <div className="p-5">
                    {ma200 &&(
                        <img src={ma200} style={{maxWidth:'100%'}}/>
                    )}
                </div>
                <div className="p-5">
                    {finalPre &&(
                        <img src={finalPre} style={{maxWidth:'100%'}}/>
                    )}
                </div>
                <div className="text-light p-3">
                    <h4>model evalution: </h4>
                    <p>Mean Squared error: {mse}</p>
                    <p>Root Mean Squared error: {rmse}</p>
                    <p>R-squared: {r2}</p>                    
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Dashbord