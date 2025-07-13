import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container hello'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>StockPredictor is a modern web application designed to provide users with insightful and accurate stock price predictions using advanced technologies. Built using React for the frontend and Django for the backend, the platform offers a seamless and responsive user experience. The application allows users to search for different stocks, view historical trends, and access future price forecasts powered by machine learning models. Data is fetched from reliable financial APIs and visualized using interactive charts, making it easier for users to analyze trends and make informed decisions. The backend is powered by Django Rest Framework (DRF), which manages API endpoints, user authentication, and database operations efficiently. React ensures smooth navigation and real-time data updates, enhancing overall usability. Whether you're a beginner in trading or an experienced investor, StockPredictor helps you stay one step ahead by leveraging data-driven insights. Users can register, log in securely, and save their favorite stocks to a personal dashboard. The combination of a powerful backend and a dynamic frontend ensures that the platform is fast, secure, and scalable.</p>
            <Button text='Login'/>

        </div>
    </div>
    </>
  )
}

export default Main