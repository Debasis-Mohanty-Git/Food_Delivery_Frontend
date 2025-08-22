import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../State/Restaurant/Action";
import CreateEvent from "./CreateEvent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const Event = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector(store => store);

  const [formValues, setFormValues] = useState({
    imageUrl: "",
    location: "",
    eventName: "",
    startDate: null,
    endDate: null,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEvent({
      data: formValues,
      restaurantId: restaurant.userRestaurant.id,
      jwt
    }))
    console.log("Event Created:", formValues);
    handleClose();
  };


  return (
    <div className="p-3">
      <div className="flex justify-end p-3">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Create New Event
        </Button>
      </div>

      <CreateEvent />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            Create Event
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Event Name"
                name="eventName"
                value={formValues.eventName}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Location"
                name="location"
                value={formValues.location}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Image URL"
                name="imageUrl"
                value={formValues.imageUrl}
                onChange={handleChange}
                fullWidth
              />


              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Start At"
                  value={formValues.startDate}
                  onChange={(newValue) =>
                    setFormValues({ ...formValues, startDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>


              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Ends At"
                  value={formValues.endDate}
                  onChange={(newValue) =>
                    setFormValues({ ...formValues, endDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>



              <Button type="submit" variant="contained" color="primary">
                Save Event
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Event;
