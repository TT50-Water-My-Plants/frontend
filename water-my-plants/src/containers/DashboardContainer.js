import React from 'react'
import { connect } from 'react-redux'
import Dashboard from "../components/Dashboard"
import {setUser, setLoggedStatus, setPlants} from "../actions"

const mapStateToProps = (state) => ({
  user: state.user,
  plants: state.plants
})

const mapDispatchToProps = {
  setUser,
  setLoggedStatus,
  setPlants
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
