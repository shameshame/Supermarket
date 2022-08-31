import {createSlice} from "@reduxjs/toolkit"


const initialState = {loggedIn:null}

const authSlice = createSlice({
   name:'auth',
   initialState ,
   reducers:{
      setCredentials:(state,action)=>{
         // const {user,accessToken}=action.payload
         // console.log(user)
         state.loggedIn=action.payload
         // console.log(state.loggedIn);
         // state.token=accessToken
         // console.log(state)
      },
      logOut : ()=>initialState
   }

})

export const {setCredentials,logOut}=authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state)=>state.loggedIn

