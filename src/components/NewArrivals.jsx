import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Dummy data for new arrivals
const newArrivals = [
  { id: 1, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard2_65e816d0-2864-4103-8a22-ac46c2d90089_400x.jpg?v=1714480507', name: 'Product 1', rating: 4.5, likes: 10 },
  { id: 2, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard5_ea1018d1-88e1-4f74-8677-c7d78e503229_400x.jpg?v=1714479423', name: 'Product 2', rating: 3.8, likes: 15 },
  { id: 3, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard2_fb306f1d-b93e-4b3a-bcc4-ffc207400592_400x.jpg?v=1714478899', name: 'Product 3', rating: 4.2, likes: 20 },
  // Add more products here
];

const NewArrivals = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        New Arrivals
      </Typography>
      <Grid container spacing={2} sx={{ overflowX: 'auto' }}>
        {newArrivals.map((product) => (
          <Grid item key={product.id}>
            <Card sx={{ maxWidth: 200 }}>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating}
                </Typography>
                <IconButton aria-label="like">
                  <FavoriteIcon />
                  {product.likes}
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewArrivals;
