import React, { useState, useEffect } from "react";
import { Button, Typography, Link, Box, FormLabel, InputBase } from '@mui/material';
import Logo from "../../assets/logo";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import footer_logo from "../../assets/footer_logo.png"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './signup.module.css';

const Link_SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [page, setPage] = useState(1)
    const [data, setData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })
    useEffect(() => {
        //if(response.isLogined){ navigate('/')}
    }, [data.email])

    return (
        <Box className={styles.signup_root}>
            <Box className={styles.signup_wraper}>
                <Box className={styles.signup_logoimg}>
                    <Logo color="#0A66C2" />
                </Box>
                <Box className={styles.signup_title}>Make the most of your professional life</Box>
                {page === 1 &&
                    (
                        <Box className={styles.signup_box}>
                            <Box className={styles.inner_box1}>
                                <Box className={styles.textfeild1}>
                                    <FormLabel sx={{ textAlign: "left" }} className={styles.text1}>Email or Phone number</FormLabel>
                                    <InputBase className={styles.signup_input1} fullWidth required onChange={event => setData({ ...data, email: event.target.value })} value={data.email} ></InputBase></Box>
                                <Box className={styles.textfeild2}>
                                    <FormLabel className={styles.text2}>Password(6+Character)</FormLabel>
                                    <InputBase className={styles.signup_input2} value={data.password}
                                        onChange={(e) => {
                                            setData({ ...data, password: e.target.value })
                                            //   reset_err();
                                            //   check_password( e.target.value);
                                        }}
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={()=> setShowPassword(!showPassword )} 
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }>
                                    </InputBase>
                                </Box>
                                <Typography className={styles.signup_link}>{`By clicking Agree & Join or Continue, you agree to the LinkedIn `}
                                    <Link href="#" >{`user Agreement, privacy policy`}</Link>{` and `}
                                    <Link href="#" >{`cokkie policy`}</Link>
                                </Typography>
                                <Button className={styles.signup_button} type="submit" fullWidth variant="contained" onClick={() => { setPage(2) }}>Agree & Join </Button>
                            </Box>
                            <Box className={styles.innerbox2}>
                                <Divider className={styles.signup_divider} variant="middle">{" "} or{" "}</Divider>
                                <Button className={styles.signup_google_btn} type="button" fullWidth>
                                    <img className={styles.google_img} src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
                                </Button>
                                <Typography className={styles.bottom_text}>Already on linkedin?
                                    <Link className={styles.bottom_text_link} href="#">   Sign In</Link>
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
                {page === 2 && (
                    <Box className={styles.signup_box}>
                        <Box className={styles.inner_box1}>
                            <Box className={styles.textfeild1}>
                                <FormLabel sx={{ textAlign: "left" }} className={styles.text1}>First Name</FormLabel>
                                <InputBase className={styles.signup_input1} fullWidth required
                                    onChange={event => setData({ ...data, firstName: event.target.value })}
                                    value={data.firstName}></InputBase></Box>
                            <Box className={styles.textfeild2}>
                                <FormLabel className={styles.text2}>Last Name</FormLabel>
                                <InputBase className={styles.signup_input2} fullWidth required
                                    onChange={event => setData({ ...data, lastName: event.target.value })}
                                    value={data.lastName} />
                            </Box>
                            <Button className={styles.signup_button} type="submit"
                                fullWidth
                                variant="contained">Agree & Join
                            </Button>
                        </Box>
                        <Box className={styles.innerbox2}>
                            <Divider className={styles.signup_divider} variant="middle">{" "} or{" "}</Divider>
                            <Button className={styles.signup_google_btn} type="button" fullWidth>
                                <img className={styles.google_img} src="https://img.icons8.com/color/48/000000/google-logo.png" />Continue with Google
                            </Button>
                            <Typography className={styles.bottom_text}>Already on linkedin?
                                <Link className={styles.bottom_text_link} href="#">   Sign In</Link>
                            </Typography>
                        </Box>
                    </Box>
                )}
                <Box className={styles.signup_footerwrap}>
                    <Typography className={styles.footer_text}>
                        Looking to create a page for business?
                        <Link className={styles.footer_link} >Get help</Link>
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

export default Link_SignUp;