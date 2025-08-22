import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMenuItem } from "../../State/Menu/Action";

const SearchResults = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const jwt = localStorage.getItem("jwt");

    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get("query");   

    const { menuItem } = useSelector(store => store);

    useEffect(() => {
        if (keyword) {
            dispatch(searchMenuItem({ jwt, keyword }));
        }
    }, [dispatch, jwt, keyword]);

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">
                Search Results for: "{keyword}"
            </h2>

            {menuItem.loading && <p>Loading...</p>}
            {menuItem.error && <p className="text-red-500">Error: {menuItem.error.message}</p>}
            {menuItem.search?.length === 0 && !menuItem.loading && <p>No food found.</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {menuItem.search?.map((food) => (
                    <div
                        key={food.id}
                        className="border p-3 rounded-lg shadow bg-white"
                    >
                        <img
                            src={food.images}
                            alt={food.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="font-semibold mt-2 text-red-500">{food?.name}</h3>
                        <p className="text-gray-600">{food.description}</p>
                        <p className="text-gray-600">₹{food.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
