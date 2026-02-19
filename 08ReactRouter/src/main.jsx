import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,Contacts,About,User,Github} from './Components/Index.js'
import { GithubInfoLoader } from './Components/GitHub/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children: [
//       {path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contacts",
//         element: <Contacts/>
//       }
//     ]
//   }
// ])  

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader = {GithubInfoLoader}
      path="github" 
      element={<Github/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
