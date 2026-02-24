import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ujjwalmahajan2903")
    //     .then(res => res.json())
    //     .then(data => {
    //     setData(data)
    // })
    // }, [])

  return (
    <div className='bg-gray-700 text-white text-3xl p-4 text-center'>Github Followers: {data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300} />
        </div>
  )
} 

export default Github

export const GithubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/ujjwalmahajan2903")
        return response.json()


    }