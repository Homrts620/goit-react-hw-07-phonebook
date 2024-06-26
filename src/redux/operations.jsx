import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
baseURL: 'https://665c1e5b3e4ac90a04d8b450.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
'contacts/fetchAll',
async (_, thunkAPI) => {
    try {
    const response = await client.get('/contacts');
    return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const addContact = createAsyncThunk(
'contacts/addContact',
async (newContact, thunkAPI) => {
    try {
    const { name, number } = newContact;
    const response = await client.post('/contacts', {
        name: name,
        number: number,
    });
    return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error);
    }
}
);

export const deleteContact = createAsyncThunk(
'contacts/deleteTask',
async (contactId, thunkAPI) => {
    try {
    const response = await client.delete(`/contacts/${contactId}`);
    return response.data;
    } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
    }
}
);