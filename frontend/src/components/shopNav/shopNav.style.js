const shopNavStyle={
    general:{
        position: 'fixed',
        top:"-5px",
        marginTop:"65px",
        zIndex: 2,
       
        color:"#392F5A"
    },

    cartHeadline:{
        
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#392F5A",
        color:"white"
        
     },

    iconButton:{
        color:"#EEEEEE",
        fontSize:"2rem"
    },

    category:{

    },

    tabs:{
       minWidth:"25%",
       color:"#F7F0F0",
       padding:"20px 40px",
        
       '&:hover':{
          transform: "scale(0.9)",
          backgroundColor:"#F7F0F0",
          borderRadius:"12px",
          color:"primary.main",
          transition: "transform .8s"
       }
    }


}

export default shopNavStyle