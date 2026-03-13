import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name:"theme",
  initialState:{
    value:"dark"
  },
  reducers:{
    changeTheme:((theme)=>{
      theme.value === 'dark' ?theme.value='light':theme.value='dark'
    })
  }
})

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;