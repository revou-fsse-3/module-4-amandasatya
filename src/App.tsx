import MultipleForm from "./components/Form";
import { Title, Icon, RegiterUser, LoginUser, ProfileUser } from "./components";
import Makan1 from "./components/Images/1.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center m-8">
        <Title style={{ fontSize: "18px", fontWeight: "bold" }}>
          {"Welcome To The Register Page"}
        </Title>
        <Title style={{ fontSize: "15px" }}>{"Or Register Via"}</Title>
        <Icon />
        <MultipleForm />
      </div>
      <RegiterUser />
      <LoginUser />
      <ProfileUser />
    </>
  );
}

export default App;
