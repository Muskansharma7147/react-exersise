import React, { useState } from "react";
import { CenterFocusStrong, Padding, Visibility, VisibilityOff, margin } from "@mui/icons-material";
import { TextField, Button, Typography, Link, Box, IconButton, InputAdornment, FormControl, InputLabel, Input, OutlinedInput, FilledInput } from '@mui/material';
import Logo from "../assets/logo";
import imglogo2 from '../assets/onetime.jpg';
import styles from './linkdin.module.css';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Link_Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box className={styles.login_root}>
      <Box className={styles.logo}>
      <Logo className={styles.logo_svg} color="#0A66C2" />
        {/* <img className={styles.link_img} src={imglogo} height={"30px"} /> */}
      </Box>
      <Box className={styles.box_wraper}>
        <Box className={styles.main_box1}>

          <Typography className={styles.login_heading} variant="h2">Sign in</Typography>
          <Typography className={styles.login_heading2}>stay updated on your professional world</Typography>
          <TextField className={styles.login_input1} label="Email and Phone" variant="outlined" fullWidth required />
          {/* <FormControl  className={styles.login_input2}  variant="outlined" fullWidth required>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <outlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              />
          </FormControl> */}
           <FormControl className={styles.login_input2} fullWidth required  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                 
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

          <Link className={styles.login_link1} href="#">Forget Password?</Link>



          <Button className={styles.login_button} type="submit"
            fullWidth
            variant="contained">Sign in
          </Button><Box className={styles.login_divider} ><Divider>or</Divider></Box>


          <Typography className={styles.login_link2}>By clicking continue,you agree linkedin's
            <Link href="#" >user Agreement,privacy policy</Link>and
            <Link href="#" >cokkie policy</Link>
          </Typography>
          <Button className={styles.login_google_btn} type="button"
            fullWidth>

            <img className={styles.google_img} src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
          </Button>

          <Button className={styles.login_apple_btn} type="button"
            fullWidth>

            <img src="https://img.icons8.com/material-outlined/24/mac-os--v2.png" />Continue with Apple
          </Button>
          <Button className={styles.login_time_link} type="button"
            fullWidth>

            <img className={styles.link_img2} src={imglogo2} height={"20px"} />Sign in with One-Time-Link
          </Button>

        </Box>
      
      <Box className={styles.login_footer_root}>
        <Typography>New To Linkedin?
          <Link className={styles.footer_link} href="/signup" onClick={()=>{console.log();}}>Join now </Link>
         </Typography>
       
      </Box>
      </Box>
      <Box className={styles.footer_wrap}>
        <Box classname={styles.footer}>
        <img src= "/static/media/footer_logo.963c482045211adf0414.png"/>
        </Box>
      </Box>

    </Box>
    


  )
};
export default Link_Login;