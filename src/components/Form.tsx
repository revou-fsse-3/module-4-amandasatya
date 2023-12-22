import { useState } from "react";
import { Card, Button, Title, ProgressBar } from "./index";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      dateOfBirth: Yup.string().required("Date Of Birth is Required"),
      streetAddress: Yup.string().required("Street Addresss is Required"),
      city: Yup.string().required("City is Required"),
      state: Yup.string().required("State is Required"),
      zipCode: Yup.string().required("Zip Code is Required"),
      userName: Yup.string().required("User Name is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      Swal.fire({
        title: "Success",
        text: "Thank you for registering !",
        icon: "success",
        confirmButtonText: "Great Job",
      });
      resetForm();
      setStep(1);
    },
  });
  const [step, setStep] = useState<number>(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step === 3) {
      return;
    }
    console.log("Is valid:", formik.isValid);
    setStep((e) => e + 1);
  };
  const prevStep = () => {
    if (step === 1) {
      return;
    }
    console.log("Is valid:", formik.isValid);
    setStep((e) => e - 1);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card className="flex justify-center items-center bg-white h-auto w-auto  p-10 shadow-md rounded-md">
          {step === 1 && (
            <Card className="flex flex-col justify-center items-center space-y-4">
              <ProgressBar currentBar={step} totalBar={totalSteps} />
              <div className="flex flex-col w-full h-full">
                <Title>{"Full Name:"}</Title>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter Your Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div>{formik.errors.fullName}</div>
                ) : null}
              </div>
              <div className="flex flex-col w-full">
                <Title>{"Email:"}</Title>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <Title>{"Date Of Birth:"}</Title>
                <input
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  name="dateOfBirth"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div>{formik.errors.dateOfBirth}</div>
                ) : null}
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
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.streetAddress}
                  name="streetAddress"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
                  <div>{formik.errors.streetAddress}</div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <Title>{"City:"}</Title>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  name="city"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div>{formik.errors.city}</div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <Title>{"State:"}</Title>
                <input
                  type="text"
                  placeholder="Enter Your State"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  name="state"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.state && formik.errors.state ? (
                  <div>{formik.errors.state}</div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <Title>{"Zip Code:"}</Title>
                <input
                  type="number"
                  placeholder="Enter Your Zip Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                  name="zipCode"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <div>{formik.errors.zipCode}</div>
                ) : null}
              </div>

              <div className="flex space-x-4">
                <Button
                  label={"Previous"}
                  className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                  type="button"
                  handleClick={prevStep}
                />
                <Button
                  label={"Next"}
                  className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                  type="button"
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
                <input
                  type="text"
                  placeholder="Enter Your User Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                  name="userName"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div>{formik.errors.userName}</div>
                ) : null}
              </div>

              <div className="flex flex-col w-full">
                <Title>{"Password:"}</Title>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  name="password"
                  className="border-b-2 border-gray-300 outline-none px-4 py-2 rounded-md focus:border-red-200"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="flex space-x-4">
                <Button
                  label={"Previous"}
                  className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                  type="button"
                  handleClick={prevStep}
                />
                <button
                  className="bg-red-200 text-white w-24 rounded-md p-2 hover:bg-red-300 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Card>
          )}
        </Card>
      </form>
      ;
    </>
  );
};
export default SignupForm;
