const cartStyle={
   general:{
    overflowY:"scroll",
   }, 
   
   headline:{
      backgroundColor:"#392F5A",
      display: "flex",
      justifyContent:"space-between"
   },

   iconButton:{
    color:"#F7FFF7",
    display: "block"
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
     transform:"translateY(100vh)",
     transition:"linear 300ms",
    
   },

   emptyCart:{
      width:"100px",
      height:"100px"
   }
   
} 

export default cartStyle