import React from 'react'
import filterData from './filterData'
import DevTable from './DevTable'

const FullStackDeveloper = (props) => {
    const {candidates,updateCandidate}=props
    const data=filterData(candidates,'FULL Stack Developer')
    return (
        <div>
          <h2>Full Stack Developer</h2>  
        <DevTable data={data} updateCandidate={updateCandidate}/>
        </div>
    )
}

export default FullStackDeveloper
