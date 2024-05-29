import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import UserDetails from './Components/UserDetails';
import Edit from './Components/Edit';
import View from './Components/View';
function App() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" color='success'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Axios CRUD
          </Typography>
          <Button onClick={() => navigate("/")} size="large" color="inherit">Home</Button>
          <Button onClick={() => navigate("/dashboard")} size="large" color="inherit">Dashboard</Button>
          <Button onClick={() => navigate("/create")} size="large" color="inherit">Add User</Button>

        </Toolbar>
      </AppBar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/dashboard/edit/:id" element={<Edit />} />
        <Route path="/dashboard/view/:id" element={<View />} />
      </Routes>
    </>
  )
}



export default App
