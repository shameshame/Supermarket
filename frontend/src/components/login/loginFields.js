const loginFields = [{name:"email",type:"e-mail",label:"E-mail",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }},
                      {name:"password",type:"password",label:"Password",
                      pattern: {
                        value: /^[a-zA-Z0-9]{8,15}$/i,
                        message: "Invalid password"
                      }},
                    ]

export default loginFields