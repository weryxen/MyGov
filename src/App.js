import UserReg from "./components/UserReg";
import UserSing from "./components/UserSing";
import MainPage from "./components/MainPage";
import RecipeReviewCard from "./components/RecipeReviewCard";
import "./App.css";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="user-reg">
        <UserReg />
      </div>
      <div className="user-sing">
        <UserSing />
      </div>
      <div className="main-page">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
