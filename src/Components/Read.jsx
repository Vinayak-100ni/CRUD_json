import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {

 const [values, setValues] = useState();

 const { id } = useParams();

 useEffect(() => {
  axios.get(`http://localhost:3000/user/` + id).then((response) => { setValues(response.data); }).catch((error) => { console.error(error); })
 }, []);
 return (
  values &&
  <div class="card text-center mt-5">
   <div class="card-body">
    <h5 class="card-title">User Data</h5>
    <p class="card-text">{values.name}</p>
    <p class="card-text">{values.email}</p>
    <p class="card-text">{values.phone}</p>

    <Link to='/' class="btn btn-primary">Go Back</Link>
    <Link to={`/update/${values.id}`}><button type="button" class="btn btn-primary ms-2">Edit</button></Link>
   </div>
  </div>
 )
}

export default Read
