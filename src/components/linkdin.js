import React from "react";
import { CenterFocusStrong, Padding, margin } from "@mui/icons-material";
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import imglogo from '../assets/logo.jpg';
import imglogo2 from '../assets/onetime.jpg';

import './login.css'


const Linklogin = () => {

  return (
    <Box className="login_root">
      <Box className="logo">
        <img className="link_img" src={imglogo} height={"30px"} />
      </Box>
      <Box className="box_wraper">
        <Box className="main_box1">

          <Typography className="login_heading" variant="h2">Sign in</Typography>
          <Typography className="login_heading2" >stay updated on your professional world</Typography>
          <TextField className="login_input1" label="Username or email" placeholder="Enter Username or email" fullWidth required />

          <TextField className="login_input2" label="Password" placeholder="Enter Password" type="password" fullWidth required />
          <Typography>
            <Link className="login_link1" href="#">Forget Password?</Link>
          </Typography>


          <Button className="login_button" type="submit"
            fullWidth
            variant="contained">Sign in
          </Button>
          <Typography className="login_link2">By clicking continue,you agree linkedin's
            <Link href="#" >user Agreement,privacy policy</Link>and
            <Link href="#" >cokkie policy</Link>
          </Typography>
          <Button className="login_google_btn" type="button"
            fullWidth>

            <img className="google_img" src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
          </Button>

          <Button className="login_apple_btn" type="button"
            fullWidth>

            <img src="https://img.icons8.com/material-outlined/24/mac-os--v2.png" />Continue with Apple
          </Button>
          <Button className="login_time_link" type="button"
            fullWidth>

            <img className="link_img2" src={imglogo2} height={"20px"} />Sign in with One-Time-Link
          </Button>

        </Box>
      </Box>
      <Box className="login_footer_root">
        <Typography><p>New To Linkedin?
          <Link href="#" >Join now </Link>
        </p> </Typography>
        <Box className="footer_wrap">
          <img src="/static/media/footer_logo.963c482045211adf0414.png" />
          {/* <Box className="footer_img"></Box> */}
        </Box>
      </Box>

    </Box>
    // <Box className="login_footer_root"></Box>



  )
};
export default Linklogin;