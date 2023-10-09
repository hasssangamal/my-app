
import React, { useEffect} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import { Badge, Box, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import {as} from '../redux/prouctsslice'
import {addtocart} from '../redux/cartslic'
import { useSelector, useDispatch } from 'react-redux'
import {increase ,decrease } from '../redux/cartslic'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navgaite =useNavigate()
  


    const {productsx,isloading}=useSelector((state) => {
    return   state.product
    })
    const {carts,cartsid}=useSelector((state) => {
    return   state.cart
    })
    const dispatch = useDispatch()
    const getquntity = (api) => {
      const myproducts = carts.find((item) => {
        return item.id === api.id
      })
    
return  myproducts.qutity

    }
useEffect(() => {
dispatch(as())
}, [ ]);
if(isloading){
  return <p>
    loading...........
  </p>
}

  return (
    <>
    <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"}}}>
{productsx.data?.map((item ,index)=>(
      <Card key={item.id} sx={{ maxWidth: 277,marginLeft:"10px",marginRight:"10px",mb:"20px"}}>

      <CardMedia
      onClick={() => {
        console.log(item);
        navgaite(`Detailsprod/${item.id}`) 
      }}
        component="img"
        height="194"
        image={item.imageLink[0]}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}} disableSpacing>
      {/* <Button sx={{textTransform:"capitalize"}} variant="contained" 
        onClick={() => {
     dispatch(addtocart(item));
     console.log(carts);
  
        }}>Add to cart</Button> */}
{cartsid.includes(item.id) ? <>
              <IconButton onClick={() => {
    dispatch(increase(item.id))
    }}>
    <Add />
    </IconButton>
      
      <Typography variant="body1" sx={{marginRight:"10px"}} >  
      
      <Badge sx={{textAlign:'center'}} badgeContent={getquntity(item)} color="primary"></Badge>
      </Typography>
    <IconButton  onClick={() => {
      dispatch(decrease(item.id))
    }}>
        <Remove />
    </IconButton>
        </>
          : <Button sx={{textTransform:"capitalize"}} variant="contained" 
          onClick={() => {
       dispatch(addtocart(item));
       console.log(carts);
    
          }}>Add to cart</Button>
          }
      
  

    
        <Typography variant="body1" className='kj'>{`$ ${item.price}`}</Typography>
      
      </CardActions>

    </Card>
))}
      </Box>  
    </>
  );
}

export default Home;
