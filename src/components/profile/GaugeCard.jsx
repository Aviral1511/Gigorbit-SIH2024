import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Gauge from './Gauge';

export default function RecipeReviewCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        paddingBottom: 2,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {props.title}
        </Typography>
      </CardContent>
      <Gauge />
    </Card>
  );
}