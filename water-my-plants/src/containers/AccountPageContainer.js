import React from 'react'
import { connect } from 'react-redux'
import AccountPage from "../components/AccountPage"

const mapStateToProps = (state) => ({
  user: state.user,
  plants: state.plants
})

export default connect(mapStateToProps)(AccountPage)
