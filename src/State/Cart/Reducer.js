import { LOGOUT } from "../Authentication/ActionType";
import { ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_REQUEST, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_CART_REQUEST:
        case GET_ALL_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FIND_CART_SUCCESS:
        case CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.items,
            };

        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [action.payload, ...(state.cartItems || [])],
                cart: {
                    ...state.cart,
                    items: [action.payload, ...(state.cart?.items || [])],
                    restaurant: state.cart?.restaurant || action.payload.restaurant // keep restaurant
                }
            };

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems?.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                cart: {
                    ...state.cart,
                    items: state.cart?.items?.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                    restaurant: state.cart?.restaurant || action.payload.restaurant
                }
            };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems?.filter((item) => item.id !== action.payload),
                cart: {
                    ...state.cart,
                    items: state.cart?.items?.filter((item) => item.id !== action.payload),
                    restaurant: state.cart?.restaurant
                }
            };


        case FIND_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                cartItems: [],
                cart: null,
                success: "Logout Success"
            };

        default:
            return state;
    }

}