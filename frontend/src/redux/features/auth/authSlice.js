import {createSlice} from "@reduxjs/toolkit"


const initialState = {loggedIn:null}

const authSlice = createSlice({
   name:'auth',
   initialState ,
   reducers:{
      setCredentials:(state,action)=>{
         state.loggedIn=action.payload
      },
      logOut : ()=>initialState
   }

})

export const {setCredentials,logOut}=authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state)=>state.user.loggedIn

