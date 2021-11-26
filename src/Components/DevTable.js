import React,{useState} from 'react'
import moment from 'moment'
import swal from '@sweetalert/with-react'
import axios from 'axios';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const DevTable = (props) => {
    const {data,updateCandidate}=props
    const [userDetailes,setDetails]=useState({})

    const handleDetails=(id)=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`,
        {
            headers:{
                'x-auth':id
            }
        })
        .then((res)=>{
            const result=res.data
            setDetails(result)
            swal(userDetailes.phone,userDetailes.email
            )
        })
        .catch((err)=>{
            alert(err.message)
        })
        
     
        
         
        
        
    }
    const handleReject=(id)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
            'status':'rejected'
        },
        {
            headers:{
                'x-auth':id
            }
        })
        .then((res)=>{
            updateCandidate(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const handleShortlist=(id)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
            'status':'Shortlisted'
        },
        {
            headers:{
                'x-auth':id
            }
        })
        .then((res)=>{
            updateCandidate(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div>
         <table>
         <thead>
             <tr>
                 <th>Name</th>
                 <th>Technical skills</th>
                 <th>Experience</th>
                 <th>Applied date</th>
                 <th>View details</th>
                 <th>Application Update Status</th>
             </tr>
         </thead> 
         <tbody>
         {
            data.map(ele=>{
                return(
                    <tr>
                        <td>{ele.name}</td>
                        <td>{ele.skills}</td>
                        <td>{ele.experience}</td>
                        <td>{moment(ele.createdAt).subtract(10, 'days').calendar()}</td>
                        <td><button onClick={()=>{
                            handleDetails(ele._id)
                        }}>view details</button></td>
                        {
                            (ele.status =='shortlisted'|| ele.status =='rejected' )? (
                              <button>{ele.status}</button>
                            ):(
                                <React.Fragment>
                                <button name='shortlist' value='shortlist' onClick={()=>{
                                    handleShortlist(ele._id)
                                }}>shortlist</button>
                                <button name='reject' value='reject' onClick={()=>{
                                    handleReject(ele._id)
                                }}>reject</button>
                                </React.Fragment>
                            )
                        }
                    </tr>
                )
            })
         }    
         </tbody>   
         </table>   
        </div>
    )
}

export default DevTable
