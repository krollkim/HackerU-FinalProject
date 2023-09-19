import { Container, Typography, Box, Divider, CardMedia } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import PageHeader from '../../components/PageHeader';

const CardDetailsPage = () => {
  const { id } = useParams();
  const { card, handleGetCard } = useCards();
  const subtitle = "Here you can find more details about the Movie";

  useEffect(() => {
    handleGetCard(id);
    // eslint-disable-next-line
  }, [id]);


  return (
    <Container maxWidth="lg">
      <PageHeader title="Movie Details" subtitle={subtitle} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Box display={"flex"} alignItems={"center"} flexDirection={{ xs: "column", sm: "row" }}>
          <Box position={"relative"} display={"flex"} width={{ xs: "100%", sm: "50%" }} alignItems={"center"} justifyContent={"center"}>
            <CardMedia sx={{ boxShadow: "1px 1px 15px 1px black", borderRadius: "8px", opacity: "0.7", minHeight: "250px", maxHeight: "600px" }} component="img" image={card?.image.url} alt={card?.image.alt} />

          </Box>
          <Box flexDirection={"column"} width={{ xs: "100%", sm: "50%" }} ml={{ xs: 0, sm: 5 }} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Typography color={"#FF9900"} sx={{ textShadow: "1px 1px 1px black" }} mb={2} variant={'h3'}> {card?.title}</Typography>
            <Typography sx={{ textShadow: "1px 1px 1px black" }} mb={5} variant='h5'> {card?.subtitle}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Directed By: {card?.directedBy}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>{card?.description}</Typography>
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Created At: {card?.createdAt}</Typography>
            <Divider sx={{height:"20px"}} />
            
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Review: {card?.review}</Typography>
         
            <Box display={'flex'} height={"100%"} alignItems={"flex-end"} >
            <Typography alignItems={"flex-start"} justifyContent={"flex-start"}>Average likes: </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default CardDetailsPage