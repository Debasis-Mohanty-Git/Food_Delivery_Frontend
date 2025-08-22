import { api } from "../../Component/Config/apiConfig";
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType";

export const getIngredientsOfRestaurant = ({ jwt, id }) => async (dispatch) => {

    try {
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_INGREDIENTS, payload: response.data });
        console.log("get all ingredients of restaurant", response.data);

    } catch (error) {
        console.log("Error", error);
    }

}

export const createIngredient = ({ data, jwt }) => async (dispatch) => {

    try {
        const response = await api.post(`/api/admin/ingredients/created`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data });
        console.log("Ingredient created", response.data);

    } catch (error) {
        console.log("Error", error);
    }

}

export const createIngredientCategory = ({ jwt, data }) => async (dispatch) => {

    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });

    try {
        const response = await api.post(`/api/admin/ingredients/category`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
        console.log("create ingredient category", response.data);

    } catch (error) {
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const getIngredientCategory = ({ jwt, id }) => async (dispatch) => {

    dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });

    try {
        const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
        console.log("get ingredient category", response.data);

    } catch (error) {
        dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
        console.log("Error", error);
    }

}

export const updateIngredientStock = ({ jwt, id }) => async (dispatch) => {

    try {
        const { data } = await api.put(`/api/admin/ingredients/${id}/stock`,{}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({ type: UPDATE_STOCK, payload: data });
        console.log("update ingredient stock", data);

    } catch (error) {
        console.log("Error", error);
    }

}

