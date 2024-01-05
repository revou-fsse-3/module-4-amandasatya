import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginUser: React.FC = () => {
  const navigate = useNavigate();
  const API_BASE_URL = "https://mock-api.arikmpt.com/api/user/";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("api before", values);

        const response = await axios.post(`${API_BASE_URL}/login`, values);
        localStorage.setItem("authToken", response.data.data.token);
        console.log("token", response.data.data.token);
        // console.log("api after", response);
        resetForm();
        navigate("/listCategory");
        return response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-10 rounded shadow-md h-full w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center">Log In</h2>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={formik.handleSubmit}
        >
          <label className="mb-2 flex flex-col justify-center items-center">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 p-2 rounded"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </label>
          <label className="mb-2 flex flex-col justify-center items-center">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 p-2 rounded"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
          <Link to="/register">
            <div className="p-2">
              <h1>
                Didn't have an Account ?{" "}
                <strong className="text-red-500">register</strong>
              </h1>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
