import { Box, Typography, Grid, Stack, Button, TextField, IconButton, Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { deepPurple, pink, green } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListSubheader from '@mui/material/ListSubheader';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import {handleDelete }from '@mui/material/handleDelete';


function muiComponent() {
    const navigate = useNavigate();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    // const handleDelete = () => { };
    // // const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(!open);
    // };
    // const [open, setOpen] = React.useState(false);
    // // const handleClose = () => {
    // //     setOpen(false);
    // };
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small">
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <Stack direction="row" spacing={2} flexWrap={"wrap"}>
            <FormControl autoWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled defaultChecked />
            <Switch disabled />
            <Switch defaultChecked color="secondary" />
            <Switch defaultChecked color="warning" />
            <Switch defaultChecked color="default" />
            <TextField id="outlined-basic" label="Outlined" multiline variant="outlined" />
            <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}>
                <ToggleButton value="bold" label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" label="italic">
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" label="underlined">
                    <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" label="color" disabled>
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Avatar> <FolderIcon /></Avatar>
            <Avatar sx={{ bgcolor: pink[500] }}> <PageviewIcon /></Avatar>
            <Avatar sx={{ bgcolor: green[500] }}> <AssignmentIcon /> </Avatar>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" /></Badge>
            <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} badgeContent={4} color="secondary">
                <MailIcon color="action" /></Badge>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Clickable" onClick={handleClick} />
            <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            {/* <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" variant="outlined" onDelete={handleDelete} /> */}
            <Chip label="Clickable Link" href="#basic-chip" clickable />
            <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
            <List>
                <ListItem disablePadding>
                    <ListItemButton> <ListItemIcon> <InboxIcon /> </ListItemIcon> <ListItemText primary="Inbox" />
                    </ListItemButton></ListItem>
                <ListItem disablePadding>  <ListItemButton> <ListItemIcon> <DraftsIcon /> </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List> <ListItem disablePadding> <ListItemButton>  <ListItemText primary="Trash" />  </ListItemButton>
                </ListItem> <ListItem disablePadding>  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Box>
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </Box>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>
            <Alert severity="success">This is a success Alert.</Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Alert severity="error">This is an error Alert.</Alert>
            <Alert             variant="filled" severity="success">
                This is a filled success Alert.
            </Alert>
            <Alert variant='outlined' severity="info">
                This is a filled info Alert.
            </Alert>
            <Alert variant="outlined" severity="warning" onClose={() => { }}>
                This is a filled warning Alert.
            </Alert>
            <Alert variant="filled" severity="error">
                This is a filled error Alert.
            </Alert>
            <Alert
                severity="success"
                action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }>
                This Alert uses a Button component for its action.
            </Alert>
            {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
{/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose} >
                <CircularProgress color="inherit" />
            </Backdrop> */}
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
            <Box>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Box>
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={210}
                height={118}
            />
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
            />

        </Stack>
    )
}
export default muiComponent;