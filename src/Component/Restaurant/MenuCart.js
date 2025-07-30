import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@mui/icons-material';

const ingredients = [
    {
        category: "Nuts & Seeds",
        ingredient: ["Cashews"]
    },
    {
        category: "Protein",
        ingredient: ["Mutton", "Bacon strips"]
    },
]

const MenuCart = () => {
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
                                src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                                alt="" />

                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>Name</p>
                                <p>₹ Price</p>
                                <p className='text-gray-400'>Description</p>

                            </div>
                        </div>

                    </div>

                </AccordionSummary>
                <AccordionDetails>
                    <form >
                        <div className='flex gap-5 flex-wrap'>
                            {
                                ingredients.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {item.ingredient.map((item) => <FormControlLabel control={<Checkbox />} label={item} />
                                            )}
                                        </FormGroup>
                                    </div>
                                )
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
