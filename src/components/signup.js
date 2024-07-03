import React from "react";
import { CenterFocusStrong, Padding, margin } from "@mui/icons-material";
import {  Button, Typography, Link, Box, FormLabel, InputBase } from '@mui/material';
import imglogo from '../assets/logo.jpg';
import './signup.css'
import Logo from "../assets/logo";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




const Link_SignUp = () => {
    // const [showPassword, setShowPassword] = React.useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };
  
    return (
        <Box className="signup_root">
            <Box className="signup_wraper">
                <Box className="signup_logoimg">
                    <Logo color="#0A66C2" />
                    {/* <img className="link_img" src={imglogo} height={"80px"} /> */}
                </Box>
                <Box className="signup_title">Make the most of your professional life
                    <Box className="signup_box">
                        <Box className="inner_box1">
                            <Box className="textfeild1">
                                <FormLabel sx={{ textAlign: "left" }} className="text1">Email or Phone number</FormLabel>
                                <InputBase className="signup_input1" fullWidth required></InputBase></Box>
                             <Box className="textfeild2">
                                <FormLabel className="text2">Password(6+Character)</FormLabel>
                                <InputBase className="signup_input2" fullWidth required></InputBase> 
                                {/* <Box className="inputindorment">  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl></Box> */}

                            </Box>
                            
                            <Typography className="signup_link">By clicking continue,you agree linkedin's
                                <Link href="#" >user Agreement,privacy policy</Link>and
                                <Link href="#" >cokkie policy</Link>
                            </Typography>
                            <Button className="signup_button" type="submit"
                                fullWidth
                                variant="contained">Agree & Join
                            </Button>


                        </Box>
                        <Box className="innerbox2">
                            <Box className="signup_divider" ><Divider>or</Divider></Box>

                            <Button className="signup_google_btn" type="button"
                                fullWidth>

                                <img className="google_img" src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
                            </Button>
                            <Typography className="bottom_text">Already on linkedin?
                                <Link className="bottom_text_link" href="#">   Sign In</Link>

                            </Typography>



                        </Box>
                    </Box>
                </Box>
                <Box className="signup_footerwrap">
                    <Typography className="footer_text">
                        Looking to create a page for business?
                        <Link href="#" >Get help</Link>
                    </Typography>
                </Box>
            </Box>
            </Box>

        
    )
};
export default Link_SignUp;