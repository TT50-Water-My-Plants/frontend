import React from 'react'
import { connect } from 'react-redux'
import EditPlant from "../components/EditPlant"

const mapStateToProps = (state) => ({
  plants: state.plants
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant)
