import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
 const [user, setUser] = useState([]);
 const navigate = useNavigate();

 const handleDelete = (id) => {
  const confirm = window.confirm('Are you sure you want to delete');
  if (confirm) {
   axios.delete("http://localhost:3000/user/" + id).then(e => {
    location.reload();
   }).catch(err => console.error(err));
  }
 }
 useEffect(() => {
  axios.get('http://localhost:3000/user').then((res) => {
   console.log(res.data);
   setUser(res.data);
  })
 }, [])


 return (
  <div class="container-sm justify-content-center align-items-center">
   <h1>User List</h1>
   <div className='w-75 rounded bg-white border shadow p-4'>
    <div className='d-flex justify-content-end'><Link to='/create' className='btn btn-success'>Add +</Link></div>
    <table class="table">
     <thead>
      <tr>
       <th scope="col">ID</th>
       <th scope="col">Name</th>
       <th scope="col">Phone No.</th>
       <th scope="col">Email</th>
       <th scope="col">Action</th>
      </tr>
     </thead>
     <tbody>{
      user.map((user) => (
       <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>
         <Link to={`/read/${user.id}`}><button type="button" class="btn btn-info">Read</button></Link>
         <Link to={`/update/${user.id}`}><button type="button" class="btn btn-primary ms-2">Edit</button></Link>
         <button type="button" onClick={e => handleDelete(user.id)} class="btn btn-danger ms-2">Delete</button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div >

 )
}
export default Home
