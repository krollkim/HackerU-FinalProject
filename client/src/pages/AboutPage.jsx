import { 
  Grid,
  Typography,
  Button,
  Link,
  TextField,
  Modal,
  Box,
  IconButton, } from '@mui/material'
  import GitHubIcon from '@mui/icons-material/GitHub';
  import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { Container } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useTheme } from '../providers/ThemeProvider';

const AboutPage = () => {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }; 

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 2,
    pb: 2,
    borderRadius: 4
  };

  return (
    <>
    <Container maxWidth="lg">
        <PageHeader 
            title='About'
            subtitle='This website is a movie review card creator that allows you to create, manage, and share your movie cards. It uses the technologies ReactJS, NodeJS, and MongoDB'
        />
  
        <Grid container spacing={5}>
         <Grid item xs={10} md={6} lg={8} alignSelf="center">
          <Container>
            <Typography variant="h3" mb={3}>Features</Typography>
            <Typography variant="body1">
        <ul>
          <li>Create and edit your movie cards with all CRUD functions
            (create, read, update, delete).</li>
          <li>Login and signup with your email address and password.</li>
          <li>Manage your users and their permissions.</li>
          <li>Favorite specific movie cards.</li>
          <li>Add movie cards to your collection.</li>
        </ul>
      </Typography>
          </Container>
         </Grid>
          <Grid 
          item xs={5.1} lg={4} 
          sx={{display: {md: "flex"}, 
          justifyContent: "center"
          }}>
            <img src="images/moviereviews-low-resolution-logo-black-on-transparent-background.png" alt="movies logo" width={350}/>
          </Grid>
        </Grid>
    </Container>
    <Container sx={{border: 1, borderRadius: 5, background: '#7d9fe7', mt: 2}}>
    <Container>
          <Typography variant="h3" mt={2} ml={2} mb={3}>Technologies</Typography>
    <Typography variant="body1" ml={2} mb={3}>
        This website uses the following technologies:
        <ul>
          <li><Typography variant="h6" mb={1} mt={2}>ReactJS:</Typography> A JavaScript library for building user interfaces.</li>
          <li><Typography variant="h6" mb={1} mt={2}>NodeJS:</Typography> A runtime environment for JavaScript.</li>
          <li><Typography variant="h6" mb={1} mt={2}>MongoDB:</Typography> A NoSQL database.</li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 800, mb: 3}}>
        To use this website, you will need to create an account and login.
        Once you are logged in, you can start creating and editing your
        movie cards. You can also manage your users and their permissions,
        favorite specific movie cards, and add movie cards to your
        collection.
      </Typography>
      <Typography variant="body1" mt={6}>
        To install the technologies used by this website, you can follow these
        steps:
        <Container>
        <ol>
          <li><Typography variant="h6">Install NodeJS</Typography>
          </li>
          <li><Typography variant="h6">Install MongoDB</Typography>
          </li>
          <li><Typography variant="h6">Install ReactJS</Typography>
          </li>
        </ol>
        </Container>
      </Typography>
      <Typography variant="body1" sx={{mt: 5, mb: 5}}>
        Once you have installed the necessary technologies, you can start
        developing your own movie review website.
      </Typography>
     <Container sx={{mb: 5}}>
      <Typography>
      <Typography variant="h4" sx={{pb: 1}}>Contact</Typography>
        For any questions or feedback, click the icon:
      <IconButton onClick={handleOpen} sx={{ width: 10, height: 10, pl: 3}}>
      <RecentActorsIcon />
      </IconButton>
        <Modal
          open={open}
          onClose={handleClose}>
          <Box sx={{ ...style, width: 400, 
            color: isDark ? "white" : "black", 
            backgroundColor: isDark ? "#333333" : "#e3f2fd", display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography sx={{pb:1, fontWeight: 'bold'}}> 
              kimkroll2000@gmail.com | 0525890252
            </Typography>
            <IconButton 
            href='https://github.com/krollkim' 
            target="_blank">
              <GitHubIcon sx={{
                height: '30px', 
                width: '30px'
                }}/>
              </IconButton>
          </Box>
        </Modal>
      </Typography>
     </Container>
    </Container>
    </Container>
  </>
  );
};

export default AboutPage