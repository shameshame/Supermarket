import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {FormProvider, useForm} from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton'
import checkOutStyle from './checkOut.style.js';
import Grid from '@mui/material/Grid';
import { totalItems,totalPrice } from '../../js/orderSummary.js';
import {useSendOrderMutation} from "../../redux/services/cartApi";
import {emptyCart} from "../../redux/features/cart/cartSlice"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

function CheckOut(props) {
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() 

    const {
        watch,register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful},
    } =useForm();

    const getMonth = (month)=>{
        return month<10 ? `0${month}`:month
    }

    const cart = useSelector(state=>state.cart.cartItems)
    const navigate=useNavigate()
    const [sendOrderTrigger, { isLoading, isSuccess, error, isError,data }]=useSendOrderMutation()
    const dispatch=useDispatch() 
    let itemsInCart=totalItems(cart)
    let priceInTotal=totalPrice(cart)

    
    const payment= async()=> {
      try{
         await sendOrderTrigger({cart,totalItems:itemsInCart,totalPrice:priceInTotal}).unwrap()
         dispatch(emptyCart())
        
      }catch(error){
        console.log(error.message)
      }  
   }

   const cardIsNotExpired = (month,year)=>{

      let monthAsAnArray=month.split('') ;
      let monthAsANumber = monthAsAnArray[0]===0 ? parseInt(monthAsAnArray[1]) : parseInt(month)

      return !(monthAsANumber<currentDate.getMonth()+1 && parseInt(year) ===currentYear)
   }

   

    useEffect(() => {

      if(isSuccess) navigate("/customer/order_sent",{ state: {orderId: data.id}})
   }, [isLoading]);

    
    return (
        
        <FormProvider >
        <Box component="form" onSubmit={handleSubmit(payment)} style={checkOutStyle.general} >
           
           <TextField label="Full Name" style={checkOutStyle.textField} 
            {...register("full-name",
               {    required:"Full Name is required",
                    pattern: {
                        value: /^[a-zA-Z ]{8,15}$/i,
                        message: "Full name must contain letters and spaces only"
                     }
               },
            
            )}
            helperText={errors?.["full-name"]? errors["full-name"].message : null}
            />
           <TextField label="Card Number" style={checkOutStyle.textField} 
            {...register("card-number",
             {required:"Card Number is required",
              pattern:  {
                           value: /^[0-9]{16}$/,
                           message: "Includes digits only, the length is 16"
                         }
              })}
              helperText={errors?.["card-number"]? errors["card-number"].message : null}
            />

           <Typography style={checkOutStyle.expirationLabel}>Expiration Date :</Typography>
          
           <Stack direction="row" style={checkOutStyle.expirationDate} {...register("expiration-date",
             {validate:()=> cardIsNotExpired(watch("month"),watch("year")) || "Invalid expiration date"}
            )}>
               <Select   style={checkOutStyle.selectField} {...register("month")}>
                  {Array(12).fill().map((dummy,index)=>index+1).map(month=>
                        <MenuItem value={getMonth(month)}>
                           {getMonth(month)}
                        </MenuItem>)
                  }
                  
               </Select>
              <Typography style={checkOutStyle.dateSlash}>/</Typography>
               <Select  style={checkOutStyle.selectField} {...register("year")}>
                     {Array(10).fill(currentYear).map((currentYear,index)=>currentYear+index).map(year=>
                        <MenuItem value={year}>
                           {year}
                        </MenuItem>)
                     }
               </Select>
            </Stack>
            <Typography color="error" >{errors?.["expiration-date"]? errors["expiration-date"].message : null}</Typography>
            <TextField label="CVV" style={checkOutStyle.cvv}
             {...register("card-signature",
              {required:"CVV is required",
               pattern: { 
                           value: /^[0-9]{3}$/,
                           message: "Includes digits only, the length is 3"
                        }
               })
             
             }
             helperText={errors?.["card-signature"]? errors["card-signature"].message : null} 
            />
            
            <Grid container sx={{justifyContent:"center",mt:5}} spacing={4}>
             {[1,2,3,4].map(item=><Grid   item xs={3} md={2} component="img" 
               src={`https://res.cloudinary.com/dk2ezfo5x/image/upload/v1683315308/credit_cards/credit-card-${item}.svg`
               }>
            </Grid>)}
           </Grid> 
           <LoadingButton   style={checkOutStyle.sendOrderButton} type="submit"   loading={isLoading} variant="contained"  >
                  Charge:${priceInTotal.toFixed(2)}
           </LoadingButton> 
        </Box>
        </FormProvider>
    );
}

export default CheckOut;