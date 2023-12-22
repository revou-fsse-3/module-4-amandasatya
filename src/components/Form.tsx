import { useState } from "react";
import { Card, Input, Button, Title, ProgressBar } from "./index";
interface FormData {
  fullName: string;
  email: string;
  dateOfBirth: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  userName: string;
  password: string;
}
const Form = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [streetAddress, setStreetAdress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //   const [formData, setFormData] = useState(FormData);
  const [step, setStep] = useState<number>(1);
  const [signUp, setSignUp] = useState<FormData[]>([]);
  const totalSteps = 3;
  const nextStep = () => {
    if (step === 3) {
      return;
    }
    setStep((e) => e + 1);
  };
  const prevStep = () => {
    if (step === 1) {
      return;
    }
    setStep((e) => e - 1);
  };
  const handleSubmit = () => {
    const obj = {
      fullName,
      email,
      dateOfBirth,
      streetAddress,
      city,
      state,
      zipCode,
      userName,
      password,
      //   formData,
    };
    console.log("tes data", obj);
    setSignUp([...signUp, obj]);
  };

  return (
    <>
      <Card className="flex justify-center items-center bg-white h-auto w-auto  p-10 shadow-md rounded-md">
        {step === 1 && (
          <Card className="flex flex-col justify-center items-center space-y-4">
            <ProgressBar currentBar={step} totalBar={totalSteps} />
            <div className="flex flex-col w-full h-full">
              <Title>{"Full Name:"}</Title>
              <Input
                name="fullName"
                type="text"
                typeOfText="single"
                value={fullName}
                placeholder="Enter Your Full Name"
                onChange={(e) => setFullName(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"Email:"}</Title>
              <Input
                type="email"
                typeOfText="single"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"Date Of Birth:"}</Title>
              <Input
                type="date"
                typeOfText="single"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <Button
              label={"Next"}
              className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
              type="button"
              handleClick={nextStep}
            />
          </Card>
        )}

        {step === 2 && (
          <Card className="flex flex-col justify-center items-center space-y-4">
            <ProgressBar currentBar={step} totalBar={totalSteps} />
            <div className="flex flex-col w-full">
              <Title>{"Street Address:"}</Title>
              <Input
                type="text"
                typeOfText="single"
                value={streetAddress}
                placeholder="Enter Your Address"
                onChange={(e) => setStreetAdress(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"City:"}</Title>
              <Input
                type="text"
                typeOfText="single"
                placeholder="Enter Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"State:"}</Title>
              <Input
                type="text"
                typeOfText="single"
                placeholder="Enter Your State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"Zip Code:"}</Title>
              <Input
                type="number"
                typeOfText="single"
                placeholder="Enter Your Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex space-x-4">
              <Button
                label={"Previous"}
                className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                type="submit"
                handleClick={prevStep}
              />
              <Button
                label={"Next"}
                className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                type="submit"
                handleClick={nextStep}
              />
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="flex flex-col justify-center items-center space-y-4">
            <ProgressBar currentBar={step} totalBar={totalSteps} />
            <div className="flex flex-col w-full">
              <Title>{"User Name:"}</Title>
              <Input
                type="text"
                typeOfText="single"
                placeholder="Enter Your User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex flex-col w-full">
              <Title>{"Password:"}</Title>
              <Input
                type="password"
                typeOfText="single"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
              />
            </div>

            <div className="flex space-x-4">
              <Button
                label={"Previous"}
                className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                type="submit"
                handleClick={prevStep}
              />
              <Button
                label={"Submit"}
                className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                type="submit"
                handleClick={handleSubmit}
              />
            </div>
          </Card>
        )}
      </Card>
      ;
    </>
  );
};
export default Form;
