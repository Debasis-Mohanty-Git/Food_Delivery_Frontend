
import { api } from "../../Component/Config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(`/api/order`, reqData.order, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
            },
        });

         if(data.payment_url){
            window.location.href=data.payment_url;
        }
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        console.log("Created order data", data);

    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE });
        console.log("Error", error);
    }
}


export const getUsersOrder = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USERS_ORDER_REQUEST });
    try {
        const { data } = await api.get(`/api/order/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({ type: GET_USERS_ORDER_SUCCESS, payload: data });
        console.log("get users order data", data);

    } catch (error) {
        dispatch({ type: GET_USERS_ORDER_FAILURE });
        console.log("Error", error);
    }

}

