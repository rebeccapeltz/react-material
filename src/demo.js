import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
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
  const question = "What is one?";
  const correctAnswer = "1";
  const errorResponse = "Correct: 1";
  const correctResponse = "Correct!";
  const [open, setOpen] = React.useState(false);

 
  const [formDataAnswer, setFormDataAnswer] = useState("");
  const [formDataCorrect, setFormDataCorrect] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setFormDataAnswer("");
    setFormDataCorrect(false);
    setOpen(false);
  };
  // form is initially neither valid nor invalid
  // user must submit before one of they get set
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [helper, setHelper] = useState("Enter a number");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormInvalid(false);
    validate();
  };

  // called when formed is submitted
  const validate = () => {
    // nothing entered show no helper

    if (formDataAnswer.length === 0) {
      setHelper("Enter a number");
      setIsFormInvalid(false);
    } else {
      if (!formDataCorrect) {
        setHelper(errorResponse);
        setIsFormInvalid(true);
      } else {
        setHelper(correctResponse);
      }
    }
  };
  function handleFormChange(event) {
    setFormDataAnswer(event.target.value);
    setFormDataCorrect(event.target.value === correctAnswer);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        onBackdropClick="false"
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
          autoComplete="off"
        >
          <Div>{question}</Div>
          {/* <Typography variant="body1">What is it</Typography> */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            error={isFormInvalid}
            helperText={helper}
            name="answer"
            onChange={handleFormChange}
            defaultValue={formDataAnswer}
            sx={{ display: "block" }}
          />
      

          <Button
            onClick={handleSubmit}
            sx={{ display: "inline" }}
            type="submit"
          >
            Submit
          </Button>
          <Button onClick={handleClose} sx={{ display: "inline" }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
