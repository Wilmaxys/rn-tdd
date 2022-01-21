import { DefaultTheme } from '../../constants';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    theme: DefaultTheme,
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setTheme } = actions;

export default reducer;
