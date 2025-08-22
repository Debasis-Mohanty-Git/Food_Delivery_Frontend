import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const EventCard = ({ event }) => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image={event.imageUrl} />

                <CardContent className='text-left'>
                    <Typography variant='h5'>
                        {event.eventName}
                    </Typography>

                    <div className='py-2 space-y-2'>
                        <p>{"Bhubaneswar"}</p>
                        <p className='text-sm text-green-500'>startsAt:- {event.startDate}</p>
                        <p className='text-sm text-red-500'>startsAt:- {event.endDate}</p>

                    </div>
                </CardContent>

                <Button variant="contained" color="primary">
                    Book Now
                </Button>
            </Card>
        </div>
    )
}

export default EventCard
