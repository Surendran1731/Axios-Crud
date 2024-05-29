import React from 'react';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
function Dashboard({ data, deletebtn, editbtn }) {
  // console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>   </td>
        <td>{data.name}</td>
        <td>{data.username} </td>
        <td>{data.email} </td>
        <td>{data.phoneNumber} </td>
        <td>{data.website} </td>
        <td>
          <Button variant="outlined" color='secondary' startIcon={<PreviewIcon />} onClick={() => navigate(`/dashboard/view/${data.id}`)}>View</Button>&nbsp;&nbsp;
          {editbtn}&nbsp;&nbsp;
          {deletebtn}
        </td>
      </tr>
    </>
  )
}

export default Dashboard
