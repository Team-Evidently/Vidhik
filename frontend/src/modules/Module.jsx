import React from 'react'
import Header from '../components/Header/Header'
import Router from '../routes/router'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/sidenav'

const Module = () => {
    const location = useLocation()
    console.log(location.pathname)
    if(location.pathname === '/login' || location.pathname === '/register'){
        return (
            <div>
                <main className=''>
                    <Router />
                </main>
            </div>
        )
    }
    else{
        return (
            <div>
                <Header />
                <main className=''>
                    <Sidebar />
                    <div className='ml-[340px] '>
                    <Router />
                    </div>
                    
                </main>
                {/* <main className='flex w-full'>
                    <Sidebar />
                    <div className=''>
                    <Router />
                    </div>
                    
                    
                </main> */}
            </div>
        )
    }
}

export default Module