import React from 'react';
import { Box, Button, CardMedia, IconButton,Badge, Paper, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Delete, Remove } from '@mui/icons-material';
import {increase ,decrease ,deleteitem} from '../redux/cartslic'
import { useSelector, useDispatch } from 'react-redux'
const Cart = () => {
const {carts , }=useSelector((state) => {
  return state.cart
})
const dispatch =useDispatch()
  const DemoPaper = styled(Paper)(({ theme }) => ({
width: "100%",
    height:"100%",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));
let subtotal =0
  
  return (
    <>
    <Box className="cart" sx={{width:"95%",margin:"auto",textAlign:"center",flexWrap:"wrap"}}>

{carts.map((item)=>{

subtotal += Number(item.price ) * Number(item.qutity)
return (

  <DemoPaper key={item.id} variant="elevation" sx={{marginLeft:'10px',marginRight:'10px',mb:"15px"}}>
<Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginLeft:'-11px'}}>
<Button variant="outlined" color="error" sx={{marginRight:"5px",display:{xs:"none",md:"block"}}}
  onClick={() => {
    dispatch(deleteitem(item.id))
  }}>
Delete
  </Button>
<Button variant="outlined" color="error" sx={{marginRight:"5px",display:{xs:"block",md:"none"}}}
onClick={() => {
  dispatch(deleteitem(item.id))
}}>
<Delete/>
  </Button>
  <Typography variant="body1"sx={{marginRight:"10px"}} >{`$ ${Number(item.price ) * Number(item.qutity)}`}</Typography>
  <IconButton onClick={() => {
  dispatch(increase(item.id))
  }}>
  <Add />
  </IconButton>
    
    <Typography variant="body1" sx={{marginRight:"10px"}} >  
    
    <Badge sx={{textAlign:'center'}} badgeContent={item.qutity} color="primary"></Badge>
    </Typography>
  <IconButton  onClick={() => {
    dispatch(decrease(item.id))
  }}>
      <Remove />
  </IconButton>
  <Typography variant="body1" >{item.productName}</Typography>
    <CardMedia

    component="img"
    width="22"
    height="60"
    
    image={item.imageLink[0]}
    alt="Paella dish"
  />
</Stack>
  </DemoPaper>
)

}


  


)}
      
      



<Paper sx={{width:"60%",margin:"auto",mt:"60px"}}>
  <Typography variant="body1" sx={{padding:"20px"}} >Cart summary</Typography>
  <Divider sx={{width:"100%"}}/>
  <Stack sx={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"20px"}}>
  <Typography variant="body1" >Subtotal</Typography>
  <Typography variant="body1" > ${subtotal}</Typography>
  
  </Stack>
  <Divider/>
  <Button sx={{width:"100%"}} variant="contained">Checkout</Button>
</Paper>

      
    </Box>

    </>
  );
}

export default Cart;
