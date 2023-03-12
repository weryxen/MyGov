import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

import RecipeReviewCard from "./RecipeReviewCard";

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

const MainPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="page">
      <div className="header-naw">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ my: 2 }}>
                MyGov
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 2 }}></Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="mainpage">
        <div className="mainpage-info">
          <div className="modal-window">
            <h1>Название места</h1>
            <Button variant="contained" onClick={handleOpen}>
              Написать
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Название места
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  Отзыв
                  <div className="info-zone">
                    <input type="text" placeholder="Напишите" />
                    <Stack spacing={2} direction="row">
                      <Button variant="contained">Отправить</Button>
                    </Stack>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="cards">
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
