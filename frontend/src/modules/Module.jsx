import React from 'react'
import Header from '../components/Header/Header'
import Router from '../routes/router'

const Module = () => {
  return (
    <div>
        <Header />
        <main className=''>
            <Router />
        </main>
    </div>
  )
}

export default Module