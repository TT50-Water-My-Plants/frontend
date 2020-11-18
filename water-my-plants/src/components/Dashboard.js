import React, { useEffect } from 'react'
import { axiosWithAuth } from "../auth/axiosWithAuth"

function Dashboard({user, userPlants, setUser, setUserPlants, setPlants}) {
  useEffect(() => {
    const id = localStorage.getItem("user_id")
    axiosWithAuth()
      .get(`/api/account/${id}`)
      .then(res => {
        setUser(res.data.user)
      })
      .catch(err => {
        console.log(err)
      })

    axiosWithAuth()
      .get(`/api/plants/users/${id}`)
      .then(res => {
        setUserPlants(res.data)
      })
    axiosWithAuth()
      .get(`/api/plants`)
      .then(res => {
        setPlants(res.data)
      })
  }, [setPlants, setUser, setUserPlants])

  return (
    <div>
      {user !== null ? (
        <div>
          <p>{user.username}</p>
          <p>{user.phone_number}</p>
          <p>{user.userId}</p>
        </div>
      ): <p>Loading ...</p>}
      
      <div className="plants">
        {userPlants.map(item => {
          return (
          <div key={item.id}>
            <p>Nickname: {item.nickname} Species: {item.species} Frequency: {item.h2o_frequency}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
