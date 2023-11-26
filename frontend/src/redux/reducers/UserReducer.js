import { createSlice } from '@reduxjs/toolkit';
import { AddCustomer, getCustomer, getCustomerDetails,updateCustomer,deleteCustomer } from '../thunk/UserReducers';

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    // ----------------------------------- for create customers api -----------------------------------------------
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
    // ----------------------------------- for all customers fetched api -----------------------------------------------
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

    // --------------------------------for customer get by id api --------------------------------------------------
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

    // ----------------------------------for update api ------------------------------------------------
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

      // ---------------------------- for delete api------------------------------------------------------
    builder.addCase(deleteCustomer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const UserReducers = UserSlice.reducer;