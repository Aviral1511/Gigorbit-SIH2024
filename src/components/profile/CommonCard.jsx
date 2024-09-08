import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function RecipeReviewCard(props) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        paddingBottom: 2,
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 'bold',
            display: 'flex',
            fontSize: '3rem',
            marginX: '4vw',
            justifyContent: 'center',
          }}
        >
          {props.content}
            {
                (props.title === 'Balance')&&(
                    <span>$</span>
                )
            }
        </Typography>
      </CardContent>
    </Card>
  );
}