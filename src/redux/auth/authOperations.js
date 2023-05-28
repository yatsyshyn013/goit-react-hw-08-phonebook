import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}


export const registerFetch = createAsyncThunk(
  "auth/register",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      // При успішному запиті повертаємо проміс із даними
      setAuthHeader(response.data.token)  
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const logInFetch = createAsyncThunk(
  "auth/login",

  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);

      setAuthHeader(response.data.token)  
      return response.data;
    } catch (e) {
   
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutFetch = createAsyncThunk(
  "auth/logout",

  async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        clearAuthHeader();
      
    } catch (e) {
   
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const refreshUser = createAsyncThunk(
  "auth/refresh",

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    // console.log("Refresh");
      
    try {
      setAuthHeader(persistedToken)
      const response = await axios.get('/users/current');
      return response.data;
      
    } catch (e) {
   
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
