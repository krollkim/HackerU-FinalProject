import React, { useContext, useEffect, useState } from 'react'
import useCards from '../../cards/hooks/useCards';
import { searchContext } from '../../providers/SearchProvider';
import { Container, Box, ButtonGroup, Button, Menu, MenuItem, IconButton } from '@mui/material';
import CardsFeedback from '../../cards/components/CardsFeedback';
import TableComponents from '../components/TableComponents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const ViewMode = () => {

    const { pending, error, cards, handleGetCards, setCards,handleGetCounts,usersCountNumber} = useCards();
    const views = ['cards', 'table'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [displayMode, setDisplayMode] = useState('cards');
 
    const { searchQuery } = useContext(searchContext);

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

    useEffect(() => {
        setDisplayMode(views[selectedIndex]);
    }, [selectedIndex]);

    console.log({filtered});
    return (
     <Container>

        <Box justifyContent={'center'} display={'flex'}>
        <ButtonGroup variant="contained" sx={{width: 'full', height: '2rem'}}>
        <Button>{views[selectedIndex]}</Button>
        <Button onClick={handleOpen}>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
        </Button>
      </ButtonGroup>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {views.map((view, index) => (
          <MenuItem key={view} onClick={(event) => handleMenuItemClick(event, index)}>
            {view}
          </MenuItem>
        ))}
      </Menu>
      
        <Box container alignItems="center" justifyContent="space-between" flexDirection="row">

            {displayMode === 'cards' && (
                <CardsFeedback 
                usersCountNumber={usersCountNumber}
                pending={pending}
                error={error}
                cards={filtered}
                setCards={setCards}/>
            )}

            {displayMode === 'table' && <TableComponents cards={filtered} setCards={setCards}/>}


        </Box>
     </Container>
    )
}

export default ViewMode