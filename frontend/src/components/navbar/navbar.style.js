const navbar= {
    app:{
        backgroundColor:"#F7F0F0",
    },

    toolbar:{
        display: "flex",
        justifyContent:"space-between",
        marginTop:"16px",
        fontFamily: "'Oswald', sans-serif"
    },

    toolbarMobile:{
        display:"flex",
        flexDirection:"column",
        rowGap:"10%"
    },

    

    logo:{
        background:"-webkit-linear-gradient(#ffff00,#1976d2)",
        backgroundClip:"text",
        textFillColor:"transparent"
    },

    searchField:{
        borderRadius:"16px",
    },

    searchIconMobile:{
        position:"fixed",
        top:"20%",
        left: "40%"
    },

    searchFieldMobile:{
        position:"fixed",
        top:"30%", 
        backgroundColor:"white",
        borderRadius:"16px"
    }


}

export default navbar