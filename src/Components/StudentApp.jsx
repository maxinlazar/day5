import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const StudentApp = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography align= 'left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STUDENT APP
          </Typography>
          <Button color="inherit"> <Link to ='/View'style={{colour:"white",textDecoration:"none"}}>view</Link></Button>
          <Button color="inherit"><Link to = '/add' style={{color :"white",textDecoration:"none"}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default StudentApp 