import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import Module from './modules/Module'

function App() {


  return (
    <>
      <BrowserRouter>
        <Module />

      </BrowserRouter>

    </>
  )
}

export default App
