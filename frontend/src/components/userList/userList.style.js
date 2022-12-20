const userListStyle={
     
    general:{
        backgroundColor:"#FD96A9",
        height:"100vh",
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",

        '& .MuiTableCellRoot::before':{
            content: 'attr(label)',
            fontWeight: "bold",
            width: "100px",
            minWidth: "100px"
        }
       
    },

    table:{
        
        backgroundColor:"#CECCCC",

    },

    head:{
       backgroundColor:"#191716",
       
       color:"#F7F0F0",

       cell:{
         color:"#F7F0F0"
       }
    }

}

export  default userListStyle