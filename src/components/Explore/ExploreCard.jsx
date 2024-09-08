import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='h-[500px] p-[20px]' sx={{ maxWidth: 505 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        className='h-[300px] object-cover'
        image='data:image/jpeg;base64,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'
        alt="Paella dish"
        sx={{
            objectFit: 'cover', // Control how the image fits inside the card
          }}

      />
      <CardContent>
        <Typography className='text-[30px]' variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>

      </Collapse>
    </Card>
  );
}
