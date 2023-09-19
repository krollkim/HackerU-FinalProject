import React from "react";
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import cardType from '../../../models/types/cardType';

const CardBody = ({ card }) => {
  return (
    <>
      <CardContent>
        <CardHeader title={card.title} subheader={card.subtitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box mt={1}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", gap: 1 }}
          >
            <Typography fontWeight={700} component="span">
            description:
            </Typography>
            <Typography component="span">{card.description}</Typography>
          </Typography>
          <Typography
            sx={{ display: "flex", gap: 1 }}
            variant="body2"
            color="text.secondary"
          >
            <Typography fontWeight={700} component="span">
            directed by:
            </Typography>
            <Typography component="span">
                {card.directedBy}
            </Typography>
          </Typography>
          <Typography
            sx={{ display: "flex", gap: 1 }}
            variant="body2"
            color="text.secondary"
          >
          </Typography>
        </Box>
      </CardContent>
    </>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;