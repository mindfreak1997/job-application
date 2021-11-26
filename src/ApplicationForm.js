import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ApplicationForm = (props) => {
    const {AddCandidates}=props
    const [Name,setName]=useState('')
    const [email,setemail]=useState('')
    const [Contact,setContact]=useState('')
    const [Applying,setApplying]=useState('')
    const [experience,setExperience]=useState('')
    const [technicalSkils,setSkills]=useState('')
    const [formErrors,setErrors]=useState({})

    const handleChange=(e)=>{
        if(e.target.name=='name'){
            setName(e.target.value)
        }else if(e.target.name=='email'){
            setemail(e.target.value)
        }else if(e.target.name=='contact'){
           setContact (e.target.value)
        }else if(e.target.name=='apply'){
            setApplying(e.target.value)
        }else if(e.target.name=='experience'){
            setExperience(e.target.value)
        }else if(e.target.name=='skills'){
           setSkills(e.target.value)
        } 

    }
    const errors={}
    const runValidation=()=>{
        if(Name.length==0){
            errors.name='name cannot be blank'
        }
        if(email.length==0){
            errors.email='email cannot be blank'
        }
        if(Contact.length==0){
            errors.Contact='contact cannot be blank'
        }
        if(Applying.length==0){
            errors.jobTitle='select any one'
        }
        if(experience.length==0){
            errors.experience='experience cannot be blank'
        }
        if(technicalSkils.length==0){
            errors.skills='skills cannot be blank'
        }
        
        
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors('')
        runValidation()
        if(Object.keys(errors)== 0){
            const formData={
                name:Name,
                email:email,
                phone:Contact,
                skills:technicalSkils,
                jobTitle:Applying,
                experience:experience
            }
            axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
            .then((res)=>{
                const result=res.data
                AddCandidates(result)
                console.log('api',result)
                alert('applied successfully')
                if(Object.keys(result).length > 0){
                    setName('')
                    setemail('')
                    setContact('')
                    setApplying('')
                    setExperience('')
                    setSkills('')
                }
            })
            .catch((err)=>{
                alert(err.message)
            }) 
        }else{
            setErrors(errors)
        }
        
        
       
        
    }
    return (
        <div>
            <h2>Apply for Job</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type='text' value={Name} name='name' onChange={handleChange}/>
          {
              formErrors.name && <span style={{color:'red'}}>{formErrors.name}</span>
          }  <br/>
          <lable>Email address</lable> 
          <input value='text' value={email} name='email' placeholder='example@gmail.com' onChange={handleChange}/>
          {
              formErrors.email && <span style={{color:'red'}}>{formErrors.email}</span>
          }
          <br/>
          <label>Contact No</label>
          <input type='text' value={Contact} name='contact' onChange={handleChange}/>
          {
              formErrors.Contact && <span style={{color:'red'}}>{formErrors.Contact}</span>
          }
          <br/>
          <label>Applying for a Job</label>
          <select value={Applying} name='apply' onChange={handleChange}>
              <option value=''>Select--</option>
              <option value='Front-End Developer'>Front-End-developer</option>
              <option value='Node.js Developer '>Nodejs Developer</option>
              <option value='MEAN Stack Developer'>MEAN stack Developer</option>
              <option value='FULL Stack Develper'>Full Stack Develper</option>
          </select>
          {
              formErrors.jobTitle && <span style={{color:'red'}}>{formErrors.jobTitle}</span>
          }
          <br/>
          <label>Experience</label>
          <input type='text' value={experience} name='experience' placeholder='experience(2 years 3 months' onChange={handleChange}/>
          {
              formErrors.experience && <span style={{color:'red'}}>{formErrors.experience}</span>
          }
          <br/>
          <label>Technical skills</label>
          <textarea type='text' value={technicalSkils}  name='skills' onChange={handleChange}/>
          {
              formErrors.skills && <span style={{color:'red'}}>{formErrors.skills}</span>
          }
          <br/>
          <input type='submit' value='save'/>
        </form>   
        </div>
    )
}

export default ApplicationForm
