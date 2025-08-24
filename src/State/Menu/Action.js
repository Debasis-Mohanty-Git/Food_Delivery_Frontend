
import { api } from "../../Component/Config/apiConfig";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"

export const createMenuItem=({menu,jwt})=>async(dispatch)=>{

    dispatch({type:CREATE_MENU_ITEM_REQUEST});
    try {
        const {data}=await api.post(`/api/admin/food`,menu,{    
            headers:{
                Authorization:`Bearer ${jwt}`,
            },  
    });
        dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data})
        console.log("Menu item Created",data)
    } catch (error) {
        dispatch({type:CREATE_MENU_ITEM_FAILURE, payload: error });
        console.log("Error",error)
    }

}

export const grtMenuItemByRestaurantId=(reqData)=>async(dispatch)=>{

    dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST});
    try {
        const {data}=await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
            &nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,{
            headers:{
                Authorization:`Bearer ${reqData.jwt}`,
            },  
    });
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,payload:data})
        console.log(" menu item  by restaurant id",data)
    } catch (error) {
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, payload: error });
        console.log("Error",error)
    }

}   

export const searchMenuItem=({jwt,keyword})=>async(dispatch)=>{

    dispatch({type:SEARCH_MENU_ITEM_REQUEST});
    try {
        const {data}=await api.get(`api/food/search?name=${keyword}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },  
    });
        dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data})
        console.log("menu item searched",data)
    } catch (error) {
        dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload: error });
        console.log("Error",error)
    }
}

// export const getAllIngredientsOfMenuItem=(reqData)=>async(dispatch)=>{

//     dispatch({type:});
//     try {
//         const {data}=await api.get(`api/food/search?name=${keyword}`,{
//             headers:{
//                 Authorization:`Bearer ${jwt}`,
//             },  
//     });
//         dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data})
//         console.log("menu item searched",data)
//     } catch (error) {
//         dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload: error });
//         console.log("Error",error)
//     }
// }

export const updateMenuItemAvailability=({jwt,foodId})=>async(dispatch)=>{

    dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/food/${foodId}`,{},{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },  
    });
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data})
        console.log("menu item update availability",data)
    } catch (error) {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
        console.log("Error",error)
    }
}

export const deleteFood=({jwt,foodId})=>async(dispatch)=>{

    dispatch({type:DELETE_MENU_ITEM_REQUEST});
    try {
        const {data}=await api.delete(`/api/admin/food/${foodId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },  
    });
        dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId})
        console.log("menu item deleted successfully",data)
    } catch (error) {
        dispatch({type:DELETE_MENU_ITEM_FAILURE, payload: error });
        console.log("Error",error)
    }
}

