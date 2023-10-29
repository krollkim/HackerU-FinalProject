//   import React, { useContext, useEffect } from 'react';
//   import { Container, Box } from '@mui/material';
//   import PageHeader from '../../components/PageHeader';
//   import CardsFeedback from '../../cards/components/CardsFeedback';
//   import useCards from '../../cards/hooks/useCards';
//   import { searchContext } from '../../providers/SearchProvider';  
//   const cards = [
//     {
//       id: 1,
//       title: 'Card 1',
//       description: 'This is the first card.',
//     },
//     {
//       id: 2,
//       title: 'Card 2',
//       description: 'This is the second card.',
//     },
//     {
//       id: 3,
//       title: 'Card 3',
//       description: 'This is the third card.',
//     },
//   ];
  
//   const AdminPage = () => {
//     const { searchQuery } = useContext(searchContext);
//     const { pending, error, cards, handleGetCards, setCards, handleGetCounts, usersCountNumber } = useCards();
  
//     let filtered = [];
//     if (searchQuery.length > 0) {
//       filtered = cards?.filter((card) => card?.title.match(searchQuery));
//     } else {
//       filtered = cards;
//     }
  
//     useEffect(() => {
//       handleGetCards();
//       handleGetCounts();
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
  
  
//     return (
//       <Container>
//         <PageHeader title="admin section" subtitle="On this page you can find all users and cards from all categories" />
  
//         <Box container alignItems="center" justifyContent="space-between" flexDirection="row">
//           <CardsFeedback />
  
//           <table style={{ width: '50%' }}>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cards.map((card) => (
//                 <tr key={card.id}>
//                   <td>{card.title}</td>
//                   <td>{card.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Box>
//       </Container>
//     );
//   };
    

// export default AdminPage

import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader';
import useCards from '../../cards/hooks/useCards';
import { searchContext } from '../../providers/SearchProvider';
import { Container, Box, ButtonGroup, Button, Menu, MenuItem, IconButton } from '@mui/material';
import CardsFeedback from '../../cards/components/CardsFeedback';
// import { UserProvider } from '../providers/UserProvider';
import TableComponents from '../components/TableComponents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useUsers from '../hooks/useUsers';

const AdminPage = () => {

    const { pending, error, cards, handleGetCards, setCards,handleGetCounts,usersCountNumber} = useCards();
    const { users } = useUsers();
    const views = ['table', 'cards', 'users'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = () => {
    };
  
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
    const [displayMode, setDisplayMode] = useState('table');
 
    // const { UserContext } = useContext(UserProvider);
    // const {user} = UserProvider(); 
    // let users =  []
    // if(UserContext.length > 0){
    //     users = user[0];
    // }

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

    // useEffect(() => {
    //     if (views !== 'table') {
    //         setDisplayMode('cards');
    //     } else {
    //         setDisplayMode('table');
    //     }
    // }, [views])

    // if (views !== 'table'){
    //     setDisplayMode('cards');
    // }
    // else{
    //     setDisplayMode('table');
    // }

    return (
     <Container>
        <PageHeader title="admin section" subtitle="On this page you can find all users and cards from all categories" />

        <Box justifyContent={'center'} display={'flex'}>
        <ButtonGroup variant="contained" sx={{width: 'full', height: '2rem'}}>
        <Button onClick={handleClick}>{views[selectedIndex]}</Button>
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

            {displayMode === 'table' && <TableComponents cards={filtered} />}

            {displayMode === 'cards' && (
                <CardsFeedback 
                usersCountNumber={usersCountNumber}
                pending={pending}
                error={error}
                cards={filtered}
                setCards={setCards}/>
            )}

            
        </Box>
     </Container>
    )
}

export default AdminPage