import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import ApplicationDashboard from './ApplicationDashboard'
import ApplicationForm from './ApplicationForm'
import NavBar from './Components/NavBar'


const App = (props) => {
  const [candidates, setCandidates] = useState([])
  useEffect(() => {
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
      .then((res) => {
        setCandidates(res.data)
        console.log(res.data)
      })
  }, [])
  //to Add the Candidates who have applied
  const AddCandidates = (candidate) => {
    setCandidates([...candidates, candidate])
  }
  const updateCandidate = (candidate) => {
    const result = candidates.map(c => {
      if (c._id == candidate._id) {
        return { ...candidate }
      } else {
        return { ...c }
      }

    })
    setCandidates(result)
  }
  return (
    <div>
      <Link to='/'>Application Form</Link> |
      <Link to='/Dashboard'> Dashboard</Link>

      <Route path='/' exact={true} render={() => {
        return <ApplicationForm AddCandidates={AddCandidates} />
      }} />
      <Route path='/Dashboard' render={(props) => {
        return <ApplicationDashboard {...props} candidates={candidates} updateCandidate={updateCandidate} />
      }} />

    </div>
  )
}

export default App
