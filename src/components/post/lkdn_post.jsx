import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Box, Button, Typography, ButtonGroup } from '@mui/material';
import styles from './lkdn_post.module.css';
import AddIcon from '@mui/icons-material/Add';
import image from '../../assets/image.jpg';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import repost from '../../assets/repost.svg';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';


const Lkdn_Post = () => {
  return (

    <Box classname={styles.root_box}>
      <Box classname={styles.mainbox}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader className={styles.postHead}
            sx={{
              '& .MuiCardHeader-content': {display:"none"}

            }}

            action={
              <Box sx={{ display:"flex"}} >
                <Avatar className={styles.img} alt="image" src="C:\Users\Dell\fed\react-exersise\src\assets\avatar.jpg" />
                <Box className={styles.header}>
                  <Typography className={styles.text1}>lnkd_username</Typography>
                  <Typography className={styles.text2}>role</Typography>
                  <Typography className={styles.text3}>duration  .<AccessTimeFilledOutlinedIcon sx={{
              '& .MuiSvgIcon-root': {fontSize:"unset"}

            }} className={styles.timer}/></Typography>
                </Box>
                <Button className={styles.follow}><AddIcon className={styles.addicon}></AddIcon>Follow</Button>
              </Box>
            }
          />
          <Typography className={styles.posttitle}> My Post</Typography>

          <CardMedia className={styles.image}
            component="img"
            height="500"
            width="300"
            image={image}
            alt="image"

          />
           

          <br />
          <Divider variant="middle"></Divider>


          <CardActions>
            
              <ButtonGroup  sx={{
              '& .MuiButtonGroup-grouped': {
                border: "unset !important",
                color:"grey"
              }
                

            }}

              className={styles.postbuttongroup} variant="text" aria-label="Basic button group" >
                <Button  className={styles.buttn1} ><ThumbUpOutlinedIcon/>Like</Button>
                <Button className={styles.buttn2}><CommentOutlinedIcon/> Comment</Button>
                <Button className={styles.buttn3} >  Repost</Button>
                <Button className={styles.buttn4}>share</Button>
              </ButtonGroup>
           

          </CardActions>



        </Card>
      </Box>
    </Box>

  )
};

export default Lkdn_Post;