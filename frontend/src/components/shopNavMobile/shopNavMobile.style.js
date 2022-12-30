import { keyframes } from '@mui/system'

const spin = keyframes`
      from {transform: rotate(0deg);}
      to {transform: rotate(360deg) scale(1.5);}
     `;


const shopNavMobileStyle = {

  general:{
    position:"relative",
    height:"100%"
   },

   menuButton:{
    color:"#392F5A",
    fontSize:"3rem"
   },

   menuButtonOnClick:{
    animation: `${spin} 1s 2 ease`,
    color:"#E52210"
   },
  
  closeButton:{
    position:"fixed",
    top:"1%",
    right:"81%",
    color:"white",
    backgroundColor:"black",
    fontSize:"2.5rem",
    indexZ:108
    
  }  

}

export default shopNavMobileStyle