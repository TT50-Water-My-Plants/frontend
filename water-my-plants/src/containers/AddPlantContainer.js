import React from 'react'
import { connect } from 'react-redux'
import AddPlant from "../components/AddPlant"
import { addPlant } from "../actions"

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = {
  addPlant
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlant)
