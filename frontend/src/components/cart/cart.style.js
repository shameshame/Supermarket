const cartStyle={
   general:{
    overflowY:"scroll",
    position:"relative",
    top:"-7rem"
    
   }, 

   accordion:{
    position:"fixed",
    top:"150px",
    backgroundColor:"transparent"
   },
   
   iconButton:{
    color:"#392F5A",
    display: "block"
   },

   bagIcon:{
     color:"#e6e6e6",
     width:"25.5rem",
     height:"200px"
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

   expanded:{
     transform:"translateY(60vh)",
     transition:"linear 300ms",
    
   },

   hidden:{
    transform:"translateY(-1.2rem)",
    transition:"linear 300ms",
    backgroundColor:"#e6e6e6",
    
    
   },

   emptyCart:{
      width:"100px",
      height:"100px"
   }
   
} 

export default cartStyle