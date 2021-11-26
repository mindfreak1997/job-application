import React from 'react'
import { Link,Route } from 'react-router-dom'
import FrontEndDeveloper from './FrontEndDeveloper'
import FullStackDeveloper from './FullStackDeveloper'
import MEANstackDeveloper from './MEANstackDeveloper'
import NodejsDeveloper from './NodejsDeveloper'

function NavBar(props) {
    const {candidates,updateCandidate}=props
    return (
        <div>
          <ul>
            <li><Link to='/Dashboard/front-end-devoloper'>Front-End Developer</Link></li>
            <li><Link to='/Dashboard/Node.js-developer'>Node.js Developer</Link></li>
            <li><Link to='/Dashboard/MEAN-stack-developer'>MEAN Stack Developer</Link></li>
            <li><Link to='/Dashboard/Full-stack-developer'>Full Stack Developer</Link></li>
          </ul>
          <Route path='/Dashboard/front-end-devoloper'  render={(props)=>{
              return <FrontEndDeveloper {...props} candidates={candidates} updateCandidate={updateCandidate}/>
          }}/>
          <Route path='/Dashboard/Node.js-developer' render={(props)=>{
              return <NodejsDeveloper  {...props} candidates={candidates} updateCandidate={updateCandidate}/>
          }}/>
          <Route path='/Dashboard/MEAN-stack-developer' render={(props)=>{
              return <MEANstackDeveloper  {...props} candidates={candidates} updateCandidate={updateCandidate}/>
          }}/>
          <Route path='/Dashboard/Full-stack-developer' render={(props)=>{
              return <FullStackDeveloper  {...props} candidates={candidates} updateCandidate={updateCandidate}/>
          }}/>
         
        </div>


    )
}

export default NavBar
