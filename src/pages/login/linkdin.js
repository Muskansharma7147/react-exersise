import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, Button, Typography, Link, Box, IconButton, InputAdornment } from '@mui/material';
import Logo from "../../assets/logo";
import footer_logo from "../../assets/footer_logo.png";
import imglogo2 from '../../assets/onetime.jpg';
import styles from './linkdin.module.css';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const Link_Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email:"",
    password:""
  })
  //response = data

  useEffect(()=>{
    //if(response.isLogined){ navigate('/')}
  },[data.email])

  return (
    <Box className={styles.login_root}>
      <Box className={styles.logo}>
        <Logo className={styles.logo_svg} color="#0A66C2" />
      </Box>
      <Box className={styles.box_wraper}>
        <Box className={styles.main_box1}>

          <Typography className={styles.login_heading} variant="h2">Sign in</Typography>
          <Typography className={styles.login_heading2}>Stay updated on your professional world</Typography>
          <TextField id="filled-error-helper-text" className={styles.login_input1} label="Email and Phone" variant="filled" fullWidth 
            onChange={event => setData({...data, email:event.target.value}) }
            value={data.email} />
          
          <TextField
            label="Password"
            className={styles.login_input1}
            id="filled-start-adornment-helper-text"
            variant="filled"
            // disabled={status.loading}
            value={data.password}
            onChange={(e) => {
              setData({...data,password:e.target.value})
            //   reset_err();
            //   check_password( e.target.value);
            }}
            type={showPassword ? "text" : "password"}
            // error={(error.password || status.error)}
            // helperText={(error.password || status.error) ? "Invalid password" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={()=> setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="text" className={styles.login_link1} >Forget Password?</Button>



          <Button className={styles.login_button} type="submit"
            fullWidth
            onClick={()=>navigate("/")}
            variant="contained">Sign in
          </Button>
          <Divider className={styles.login_divider} variant="middle">{" "}
          or{" "}</Divider>


          <Typography className={styles.login_link2}>{`By clicking continue,you agree linkedin's `}
            <Link href="#" sx={{textDecoration:"none"}} >{`user Agreement,privacy policy`}</Link>{` and `}
            <Link href="#" sx={{textDecoration:"none"}} >{`cokkie policy`}</Link>
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
            <Link className={styles.footer_link} href="/signup" onClick={() => { console.log(); }}>Join now </Link>
          </Typography>

        </Box>
      </Box>
      <Box className={styles.footer_wrap}>
        <Box className={styles.footer}>
       
          <img className={styles.footer_img} src={footer_logo} /> 
          <Typography className={styles.footer_text1}> © 2024</Typography>
          <Typography className={styles.footer_text1}>User Agreement</Typography>
          <Typography className={styles.footer_text1}>Privacy Policy</Typography>
          <Typography className={styles.footer_text1}>Community Guidelines</Typography>
          <Typography className={styles.footer_text1}>Cookie Policy</Typography>
          <Typography className={styles.footer_text1}>CopyRight Policy</Typography>
          <Typography className={styles.footer_text1}>Send Feedback</Typography>
          <Typography className={styles.footer_text1}>Language</Typography>

        </Box>
      </Box>
      </Box>

    



  )
};
export default Link_Login;