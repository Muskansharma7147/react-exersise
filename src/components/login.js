import React from "react";
import {Grid, Paper,Avatar, TextField,Button, Typography,Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login=()=>{
    const paperStyle={padding:20,height:"70vh",width:300,margin:"20px auto"}
    const avatarStyle={backgroundColor:"#008065"}
    const bttnStyle={margin:"10px auto"}
    const containerStyle={align :"left"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center" > 
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>                              
                <h2>Login</h2> </Grid>
                <TextField label="Username" placeholder="Enter Username"fullWidth required/>
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required/>
                <FormControlLabel control={
                    <Checkbox/>
                    } 
                     label="Remember Me" color="primary"Style={containerStyle}/>
                     
                         <Button type="submit"
                             fullWidth
                             variant="contained"
                             style={bttnStyle}
                             color="primary">Login
                             </Button>
                             <Typography>
                             <Link href="#">Forget Password?</Link>
                             </Typography>
                             <Typography>Do you have an account?
                             <Link href="#">sign up</Link>
                             </Typography>

                            
                     
                           
               </Paper>
                              
        </Grid>
    )
};
export default Login;