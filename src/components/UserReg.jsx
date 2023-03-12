import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";

const UserReg = () => {
  return (
    
    <div className="header">
      
      <div className="header-inner">
        <div className="say-welcome">
          <div className="say-welcome-inner">
            <h1>MyGOV</h1>
            <p>Присоединяйтесь к нам прямо сейчас! </p>
            <p>
              Зарегистрируйтесь, чтобы получить доступ к нашей платформе и наслаждаться всеми ее преимуществами. Это быстро, просто и бесплатно.
            </p>
          </div>
        </div>
        <div className="header-input">
          <div className="title">
            <h1>Регистрация</h1>
            <p>Вы уже здесь были? </p>
            
          </div>
          <div className="info-zone">
            <p>Адрес электронной почты</p>
            <input type="email" placeholder="mygov@gmail.com" />
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
