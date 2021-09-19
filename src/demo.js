import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      // proceed to submit
    }
  };
  const [formData, setFormData] = useState({
    answer: "",
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const validate = (values) => {
    debugger;
    if (values.answer === "1") {
      setIsFormInvalid(false);
    } else {
      setIsFormInvalid(true);
    }
  };
  function handleFormChange(event) {
    let data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <Box
          component="form"
          sx={style}
          // sx={{
          //   "& > :not(style)": { m: 1, width: "25ch" },
          // }}
          // noValidate
          autoComplete="off"
        >
          <Div>{"This div's text looks like that of a button."}</Div>
          {/* <Typography variant="body1">What is it</Typography> */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            error={isFormInvalid}
            helperText={isFormInvalid && "Correct answer: 1"}
            name="answer"
            label="What is one?"
            onChange={handleFormChange}
            defaultValue={formData.answer}
          />
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
