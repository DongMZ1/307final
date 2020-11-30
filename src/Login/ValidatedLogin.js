import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./ValidatedStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';



function ValidatedLogin() {
  
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message !== "") {
        console.log("what??")
        setLoginStatus(response.data.message)
      }
      else {
        console.log("why??")
        this.context.router.history.push({
          pathname: "http://localhost:3000//welcome",
          state: { username: response.data.username }
        });
      }
      console.log(response);
    });
  };


  const ValidatedLoginForm = () => (
    

    <Formik
      initialValues={{ email: "", password: "", LoginStatus: "" }}
      onSubmit={(values, { setSubmitting, setFieldValue }) => {
        Axios.post("http://localhost:3001/login", {
          username: values.email,
          password: values.password,
        }).then((response) => {
          if (response.data.message) {
            console.log("what??")
            setFieldValue('LoginStatus', response.data.message);
          }
          else {
            console.log("username is ",response.data.username )
            history.push("/welcome",{ username: response.data.username });
            
            //setFieldValue('LoginStatus', response.data);
          }
          //console.log(response);
          
        });

        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}

      //********Using Yum for validation********/

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
      })}
    >
      {props => {

        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <div class="msg">{values.LoginStatus}</div>
            <button type="submit" className="btn btn-md btn-primary btn-center"
              disabled={isSubmitting}>
              Login
          </button>
          </form>
        );
      }}
    </Formik>
  );

  return (
    ValidatedLoginForm()
  )
}

ValidatedLogin.contextTypes = {
  router: PropTypes.object.isRequired
 }

export default ValidatedLogin;