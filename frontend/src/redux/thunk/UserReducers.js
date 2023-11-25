import { createAsyncThunk } from '@reduxjs/toolkit';

const AddUser = createAsyncThunk('user/login', async (data) => {
 
  const response = await PostFunction(link, data);
  if (response && response.status === 200) {
    return response;
  } 
    return response;
});

const RemoveUser = createAsyncThunk('user/logout', async (data) => {

  const response = await PostFunction(link, data);
  return response;
});

const SearchUser = createAsyncThunk('user/search', async (data) => {
 
  const response = await PostFunction(link, data);
  return response;
});
export { AddUser ,RemoveUser , SearchUser };