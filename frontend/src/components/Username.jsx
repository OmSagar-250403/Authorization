import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';

import styles from "../styles/Username.module.css"

const Username = () => {
  return (

    <div className="container mx-auto">
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>

                <form className="py-1">

                    <div className='profile flex justify-center py-4'>
                        <FaUser size={32} color="#007bff" /> {/* adjust size and color to your liking */}
                    </div>

                    <div className="textbox flex flex-col items-center gap-6">
                        <input type="text" placeholder='Username' />
                        <button type='submit'>Let's Go</button>
                    </div>

                    <div className="text-center py-4">
                        <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Username