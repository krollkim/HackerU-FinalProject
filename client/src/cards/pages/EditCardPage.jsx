import React, { useEffect, useState } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import { getCard } from "../services/cardServices";

// eslint-disable-next-line
const EditCardPage = () => {
  const { handleUpdateCard,setCardId } = useCards();
  const params = useParams()
  // eslint-disable-next-line
  const [ cardData, setCarddata] = useState({
      title: '',
      subtitle: '',
      description: '',
      review: '',
      directedBy: '',
      webUrl: '',
      imageUrl: '',
      imageAlt: '',
      id:params.id
      
    })
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleUpdateCard,
  );
  
    
  useEffect(() => {
    
    const cardData = async () => { 
      const card = await getCard(params.id)
      setCardId(card._id)
      rest.setData({
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        review: card.review,
        directedBy: card.directedBy,
        webUrl: card.web,
        imageUrl: card.image.url,
        imageAlt: card.image.alt,
        user_id: card.user_id 
      })
      
    }
    cardData()
    // eslint-disable-next-line
  }, [])

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit Card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
};

export default EditCardPage;