import MultipleForm from "./components/Form";
import { Title, Icon } from "./components";
// import { Icon } from "./components";
import Makan1 from "./components/Images/1.jpg";
function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-4 m-20 bg-slate-300 w-1/2 rounded-xl">
          <div>
            <div className="flex justify-center items-center h-full ">
              <img
                src={Makan1}
                alt=""
                className="h-full object-cover p-2 rounded-3xl "
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center m-8">
            <Title style={{ fontSize: "18px", fontWeight: "bold" }}>
              {"Welcome To The Register Page"}
            </Title>
            <Title style={{ fontSize: "15px" }}>{"Or Register Via"}</Title>
            <Icon />
            <MultipleForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
