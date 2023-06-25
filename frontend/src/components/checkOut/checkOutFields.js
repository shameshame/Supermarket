const checkOutFields = [{name:"card-number",type:"text",label:"Card Number",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Includes digits only, the length is 16"
                      }},
                      {name:"card owner",type:"text",label:"Name on Card",
                      pattern: {
                        value: /^[a-zA-Z]{8,15}$/i,
                        message: "Card name must contain letters only"
                      }},
                      { name:"cvv", type:"text",label:"CVV",
                        pattern:{ 
                            value: /^[0-9]{3}$/,
                            message: "Includes digits only, the length is 3"
                      }}
                    ]

                    

export default checkOutFields