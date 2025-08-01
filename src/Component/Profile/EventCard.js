import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?_gl=1*pn1krm*_ga*MTYxMDkzOTIwOC4xNzUzODQ5MzI1*_ga_8JE65Q40S6*czE3NTQwMjc0NzEkbzIkZzEkdDE3NTQwMjc0NzckajU0JGwwJGgw' />

                <CardContent className='text-left'>
                    <Typography variant='h5'>
                        Restaurant Name
                    </Typography>

                    <Typography variant='body2'>
                        50% off on your First Order
                    </Typography>

                    <div className='py-2 space-y-2'>
                        <p>{"Bhubaneswar"}</p>
                        <p className='text-sm text-green-500'>August 1,2025 12:00 AM</p>
                        <p className='text-sm text-red-500'>August 1,2025 12:00 AM</p>

                    </div>
                </CardContent>

                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}

export default EventCard
