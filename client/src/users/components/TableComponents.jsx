import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Box, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import ROUTES from '../../routes/routesModel';
import { useNavigate } from "react-router-dom";
import useCardActionBar from '../../cards/components/card/hooks/useCardActionBar';
import useCards from '../../cards/hooks/useCards';

const TableComponents = ({ cards, cardId, setCards, handleLikeCard }) => {

  const filteredCards = cards || [];
  const navigate = useNavigate();
  const { handleDeleteCard } = useCards(cardId);
  const { onDelete } = useCardActionBar(handleDeleteCard, handleLikeCard, setCards, cards);

  return (
  <Box sx={{pb:8}}>
    <Box sx={{border: 1, borderRadius: 5, padding: 3, marginTop: 5}}>
    <Table>
    <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCards.map((card) => (
            <TableRow key={card._id}>
              <TableCell align="center">{card?.title}</TableCell>
              <TableCell align="center">{card?.description}</TableCell>
              <TableCell align="center">{card?.createdAt}</TableCell>
              <TableCell align="center">
                <IconButton aria-label='delete' onClick={() => onDelete(card._id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label='edit' onClick={() => navigate(`${ROUTES.EDIT_CARD}/${card._id}`)}>
            <CreateIcon />
          </IconButton>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </Box>
  </Box>
  );
};

export default TableComponents;