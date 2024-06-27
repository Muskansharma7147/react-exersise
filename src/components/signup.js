import React from "react";
import { CenterFocusStrong, Padding, margin } from "@mui/icons-material";
import { TextField, Button, Typography, Link, Box, FormLabel, InputBase } from '@mui/material';
import imglogo from '../assets/logo.jpg';
import './signup.css'
import Logo from "../assets/logo";
import Divider from '@mui/material/Divider';



const Link_SignUp = () => {
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
                            <Box className="texfeild1">
                                <FormLabel sx={{ textAlign: "left" }} className="text1">Email or Phone number</FormLabel>
                                <InputBase className="signup_input1" fullWidth required></InputBase>
                                <FormLabel className="text2">Password(6+Character)</FormLabel>
                                <InputBase className="signup_input2" fullWidth required></InputBase>
                                <Typography className="signup_link">By clicking continue,you agree linkedin's
                                    <Link href="#" >user Agreement,privacy policy</Link>and
                                    <Link href="#" >cokkie policy</Link>
                                </Typography>
                                <Button className="signup_button" type="submit"
                                    fullWidth
                                    variant="contained">Agree & Join
                                </Button>
                            </Box>

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
                        <Link className="footer_text_link" href="#" >   Get help</Link>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
};
export default Link_SignUp;