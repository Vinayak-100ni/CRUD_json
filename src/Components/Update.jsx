import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const Update = () => {
 const [values, setValues] = useState({
  name: '',
  email: '',
  phone: '',
 });
 const { id } = useParams();
 const navigate = useNavigate();

 useEffect(() => {
  axios.get("http://localhost:3000/user/" + id).then((res) => {
   setValues(res.data);
  }).catch((err) => { console.error(err); });
 }, [])

 const inputHandler = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  axios.put("http://localhost:3000/user/" + id, values).then((response) => {
   console.log(response);
   navigate('/');
  }).catch((err) => { console.log(err); })
 }

 return (
  <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
   <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h2>Create User</h2>
    <form onSubmit={handleSubmit}>
     <div class="mb-3">
      <label htmlFor='name' class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name='name' value={values.name} onChange={inputHandler} />
     </div>

     <div class="mb-3">
      <label htmlFor='email' class="form-label">Email</label>
      <input type="text" class="form-control" id="email" name='email' value={values.email} onChange={inputHandler} />
     </div>

     <div class="mb-3">
      <label htmlFor='phone' class="form-label">Phone No.</label>
      <input type="number" class="form-control" id="number" name='phone' value={values.phone} onChange={inputHandler} />
     </div>

     <button type="submit" class="btn btn-success">Submit</button>
     <Link to='/' className='btn btn-primary ms-3'>Back</Link>
    </form>
   </div>
  </div>
 )
}

export default Update
