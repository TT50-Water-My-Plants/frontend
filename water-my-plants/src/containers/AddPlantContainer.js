import React from 'react'
import { connect } from 'react-redux'
import AddPlant from "../components/AddPlant"
import { addPlant, setUserPlants, setUser } from "../actions"

const mapStateToProps = (state) => ({
  user: state.user,
  plants: state.plants
})
const mapDispatchToProps = {
  addPlant,
  setUserPlants,
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlant)
