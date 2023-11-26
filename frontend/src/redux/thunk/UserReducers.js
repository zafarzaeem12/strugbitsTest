import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
const liveUrl = 'http://localhost:3005/admin/api'

//create customer api start here
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
//create api end here

//get all customer data api start here
const getCustomer = createAsyncThunk('user/get', async (data) => {
    try {
        const response = await axios.get(`${liveUrl}/get`)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});
//get all customer data api end here

// get customer by id api start here
const getCustomerDetails = createAsyncThunk('user/details', async (bodyParams) => {
    try {
        const id = bodyParams.id
        const response = await axios.get(`${liveUrl}/get/${id}`)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});
// get customer by id api end here

// update customer api start here
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
// update customer api end here

// delete customer api start here
const deleteCustomer = createAsyncThunk('user/delete', async (data) => {
    try {
        const id = data.id
        const response = await axios.delete(`${liveUrl}/delete/${id}`)
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
});
// delete customer api end here
export {
    AddCustomer,
    getCustomer, 
    getCustomerDetails,
    updateCustomer,
    deleteCustomer
};