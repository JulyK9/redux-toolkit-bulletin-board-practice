import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// const initialState = [
//   { id: '0', name: 'Dude Lebowski' },
//   { id: '1', name: 'Neil Young' },
//   { id: '2', name: 'Dave Gray' },
// ]

const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

// export const { } = usersSlice.actions;

export default usersSlice.reducer