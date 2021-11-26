import React from 'react'
import filterData from './filterData'
import DevTable from './DevTable'

const NodejsDeveloper = (props) => {
    const {candidates,updateCandidate}=props
    const data=filterData(candidates,'Node.js Developer')
    return (
        <div>
           <h2>Node.js Developer</h2> 
           <DevTable data={data} updateCandidate={updateCandidate}/>
        </div>
    )
}

export default NodejsDeveloper
