

function filterData(candidates,role) {
    const result=candidates.filter(ele=>{
        return ele.jobTitle == role
    })
    return result
}

export default filterData
