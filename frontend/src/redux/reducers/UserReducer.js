import { createSlice } from '@reduxjs/toolkit';
import { AddCustomer, getCustomer, getCustomerDetails,updateCustomer } from '../thunk/UserReducers';

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(AddCustomer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(AddCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(AddCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------------------------------------------------------
    builder.addCase(getCustomer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // ----------------------------------------------------------------------------------
    builder.addCase(getCustomerDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCustomerDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // ----------------------------------------------------------------------------------
    builder.addCase(updateCustomer.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(updateCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(updateCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const UserReducers = UserSlice.reducer;