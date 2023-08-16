import { useFormik } from "formik";
import React from "react";

const Signup = () => {

  // initialize the formik

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);

      // send the data to the server

    },
  });

  return (
    <div>
      <div className="col-md-4 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={signupForm.handleSubmit}>
              <h3 className="text-center">Signup Form</h3>
              <hr />

              <label>Name</label>
              <input
                type="text"
                className="form-control mb-4"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />

              <label>Email</label>
              <input
                type="email"
                className="form-control mb-4"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
              />

              <label>Password</label>
              <input
                type="password"
                className="form-control mb-4"
                name="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
              />

              <button type="submit" className="btn btn-primary mt-5 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
