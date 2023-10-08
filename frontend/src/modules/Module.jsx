import React from 'react'
import Header from '../components/Header/Header'
import Router from '../routes/router'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/sidenav'

const Module = () => {
    const location = useLocation()
    console.log(typeof(location.pathname))
    console.log(location.pathname == "/ULogin")
    if(location.pathname === '/'){
        return (
            <div>
                <Header />
                <main className=''>
                    <Router />
                </main>
            </div>
        )
    }
    else if(location.pathname === '/ULogin' || location.pathname == '/USignup' || location.pathname == '/provider/login' || location.pathname == '/provider/signup' || location.pathname == '/UHome'){
        return(
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
                {/* <Header /> */}
                <main className='bg-[#F5F5F5]'>
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