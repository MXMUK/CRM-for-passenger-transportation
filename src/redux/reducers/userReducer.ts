import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface userState {
  email: string;
}

// Define the initial state using that type
const initialState: userState = {
  email: ''
};

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    }
  }
});

export const { actions } = counterSlice;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.user.email;

export default counterSlice.reducer;
