import React from 'react'
import DevTable from './DevTable'
import filterData from './filterData'

const FrontEndDeveloper = (props) => {
    const {candidates,updateCandidate}=props
    const data=filterData(candidates,'Front-End Developer')
    return (
        <div>
         <h2>Front-end Developers</h2>   
            <DevTable data={data} updateCandidate={updateCandidate}/>
        </div>
    )
}

export default FrontEndDeveloper
