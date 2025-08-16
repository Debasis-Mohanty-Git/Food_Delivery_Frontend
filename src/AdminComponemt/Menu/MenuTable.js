import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
const orders=[1,1,1,1,1];

const MenuTable = () => {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                action={
                    <IconButton aria-label='settings'>
                      <CreateIcon />Edit
                    </IconButton>
                }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}
                />
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Ingredients</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Avaibilty</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{"image"}</TableCell>
                                    <TableCell align="left">{"debasis@gmail.com"}</TableCell>
                                    <TableCell align="left">{"Ingredients"}</TableCell>
                                    <TableCell align="left">{399}</TableCell>
                                    <TableCell align="left">{"Avaibilty"}</TableCell>
                                    <TableCell align="left"><IconButton><DeleteIcon /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default MenuTable
