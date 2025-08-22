import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@mui/icons-material';
import { categorizeIngredients } from '../../Ingredients.js/categorizedIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../State/Cart/Action';

const MenuCart = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch=useDispatch();
    const handleChekhBoxChange = (itemName) => {
        console.log("value", itemName);
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName));
        }
        else {
            setSelectedIngredients([...selectedIngredients, itemName]);
        }
    }

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const reqData = {
            jwt: localStorage.getItem("jwt"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients,
            },
        };
        dispatch(addItemToCart(reqData));
        console.log("req data", reqData)
    };
    

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >

                    <div className='lg:flex items-center justify-between'>
                        <div className='lg:flex items-center lg:gap-5'>
                            <img className='w-[7rem] h-[7rem] object-cover'
                                src={item.images[0]}
                                alt="" />

                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>{item.name}</p>
                                <p>₹ {item.price}</p>
                                <p className='text-gray-400'>{item.description}</p>

                            </div>
                        </div>

                    </div>

                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={handleAddItemToCart}>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                Object.keys(categorizeIngredients(item.ingredientsItems)).map((category) => (
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {categorizeIngredients(item.ingredientsItems)[category].map((item) =>
                                                <FormControlLabel key={item.id} control={<Checkbox onChange={() => handleChekhBoxChange(item.name)} />} label={item.name} />
                                            )}
                                        </FormGroup>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='pt-4'>
                            <Button type='submit' variant='contained' disabled={false}>{true ? "Add to Cart" : "Out of Stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MenuCart
