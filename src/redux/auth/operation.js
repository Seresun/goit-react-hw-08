import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post("https://connections-api.goit.global/users/signup", userData);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post("https://connections-api.goit.global/users/login", userData);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("https://connections-api.goit.global/users/logout");
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  const response = await axios.get("https://connections-api.goit.global/users/current", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
