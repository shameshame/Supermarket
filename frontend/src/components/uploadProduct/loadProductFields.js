const loadProductFields = [{
                      name:"image",
                     },
                     {name:"description",type:"text",label:"Description",
                        pattern: {
                          value: /^[A-Za-z.]{3,20}$/i,
                          message: "The description includes letters only and must be up to 20 charachters"
                        }
                     },
                      {  name:"brand",
                         type:"text",
                         label:"Brand",
                         pattern: {
                           value: /^[a-zA-Z]{3,9}$/i,
                           message: "The description includes letters only and must be up to 9 charachters"
                         }
                      },
                      
                      {
                        name:"department",
                        label:"Department"
                      },

                      {
                        name:"quantity",
                        label:"Quantity",
                        type:"number"
                      },

                      {
                        name:"price",
                        label:"Price",
                        type:"number"
                      },

                      
                    ]

export default loadProductFields