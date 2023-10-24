import React from 'react'
import Header from '../components/Header/Header'
import Router from '../routes/router'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/sidenav'
import Clientnav from '../components/Clientnav'

const Module = () => {
    const location = useLocation()
    console.log(typeof(location.pathname))
    console.log(location.pathname == "/ULogin")
    if(location.pathname == '/' ){
        console.log('hello')
        return (
            <div>
                {/* <h3>sadhkahdad</h3> */}
                <Header />
                <main className=''>
                    <Router />
                </main>
            </div>
        )
    }
    else if(location.pathname === '/UDashboard' || location.pathname === '/Uroom' || location.pathname === '/UFindLSP' || location.pathname === '/client/profile/:id' || location.pathname === '/FindArbritrator'){
        return(
            <div>
                <main className='bg-[#F5F5F5]'>
                   <Clientnav />
                    <div className='ml-[315px] '>
                    <Router />
                    </div>
                    
                </main>

            </div>

        )

    }
    
    else if(location.pathname === '/ULogin' || location.pathname == '/USignup' || location.pathname == '/provider/login' || location.pathname == '/provider/signup' || location.pathname == '/UHome' || location.pathname == '/room/456'){
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