import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {details} from '../redux/datailsslice'
import {  useParams } from 'react-router-dom';
import { Badge, Box, Button, IconButton, Typography } from '@mui/material';
import {addtocart} from '../redux/cartslic'
import {increase ,decrease } from '../redux/cartslic'
import { Add, Remove } from '@mui/icons-material';
const Detailsprod = () => {
  const {carts,cartsid}=useSelector((state) => {
    return   state.cart
    })
  const [inde, setinde] = useState(0);
  let params  =useParams()
  console.log(params);
  const {producdetails,isloading}=useSelector((state) => {
    return   state.productde
    })
    

    const dispatch = useDispatch()
  
    const getquntity = (api) => {
      const myproducts = carts.find((item) => {
        return item.id === api.id
      })
    
return  myproducts.qutity

    }


    useEffect(() => {
      dispatch(details(params.id))
    }, []);
    if(isloading){
      return <p>
        loading...........
      </p>
    }
    console.log(producdetails.data);
  return (
    <>
      {
        [producdetails?.data].map((item)=>(
        <div className="container">
          <div className='row text-center w-75 m-auto p-2  '>
          <div className="col-md-4 h-100">
          <img style={{cursor:"pointer"}}  src={item?.imageLink[inde]} className='w-75'  alt="" />
          </div>
          <div className="col-md-8">
            <div className='d-flex justify-content-between text-center mt-2'>
              <h2>{item?.productName}</h2>
              <p className='text-danger'>${item?.price}</p>
            </div>
            <p className='text-start'>{item?.description}</p>
            <div className='d-flex'>
            {
              item?.imageLink.map((img ,i)=>(
            <div className="inn w-50 me-2"><img style={{cursor:"pointer"}} src={img} className='w-100' alt=""
            onClick={() => {
              setinde(i);
            }}
            /></div>
              ))
            }


            </div>

      {cartsid.includes(item.id) ? <Box sx={{display:"flex", justifyContent:"space-evenly",alignItems:"center",marginTop:"10px"}}>
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
        </Box>
          : <Button sx={{textTransform:"capitalize",marginTop:"10px"}} variant="contained" 
          onClick={() => {
       dispatch(addtocart(item));
       console.log(carts);
    
          }}>Add to cart</Button>
          }
            {/* <Button sx={{textTransform:"capitalize" ,marginTop:"15px"}} variant="contained" 
          onClick={() => {
       dispatch(addtocart(item));
       console.log(carts);
    
          }}>Add to cart</Button> */}
          </div>
        </div>
        </div>
        ))
      }
    </>
  );
}

export default Detailsprod;
