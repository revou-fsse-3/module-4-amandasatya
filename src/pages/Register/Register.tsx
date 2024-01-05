import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterUser: React.FC = () => {
  const API_BASE_URL = "https://mock-api.arikmpt.com/api/user/";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("api before", values);

        const response = await axios.post(`${API_BASE_URL}/register`, values);

        console.log("api after", response);
        resetForm();
        return response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-10 rounded shadow-md h-full w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={formik.handleSubmit}
        >
          <label className="mb-2 flex flex-col justify-center items-center">
            Name:
            <input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 p-2 rounded"
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </label>
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
            Register
          </button>
          <Link to="/login">
            <div className="p-2">
              <h1>
                Already have an Account?{" "}
                <strong className="text-red-500">Login</strong>
              </h1>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
