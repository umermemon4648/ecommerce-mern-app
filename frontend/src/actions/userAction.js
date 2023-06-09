import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  NEW_USER_REQUEST,
  NEW_USER_SUCCESS,
  NEW_USER_FAIL,

  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,

  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
    
  CLEAR_ERRORS,
} from "../constants/userConstant";

import { API_BASE_URL } from "../config/apiConfig";

// Login User
export const getLoginUser = (email, password) => async(dispatch) =>{
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const config = {headers: {'Content-Type': 'application/json'}}
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/loginUser`,
    {email, password},
    {withCredentials: true},
    config,
    );    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.newUser
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
    console.log(error);
  }
}

// Register New User
export const registerNewUser = (userData) => async(dispatch)=>{
  try {
    dispatch({type: NEW_USER_REQUEST})
    const config = {headers: {'Content-Type': 'multipart/form-data'}, withCredentials : true}
    let url = `${API_BASE_URL}/api/auth/newUser`
    const {data} = await axios.post(url, userData, config )
    dispatch({
      type: NEW_USER_SUCCESS,
      payload: data.newUser,
    })
  } catch (error) {
    dispatch({
      type: NEW_USER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
    console.log(error);
  }
}

// Load User
export const loadTheUser = () => async(dispatch) =>{
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    let link = `${API_BASE_URL}/api/auth/me`
    const { data } = await axios.get(link,{withCredentials: true});
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.newUser
    })
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
    console.log(error);
  }
}

// Logout User
export const logoutUser = () => async(dispatch) =>{
  try {
    let link = `${API_BASE_URL}/api/auth/logoutUser`
    await axios.post(link,null, {withCredentials:true});
    dispatch({type: LOGOUT_SUCCESS});
    localStorage.clear();
    sessionStorage.clear();
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL
     
  })
}}

// ckearing all errors
export const clearErrors = ()=> async (dispatch)=>{
  dispatch({
      type: CLEAR_ERRORS
  })
}