import axios from "axios"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_URL } from "../../Component/Config/apiConfig"
import { useNavigate } from "react-router-dom"

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.jwt,
    });

    console.log("Register Success", data);

  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    console.log("Registration Error:", error);
  }
};

export const loginUser=(reqData)=>async(dispatch)=>{
    const navigate=useNavigate();
 
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData);


        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        if(data.role=="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant");
        }
        else{
            reqData.navigate("/");
        }

        dispatch({type:"LOGIN_SUCCESS",payload:data.jwt})   
        console.log("Login Success",data);
        
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error})
        console.log("Error",error)
    }
}

export const getUser=(jwt)=>async(dispatch)=>{
 
    dispatch({type:GET_USER_REQUEST});
    try {
        const {data}=await axios.get(`${API_URL}/api/user/profile`,{headers:{
            Authorization:`Bearer ${jwt}`
        }});

        dispatch({type:"GET_USER_SUCCESS",payload:data});
        console.log("User Profile",data);
        
    } catch (error) {
        dispatch({type:GET_USER_FAILURE,payload:error})
        console.log("Error",error)
    }
}

export const addTofavorite=(jwt,restaurantId)=>async(dispatch)=>{
 
    dispatch({type:ADD_TO_FAVORITE_REQUEST});
    try {
        const {data}=await axios.put(`${API_URL}/api/restaurant/add-favorites/${restaurantId}`,{},{headers:{
            Authorization:`Bearer ${jwt}`
        }});

        dispatch({type:"ADD_TO_FAVORITE_SUCCESS",payload:data});
        console.log("Added to favorites",data);
        
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("Error",error)
    }
}

export const logoutUser=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
    console.log("Logout Success");
} 