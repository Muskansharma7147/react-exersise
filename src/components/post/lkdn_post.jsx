import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Box, Button, Typography, ButtonGroup } from '@mui/material';
import styles from './lkdn_post.module.css';
import AddIcon from '@mui/icons-material/Add';
import image from '../../assets/image.jpg';
import avatr from '../../assets/avatar.jpg';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import like from '../../assets/like.jpg';
// import coment from ''

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
                <Avatar className={styles.img} image={avatr} />
                <Box className={styles.cridentials}>
                  <Typography className={styles.text1}>linkedin username</Typography>
                  <Typography>role</Typography>
                  <Typography>duration</Typography>
                </Box>
                <Button><AddIcon></AddIcon>Follow</Button>
              </Box>
            }
          />
          my post

          <CardMedia className={styles.image}
            component="img"
            height="500"
            width="120"
            image={image}
            alt="image"

          />
          <br />
          <Divider></Divider>
          <CardActions>
            <Box className={styles.icon}>
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button image={like}>Like</Button>
                <Button>Comment</Button>
                <Button>Repost</Button>
                <Button>share</Button>
              </ButtonGroup>
            </Box>

          </CardActions>



        </Card>
      </Box>
    </Box>

  )
};

export default Lkdn_Post;