import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENT_FAILURE, GET_ALL_EVENT_REQUEST, GET_ALL_EVENT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, GET_RESTAURANT_EVENT_FAILURE, GET_RESTAURANT_EVENT_REQUEST, GET_RESTAURANT_EVENT_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"
import { api } from "../../Component/Config/apiConfig";

export const getAllRestaurants = (jwt) => async (dispatch) => {

    dispatch({ type: GET_ALL_RESTAURANT_REQUEST });

    try {
        const { data } = await api.get(`/api/restaurant/allRestaurant`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });
        console.log("All restaurants", data);

    } catch (error) {
        dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const getRestaurantById = (reqData) => async (dispatch) => {

    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });

    try {
        const response = await api.get(`/api/restaurant/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
        console.log("get restaurant by id", response.data);

    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const getRestaurantByUserId = (jwt) => async (dispatch) => {

    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/admin/restaurant/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
        console.log("get restaurant by user id: ", data);

    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const createRestaurant = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });

    try {
        const { data } = await api.post(
            "/api/admin/restaurant/created",
            reqData.data, // ✅ only restaurant details here
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`, // ✅ only JWT here
                },
            }
        );

        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
        console.log("created restaurant: ", data);
    } catch (error) {
        dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
        console.log("Error", error);
    }
};


export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => async (dispatch) => {

    dispatch({ type: UPDATE_RESTAURANT_REQUEST });

    try {
        const response = await api.put(`/api/admin/restaurant/update/${restaurantId}`, restaurantData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data });
        console.log("update restaurant: ", response.data);

    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const deleteRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {

    dispatch({ type: DELETE_RESTAURANT_REQUEST });

    try {
        const response = await api.delete(`/api/admin/restaurant/delete/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
        console.log("DELETE restaurant: ", response.data);

    } catch (error) {
        dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const updateRestaurantStatus = ({ restaurantId, jwt }) => async (dispatch) => {

    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });

    try {
        const response = await api.put(`/api/admin/restaurant/status/${restaurantId}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data });
        console.log("status of  restaurant: ", response.data);

    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const createEvent = ({ data, restaurantId, jwt }) => async (dispatch) => {

    dispatch({ type: CREATE_EVENT_REQUEST });

    try {
        const response = await api.post(`/api/admin/event/restaurant/status/${restaurantId}`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: CREATE_EVENT_SUCCESS, payload: response.data });
        console.log("create event: ", response.data);

    } catch (error) {
        dispatch({ type: CREATE_EVENT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const getAllEvents = ({ jwt }) => async (dispatch) => {

    dispatch({ type: GET_ALL_EVENT_REQUEST });

    try {
        const response = await api.get(`/api/events`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_ALL_EVENT_SUCCESS, payload: response.data });
        console.log("Get all events: ", response.data);

    } catch (error) {
        dispatch({ type: GET_ALL_EVENT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const deleteEvent = ({ eventId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_EVENT_REQUEST });

    try {
        await api.delete(`/api/admin/event/delete/${eventId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        // Use eventId directly instead of response.data
        dispatch({ type: DELETE_EVENT_SUCCESS, payload: eventId });
        console.log("Deleted eventId:", eventId);

    } catch (error) {
        dispatch({ type: DELETE_EVENT_FAILURE, payload: error });
        console.error("Error deleting event", error);
    }
};


export const getRestaurantEvent = ({ restaurantId, jwt }) => async (dispatch) => {

    dispatch({ type: GET_RESTAURANT_EVENT_REQUEST });

    try {
        const response = await api.get(`/api/admin/event/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_RESTAURANT_EVENT_SUCCESS, payload: response.data });
        console.log("get restaurant event: ", response.data);

    } catch (error) {
        dispatch({ type: GET_RESTAURANT_EVENT_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const createCategory = ({ reqData, jwt }) => async (dispatch) => {

    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {
        const response = await api.post(`/api/admin/category`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: response.data });
        console.log("category created: ", response.data);

    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const getRestaurantCategory = ({ restaurantId, jwt }) => async (dispatch) => {

    dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST });

    try {
        const response = await api.get(`/api/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: response.data });
        console.log("category created: ", response.data);

    } catch (error) {
        dispatch({ type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error });
        console.log("catch error", error);
    }

}

