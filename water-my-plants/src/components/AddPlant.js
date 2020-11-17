import React, {useState} from 'react'
import {axiosWithAuth} from "../auth/axiosWithAuth"

function AddPlant({user, plants, addPlant, setUserPlants}) {
  const [form, setForm] = useState({
    nickname: "",
    species: "",
    h2o_frequency: ""
  })

  const [selectValue, setSelectValue] = useState("--Plants--")

  const [statusMsg, setStatusMsg] = useState("")

  const handleChange = (e) => {
    setStatusMsg("")
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const selectChange = (e) => {
    const { value, id } = e.target
    setSelectValue(value)
  } 

  const selectPlantSubmit = () => {
    console.log(parseInt(selectValue, 10), parseInt(user.id, 10))
    axiosWithAuth()
      .post(`api/plants/${selectValue}/users`, { plant_id: parseInt(selectValue, 10), user_id: parseInt(user.id, 10) })
      .then(res => {
        setUserPlants(res.data)
        setStatusMsg("Plant added!")
      })
  }


  const onSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post(`/api/plants/users/${user.userId}`, form)
    .then(res => {
      addPlant(res.data)
      setForm({
        nickname: "",
        species: "",
        h2o_frequency: ""
      })
      setStatusMsg("New Plant Has Been Successfully Added!")
    })
    .catch(err => {
      setStatusMsg("Sorry we were unable to add that plant, please try again.")
    })
  }
  return (
    <div>
      <div>
        <select value={selectValue} onChange={selectChange}>Plants
          {plants.map(plant => {
            return <option key={plant.id} id={plant.id} value={plant.id}>{plant.nickname}</option>
          })}
        </select>
        <button onClick={selectPlantSubmit}>Add Plant</button>
      </div>
      <p>{statusMsg}</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nickname">Nickname: 
            <input type="text" name="nickname" id="nickname" value={form.nickname} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="species">Species: 
            <input type="text" name="species" id="species" value={form.species} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="h2o_frequency">H20 Frequency: 
            <input type="text" name="h2o_frequency" id="h2o_frequency" value={form.h2o_frequency} onChange={handleChange} />
          </label>
        </div>
        <button>Add Plant</button>
      </form>
    </div>
  )
}

export default AddPlant
