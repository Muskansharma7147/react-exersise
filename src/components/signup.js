import React from "react";
import { CenterFocusStrong, Padding, margin } from "@mui/icons-material";
import { Button, Typography, Link, Box, FormLabel, InputBase } from '@mui/material';
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
import styles from'./signup.module.css';




const Link_SignUp = () => {
    // const [showPassword, setShowPassword] = React.useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

    return (
        <Box className={styles.signup_root}>
            <Box className={styles.signup_wraper}>
                <Box className={styles.signup_logoimg}>
                    <Logo color="#0A66C2" />
                    {/* <img className="link_img" src={imglogo} height={"80px"} />  */}
                </Box>
                <Box className={styles.signup_title}>Make the most of your professional life
                    <Box className={style.signup_box}>
                        <Box className={styles.inner_box1}>
                            <Box className={styles.textfeild1}>
                                <FormLabel sx={{ textAlign: "left" }} className={styles.text1}>Email or Phone number</FormLabel>
                                <InputBase className={styles.signup_input1} fullWidth required></InputBase></Box>
                            <Box className={styles.textfeild2}>
                                <FormLabel className={styles.text2}>Password(6+Character)</FormLabel>
                                <InputBase className={styles.signup_input2} fullWidth required></InputBase>
                                <FormControl className={styles.login_input2} fullWidth required variant="outlined">
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
                            </Box>

                            <Typography className={Styles.signup_link}>By clicking continue,you agree linkedin's
                                <Link href="#" >user Agreement,privacy policy</Link>and
                                <Link href="#" >cokkie policy</Link>
                            </Typography>
                            <Button className={styles.signup_button} type="submit"
                                fullWidth
                                variant="contained">Agree & Join
                            </Button>


                        </Box>
                        <Box className={styles.innerbox2}>
                            <Box className={styles.signup_divider} ><Divider>or</Divider></Box>

                            <Button className={styles.signup_google_btn} type="button"
                                fullWidth>

                                <img className={styles.google_img} src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
                            </Button>
                            <Typography className={styles.bottom_text}>Already on linkedin?
                                <Link className={styles.bottom_text_link} href="#">   Sign In</Link>

                            </Typography>



                        </Box>
                    </Box>
                    <Box className={styles.signup_footerwrap}>
                        <Typography className={styles.footer_text}>
                            Looking to create a page for business?
                            <Link className={styles.footer_link} >Get help</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>


    )
};
export default Link_SignUp;