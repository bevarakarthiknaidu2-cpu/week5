import { useState } from 'react'
import AuthContainer from './components/AuthContainer'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <AuthContainer/>
    </>
  )
}

export default App
