import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@material-tailwind/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button className='bg-green-200' onClick={() => alert("Clicked")}>Button</Button>
    </>
  )
}

export default App
