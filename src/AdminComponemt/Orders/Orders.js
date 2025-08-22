import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTables from './OrderTables';

const orderStatus = [
    { label: "All", value: "ALL" },
    { label: "Pending", value: "PENDING" },
    { label: "Completed", value: "COMPLETED" },
]
const Orders = () => {
    const [filterValue, setFilterValue] = useState();
    const handleFilter = (e, value) => {
        setFilterValue(value);
    }
    return (
        <div className='px-2 py-12'>
            <Card className='p-5'>
                <Typography sx={{ paddingBottom: "1rem" }} variant='h5'>
                    Order Status
                </Typography>

                <FormControl>
                    <RadioGroup onChange={handleFilter}
                        row name='category' value={filterValue || "all"}
                    >
                        {orderStatus.map((item)=><FormControlLabel 
                        key={item.label}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                        sx={{color:"gray"}}
                        />)}

                    </RadioGroup>
                </FormControl>
            </Card>
            <OrderTables />

        </div>
    )
}

export default Orders
