import { Container } from '@mui/system';
import React, { useContext, useEffect } from 'react'
import PageHeader from '../../components/PageHeader';
import useCards from '../hooks/useCards';
import { searchContext } from '../../providers/SearchProvider';
import ViewMode from '../../users/pages/ViewMode';


const CardsPage = () => {
  const { searchQuery } = useContext(searchContext)
  const { pending, error, cards, handleGetCards, setCards, handleGetCounts, usersCountNumber } = useCards();

  let filtered = []
  if(searchQuery.length > 0) {
    filtered = cards?.filter(card => (card?.title.match(searchQuery)))
  } else {
    filtered = cards
  }
  
  
  useEffect(() => {
    handleGetCards(); 
    handleGetCounts();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PageHeader title="Cards" subtitle="On this page you can find all business cards from all categories" />
      <ViewMode/>
    </Container>
  )
}

export default CardsPage