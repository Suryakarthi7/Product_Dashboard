import React from 'react'
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ProductDetails = () => {

    const location = useLocation();
    const {productDetails} = location.state;
    const product = productDetails;
   // console.log(productDetails);
  return (
    <>
    <br />
    <p> <span className='font-bold pl-[45px] text-xl mt-[20px]'> Product Details </span> / {product.title} </p>
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' // Ensures full page height
      }}
    >
      <Card 
        sx={{ 
          maxWidth: '80%', 
          height: '80%', 
          display: 'flex',
          flexDirection: 'row', 
          boxShadow: 3, 
          borderRadius: 2 
        }}
      >
        {/* Image Section */}
        <Box 
          sx={{ 
            flex: '1 1 50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: 2
          }}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px' 
            }} 
          />
        </Box>

        {/* Information Section */}
        <CardContent 
          sx={{ 
            flex: '1 1 50%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: 3
          }}
        >
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="h6">Price: ${product.price}</Typography>
          <Typography>Rating: {product.rating?.rate} / 5</Typography>
          <Typography>{product.description}</Typography>
        </CardContent>
      </Card>
    </Box>
        
    
    </>
  )
}

export default ProductDetails;