import React from 'react'
import DevTable from './Components/DevTable'
import NavBar from './Components/NavBar'


const ApplicationDashboard = (props) => {
  const {candidates,updateCandidate}=props
    return (
        <div>
          <h2>Admin DashBoard</h2>
          <NavBar candidates={candidates} updateCandidate={updateCandidate}/>
          <DevTable data={candidates} updateCandidate={updateCandidate}/>
        </div>
    )
}

export default ApplicationDashboard
