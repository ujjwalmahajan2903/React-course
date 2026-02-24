import './App.css'
import Login from './Componnent/Login'
import Profile from './Componnent/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <>
    <div>Welcome to website</div>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
