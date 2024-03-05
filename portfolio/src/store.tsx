import { configureStore, createSlice } from '@reduxjs/toolkit';

const backgroundSlice = createSlice({
  name: 'background',
  initialState: { color: '#ffc700' },
  reducers: {
    setBackground: (state, action) => {
      const colors: Record<string, string> = {
        'FrontPage': '#ffc700',
        'Projects': '#7FBC8C',
        'Contact': '#746BEB'
      };
      state.color = colors[action.payload];
    }
  }
});

export const { setBackground } = backgroundSlice.actions;

const store = configureStore({
  reducer: {
    background: backgroundSlice.reducer
  }
});

export default store;
