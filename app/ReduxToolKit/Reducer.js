import { createSlice, nanoid } from "@reduxjs/toolkit";

const InitialState = {
  user: [{name:"vikas"}],
};
const Slice = createSlice({
  name:'LoginUserSlice',
  InitialState,
  reducers: {
    AddUser: (state, action) => {
      console.log(action,nanoid())
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state?.user?.push(data);
      
    },
  },
});


export const {AddUser} = Slice.actions;
export default Slice.reducer;