import { api } from "../../Component/Config/apiConfig";
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => async (dispatch) => {

    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

    try {
        const response = await api.put(`/api/admin/order/${orderId}/${orderStatus}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const updateOrder = response.data;
        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updateOrder });
        console.log("update order", updateOrder);

    } catch (error) {
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
        console.log("Error", error);
    }
}


export const fetchRestaurantOrder = ({ restaurantId, orderStatus, jwt }) => async (dispatch) => {

    dispatch({ type: GET_RESTAURANT_ORDER_REQUEST });

    try {
        const {data} = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
            params:{order_status:orderStatus},
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const orders = data;
        dispatch({ type: GET_RESTAURANT_ORDER_SUCCESS, payload: orders });
        console.log("fetched restaurant order", orders);

    } catch (error) {
        dispatch({ type: GET_RESTAURANT_ORDER_FAILURE, payload: error });
        console.log("Error", error);
    }
}
