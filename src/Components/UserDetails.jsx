import React, { useEffect, useState } from 'react'
import { API } from './Global';
import axios from 'axios';
import Dashboard from './Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
function UserDetails() {
     const [data, setData] = useState([]);

     const getUserData = async () => {
          try {
               const response = await axios.get(`${API}`, { method: "GET" })
               console.log(response.data)
               setData(response.data)
          }
          catch (error) {
               console.error("Error Occured", error)
          }
     }
     useEffect(() =>{
          getUserData()}, 
     [])
     const navigate = useNavigate();
     return (
          <>
               <h3 className='heading'>User Details</h3>
               <table className="table table-striped table-hover">
                    <thead className='thead thead-dark'>
                         <tr>
                              <th scope="col"> </th>
                              <th scope="col">Name</th>
                              <th scope="col">Username</th>
                              <th scope="col">Email</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Website</th>
                              <th scope="col"> </th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((data, id) => (
                                   <Dashboard key={id} data={data} id={data.id}
                                        deletebtn={
                                             <Button variant="outlined"
                                                  color='error'
                                                  startIcon={<DeleteIcon />}
                                                  onClick={() => {
                                                       fetch(`${API}/${data.id}`, {
                                                            method: "DELETE"
                                                       })
                                                            .then(() => getUserData())
                                                  }}
                                             >
                                                  Delete
                                             </Button>
                                        }
                                        editbtn={
                                             <Button variant="outlined"
                                                  color='success'
                                                  startIcon={<EditIcon />}
                                                  onClick={() => navigate(`/dashboard/edit/${data.id}`)}
                                             >
                                                  Edit
                                             </Button>
                                        }
                                   />
                              ))
                         }
                    </tbody>
               </table>
          </>
     )
}

export default UserDetails
