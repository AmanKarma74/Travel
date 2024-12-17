import React, { useState } from 'react'
import '../styles/addData.scss'

function AddData() {

const [image, setImage] = useState("") 
const [placeName, setPlaceName] = useState("")
const [location, setLocation] = useState("")
const [price, setPrice] = useState()
const [grade, setGrade] = useState("")
const [description, setDescription] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();
}


  return (
    <div className="mainAddLead">
    <div className="container">

      <div className="headingDiv">
        <h3>Trove Travel</h3>
        <p className="heading">Add Destination</p>

      </div>
  
        <div className="formDiv">
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input value={image} onChange={(e)=>setImage(e.target.value)} id="profileInput" name="image" type="file" required className='detail' />
            <input value={placeName} onChange={(e)=>setPlaceName(e.target.value)} name="name" type="text" placeholder="Place Name" required className="detail" />
            <input value={location} onChange={(e)=>setLocation(e.target.value)} name="location" type="text" placeholder="Location" required className="detail" />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} name="price" type="number" placeholder="Price" required className="detail" />
            <input value={grade} onChange={(e)=>setGrade(e.target.value)} name="grade" type="text" placeholder="Grade" required className="detail" />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} name="description" type="text" placeholder="Description" required className="detail" />
  
            <input onClick={handleSubmit}  type="submit" className="btn int" id="addLeadbtn" value="Add Destination"/>          
          </form>
        </div>

      
    </div>
  </div>
  )
}

export default AddData