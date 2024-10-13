import { configureStore } from '@reduxjs/toolkit';
// Import the reducer (default export from slice)
import { counterSlice } from './Slices/CounterSlices';

export default configureStore({
  reducer: {
    counter: counterSlice, // Pass the reducer function here
  },
});
