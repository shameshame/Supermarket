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
     width:"28rem",
     height:"250px",
    //  transform:"translate(400%,200%) scale(9.5)"


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
     transform:"translateY(72vh)",
     transition:"linear 300ms",
     
   },

   hidden:{
    transform:"translateY(67%)",
    transition:"linear 300ms",
  },

   emptyCart:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
   },

   emptyCartHeadline:{
    
    fontSize:"1.5rem",
    color:"black",
    position:"relative",
    top:"9rem",
    zIndex:3,
    transform:"rotateZ(-35deg)"
   }
   
} 

export default cartStyle