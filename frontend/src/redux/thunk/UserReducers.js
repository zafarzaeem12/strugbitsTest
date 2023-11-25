import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
const liveUrl = 'http://localhost:3005/admin/api'

const AddCustomer = createAsyncThunk('user/add', async (data) => {
    try {
        const bodydata = new FormData();
        bodydata.append('name' , data.name)
        bodydata.append('username',data.username)
        bodydata.append('email',data.email)
        if(data.profilePicture){
            bodydata.append('profilePicture', data.profilePicture)
        }
        console.log("bodydata",bodydata)
        const response = await axios.post(`${liveUrl}/create`, bodydata ,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type for image uploads
            }})
        console.log('response', response)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});

const getCustomer = createAsyncThunk('user/get', async (data) => {
    try {
        const response = await axios.get(`${liveUrl}/get`)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});
const getCustomerDetails = createAsyncThunk('user/details', async (bodyParams) => {
    try {
        const id = bodyParams.id
        const response = await axios.get(`${liveUrl}/get/${id}`)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});

const updateCustomer = createAsyncThunk('user/update', async (data) => {
    try {
        const bodydata = new FormData();
        bodydata.append('name' , data.formData.name)
        bodydata.append('username',data.formData.username)
        bodydata.append('email',data.formData.email)
        if(data.formData.profilePicture){
            bodydata.append('profilePicture', data.profilePicture)
        }
      
        const id = data.bodyParams.id
        const response = await axios.put(`${liveUrl}/update/${id}`, bodydata ,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type for image uploads
            }})
        console.log('response', response)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});
const RemoveUser = createAsyncThunk('user/logout', async (data) => {

  //const response = await PostFunction(link, data);
 // return response;
});

const SearchUser = createAsyncThunk('user/search', async (data) => {
 
//   const response = await PostFunction(link, data);
//   return response;
});
export { AddCustomer ,getCustomer , getCustomerDetails,updateCustomer };