// import React from 'react'

// import { response } from "express"
import { useEffect, useState } from "react"

export default function GitHub() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/itaintlene`)
        .then(response => response.json())
        .then(data =>{
            setData(data)
        })
    })
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
    GitHub Repositories: {data.public_repos}
    <img src={data.avatar_url} alt="git-picture" width={300}></img>
    </div>
  )
}

