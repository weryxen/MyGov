import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const UserReg = () => {
  return (
    <div className="header">
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
      <div className="header-inner">
        <div className="say-welcome">
          <div className="say-welcome-inner">
            <h1>MyGOV</h1>
            <p>Добро пожаловать обратно! </p>
            <p>
            Войдите в свой аккаунт, чтобы продолжить работу с нашей платформой. Мы рады видеть вас снова!
            </p>
          </div>
        </div>
        <div className="header-input">
          <div className="title">
            <h1>Войти</h1>
            <p>Вы уже здесь были? </p>
            
          </div>
          <div className="info-zone">
            <p>Адрес электронной почты</p>
            <input type="email" placeholder="mygov@gmail.com" />
            <Stack spacing={2} direction="row">
            </Stack>
          </div>
          <div className="info-zone">   
            <p>Пароль</p>
            <input type="password" placeholder="Введите пароль" />
            <Stack spacing={2} direction="row">
              <Button variant="contained">Далее</Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReg;
