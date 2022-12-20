const cartStyle={
   general:{
    height:"300px",
    position:"relative",
    top:"0",
    
  }, 

   accordion:{
    position:"fixed",
    top:"10%",
    backgroundColor:"transparent",
    
   },

   
   
   iconButton:{
    color:"#392F5A",
    display: "block"
   },

   bagIcon:{
     color:"#e6e6e6",
     width:"25.5rem",
     height:"300px",
     
   },

   cartButton:{
    color:"#392F5A",
    fontSize:"40px",
    
   },
    
   sendOrderButton:{
    backgroundColor:"#96031A",
    color:'#FBFFFE',
    padding:"10px 20px",
    borderRadius:"1.5rem",
    marginRight:"5rem"
   },
   
   checkOutButton:{
    backgroundColor:"#E52210",
    color:"white",
    padding:"10px 20px",
    borderRadius:"1.5rem",
    marginRight:"5rem"
   
   },
   
   accordionSummary:{
    backgroundColor:"#e6e6e6",
    borderRadius:"16px"
   },

   expanded:{
     transform:"translateY(71vh)",
     transition:"linear 300ms",
     
   },

   hidden:{
    transform:"translateY(67%)",
    transition:"linear 300ms",
    
   },

   

   emptyCart:{
      width:"100%",
      // height:"100px"
   },

   emptyCartHeadline:{
    textAlign:"center",
    fontSize:"1.5rem",
    zIndex:3,
    position:"relative",
    top:"10rem",
    transform:"rotateZ(-35deg)"
   }
   
} 

export default cartStyle