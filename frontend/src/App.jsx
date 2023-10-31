import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import Module from './modules/Module'
// import Test from './components/test'

function App() {


  return (
    <>
      <BrowserRouter>
        <Module />
        {/* <Test /> */}

      </BrowserRouter>

    </>
  )
}

export default App
