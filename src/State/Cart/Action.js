import axios from "axios";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_FAILURE, GET_ALL_CART_ITEM_REQUEST, GET_ALL_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import { api } from "../../Component/Config/apiConfig";

export const findCart = (jwt) => async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
        const response=await api.get(`/api/cart`,{
            headers:{
               Authorization:`Bearer ${jwt}`
            },
        });
        console.log("my cart",response.data)
        dispatch({type:FIND_CART_SUCCESS,payload:response.data});

    } catch (error) {   
        dispatch({type:FIND_CART_FAILURE,payload:error})
       console.log("Error",error)
    }
}

export const getAllCartItems = (reqData) => async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEM_REQUEST });
    try {
        const response=await axios.get(`/api/carts/${reqData.cartId}/items`,{
            headers:{
               Authorization:`Bearer ${reqData.jwt}`
            },
        });
        dispatch({type:GET_ALL_CART_ITEM_SUCCESS,payload:response.data});

    } catch (error) {
        dispatch({type:GET_ALL_CART_ITEM_FAILURE,payload:error})
       console.log("Error",error)
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const {data}=await api.put(`/api/cart/add`,reqData.cartItem,{
            headers:{
               Authorization:`Bearer ${reqData.jwt}`
            },
        });
        console.log("add item to cart",data)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});

    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error})
       console.log("Error",error)
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    if (!reqData || !reqData.data || !reqData.jwt) {
        console.error("Invalid request data for updating cart item:", reqData);
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: "Invalid request data" });
        return;
    }

    try {
        const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
            headers: { Authorization: `Bearer ${reqData.jwt}` },
        });

        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
        console.log("Cart item updated successfully:", data);

    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
        console.error("Error updating cart item:", error);

    }
};


export const removeCartItem = ({ jwt, cartItemId, reqData }) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    try {
        const { data } = await api.delete(
            `/api/cart-item/${cartItemId}/delete`,
            {
                data: reqData?.data, 
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );

        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
        console.log("remove cart item", data);
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error });
        console.error("Error", error);
    }
};


export const clearCartItem = (jwt) => async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
        const {data}=await axios.delete(`/api/cart/clear`,{
        },{
            headers:{
               Authorization:`Bearer ${jwt}`
            },
        });
        dispatch({type:CLEAR_CART_SUCCESS,payload:data});
        console.log("Clear cart",data);
    } catch (error) {
        dispatch({type:CLEAR_CART_SUCCESS,payload:error});
       console.log("Error",error)
    }
}