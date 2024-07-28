import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Box, Button, Typography, ButtonGroup } from '@mui/material';
import styles from './lkdn_post.module.css';
import AddIcon from '@mui/icons-material/Add';
import image from '../../assets/image.jpg';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import reposticon from '../../assets/repost.jpg';
import shareicon from '../../assets/share.svg';
import commenticon from '../../assets/coment.jpg';
import likeicon from '../../assets/like.jpg';
import avatar from '../../assets/avatar.png';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';


const Lkdn_Post = () => {
  return (

    <Box classname={styles.root_box}>
      <Box classname={styles.mainbox}>
        <Card className={styles.post_main} sx={{ maxWidth: 345 }}>
          <CardHeader 
            sx={{
              '& .MuiCardHeader-content': { display: "none" ,height: "64px" ,margin: "initial" , marginbottom: "8px", padding: "12px 76px 0 16px" ,width: "100%"  }
            }}

            action={
              <Box sx={{ display: "flex" }} >
                <Avatar className={styles.img} alt="image" src={avatar} />
                <Box className={styles.header}>
                  <Typography className={styles.text1}>lnkd_username</Typography>
                  <Typography className={styles.text2}>role</Typography>
                  <Typography className={styles.text3}>duration  .<AccessTimeFilledOutlinedIcon sx={{
                    '& .MuiSvgIcon-root': { fontSize: "unset" }
                  }} className={styles.timer} /></Typography>
                </Box>
                <Button className={styles.follow}><AddIcon className={styles.addicon}></AddIcon>Follow</Button>
              </Box>
            }
          />
          <Typography className={styles.posttitle}> My Post</Typography>
          <Typography className={styles.posttitle2}> Goku</Typography>
          <CardMedia className={styles.image}
            component="img"
            height="500"
            width="300"
            image={image}
            alt="image"
          />
         
          <br />
          <Divider variant="middle"></Divider>
          <CardActions sx={{
            '& .MuiCardActions-root': {
              padding: "0px 8px 8px 8px ",
              alignItems: "center"
            }
          }}>
            <ButtonGroup sx={{
              '& .MuiButtonGroup-grouped': {
                border: "unset !important",
                color: "grey",
                lineHeight: "2px",
                display: "flex",
                gap: "4px",
                textTransform:"none"
              }
            }}
              className={styles.postbuttongroup} variant="text" aria-label="Basic button group" >
              <Button ><img className={styles.likeimg} src={likeicon} alt="icon" /> &nbsp; Like</Button>
              <Button className={styles.buttn2}><img className={styles.commentimg} src={commenticon} alt="icon" /> &nbsp;   Comment</Button>
              <Button className={styles.buttn3} ><img className={styles.repostimg} src={reposticon} alt="icon" /> &nbsp;  Repost</Button>
              <Button className={styles.buttn4}><img className={styles.shareimg} src={shareicon} alt="icon" /> &nbsp;  Share</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
};
export default Lkdn_Post;