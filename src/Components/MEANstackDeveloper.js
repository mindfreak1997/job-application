import React from 'react'
import filterData from './filterData'
import DevTable from './DevTable'

const MEANstackDeveloper = (props) => {
    const {candidates,updateCandidate}=props
    const data=filterData(candidates,'MEAN Stack Developer')
    return (
        <div>
           <h2>MEAN Stack Developer</h2>  
          <DevTable data={data} updateCandidate={updateCandidate}/> 
        </div>
    )
}

export default MEANstackDeveloper
