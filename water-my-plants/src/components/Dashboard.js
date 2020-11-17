import React, { useEffect } from 'react'
import { axiosWithAuth } from "../auth/axiosWithAuth"

function Dashboard({user, plants, setPlants}) {
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plants/users/${user.userId}`)
      .then(res => {
        setPlants(res.data)
      })
  }, [user.userId, setPlants])
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.phone_number}</p>
      <p>{user.userId}</p>
      <div className="plants">
        {plants.map(item => {
          return (
          <div>
            <p>{item.nickname}</p>
            <p>{item.species}</p>
            <p>{item.h2o_frequency}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
