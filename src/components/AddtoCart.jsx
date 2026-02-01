import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AddtoCart({ saree, onRemove }) {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="240"
          sx={{ height: 240, objectFit: 'cover' }}
          image={saree.image}
          title={saree.type}
        />
        <CardContent sx={{ height: 90, overflow: 'hidden', py: 1 }}>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
          >
            {saree.type}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Fabric: {saree.fabric} <br />
            <strong style={{ color: '#710A14' }}> Price: ₹{saree.price}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{
              color: '#710A14',
              '&:hover': { color: '#8F3C45' }, // Proper hover syntax in MUI
            }}
            onClick={() => onRemove(saree.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default AddtoCart;
