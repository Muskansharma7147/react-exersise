import { Box, Typography, Grid, Stack, Button, TextField, IconButton, Autocomplete } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Label } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
function formDemo() {
  const navigate = useNavigate();
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
  const [value, setValue] = useState('female')
  const handlechange = (e) => { setValue(e.target.value) };
  const [rateValue, setrateValue] = React.useState(1);
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    { label: 'The Lord of the Rings: The Return of the King', year: 2003, }
  ];
  return (
    <React.Fragment>
      <Stack spacing={2} direction="row" flexWrap={"wrap"}>
        <Button variant="text">text</Button>
        <Button variant='outlined'>text</Button>
        <Button variant='contained'>text</Button>
        <Button disabled >disabled</Button>
        <Button href='#'>text</Button>
        <Button
          onClick={() => {
            alert('clicked');
          }}>clickme</Button>
        <Button color='secondary' >secondary</Button>
        <Button color='success' variant='contained'>success</Button>
        <Button color='error' variant='outlined'>error</Button>
        <Button size='large' variant='outlined'>large</Button>
        <Button size='small' variant='outlined'>small</Button>
        <Button size='medium' variant='outlined'>medium</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        <Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <IconButton color='secondary'><AlarmIcon /></IconButton>
        <IconButton color="primary" ><AddShoppingCartIcon /></IconButton>
        <IconButton size="large"><DeleteIcon /></IconButton>
        <IconButton color="secondary"> <Fingerprint /></IconButton>
        <ButtonGroup variant="contained" >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup size="small" orientation='vertical'>
          {buttons}
        </ButtonGroup>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={value}
            onChange={handlechange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
            <FormControlLabel value="top" control={<Radio />} label="top" labelPlacement='top' />
            <FormControlLabel value="start" control={<Radio />} label="start" labelPlacement='start' />
          </RadioGroup>
        </FormControl>
        <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled" rateValuevalue={value} onChange={(event, newValue) => { setrateValue(newValue); }
        } />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Stack>
    </React.Fragment>
  )
};
export default formDemo;



