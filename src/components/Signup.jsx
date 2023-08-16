import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  name : Yup.string().min(4, 'Min 4 characters req.').required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
  // initialize the formik
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        console.log(values);
        setSubmitting(false); 
      }, 3000);

      

      // send the data to the server

    },
    validationSchema: SignupSchema,
    
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
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20}}>
                {signupForm.touched.name && signupForm.errors.name}
              </span>
              <input
                type="text"
                className="form-control mb-4"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />

              <label>Email</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20}}>
                {signupForm.touched.email && signupForm.errors.email}
              </span>
              <input
                type="email"
                className="form-control mb-4"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
              />

              <label>Password</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20}}>
                {signupForm.touched.name && signupForm.errors.name}
              </span>
              <input
                type="password"
                className="form-control mb-4"
                name="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
              />

              <button disabled={signupForm.isSubmitting} type="submit" className="btn btn-primary mt-5 w-100">
                {
                  signupForm.isSubmitting ? (
                    <>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span>Loading</span>
                    </>
                  ): 'Submit'
                }
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;