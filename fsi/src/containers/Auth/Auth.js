import React, { useState, useEffect, useRef } from "react";
import * as assets from "../../assets/assetes";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";
import { useForm } from "react-hook-form";
import { Formik } from "formik";
const emailExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Auth() {
  const [openModal, setOpenModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);
  const [titleN, setTitleN] = useState("");
  const [bodyN, setBodyN] = useState("");
  const [errorN, setErrorN] = useState(false);

  window.document.title = isSignUp ? "sign up" : "login";

  useEffect(() => {
    const clickHandler = ({ target }) => {};
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {};
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const swithAuthMethod = () => {
    setIsSignUp(!isSignUp);
  };
  const clickAuth = (val) => {
    console.log("Email : ", val.email, "Password : ", val.password);
    setOpenModal(!openModal);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };
  const closeModal = () => {
    setOpenModal(false);
    displayNotificationHandler(
      "created",
      "created account succefuly just wait to be redirected ",
      true
    );
    setTimeout(() => {
      setDisplayNotification(false);
    }, 2000);
  };

  const displayNotificationHandler = (title, body, errorN) => {
    setDisplayNotification(!displayNotification);
    setTitleN(title);
    setBodyN(body);
    setErrorN(errorN);
  };

  return (
    <div>
      <Alert
        title={titleN}
        body={bodyN}
        errorN={errorN}
        show={displayNotification}
      />

      {/* // ! MODAL */}
      <Modal openModal={openModal}>
        <div className="text-center m-auto flex flex-col items-center py-4 ">
          <p className="text-black text-sm font-semibold mb-4">
            {isSignUp ? "creating your account .." : "login please wait .."}
          </p>
          <img
            src={assets.access}
            alt="acess to system"
            className="w-32 mb-4 "
          />
          <Loader className="mb-4" />
        </div>
      </Modal>
      <div className=" m-0 sm:m-12 overflow-hidden  bg-white border border-gray-100 sm:rounded-lg flex justify-center flex-1">
        {/* // ! Main form */}
        <div className="text-center lg:w-1/2 xl:w-5/12 p-6 sm:p-8">
          <div>
            <img alt="logo" src={assets.Logo} className="w-24 mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-lg text-black lg:text-4xl font-extrabold">
              {isSignUp
                ? "Rejoignez notre "
                : "Connectez-vous à votre "}
              {isSignUp ? (
                <span className="text-primary">communauté</span>
              ) : (
                <span className="text-primary">compte</span>
              )}
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-bgcolor text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">
                    {isSignUp
                      ? "Inscrivez-vous avec Google"
                      : "Se connecter avec Google"}
                  </span>
                </button>
              </div>

              <div className="my-12  text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  {isSignUp
                    ? "Vous pouvez vous enregistrer via e-mail"
                    : "Ou connectez-vous par e-mail"}
                </div>
              </div>

              <div className="mx-auto max-w-xs text-left">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Email field is Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Password field is Required";
                    } else if (values.password.length < 8) {
                      errors.password = "Minumum length is 8";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    clickAuth(values);
                    setSubmitting(true);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="w-full mb-2 pl-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      <p className="pl-2 text-sm mb-2 font-semibold text-red-500">
                        {errors.email && touched.email && errors.email}
                      </p>
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="w-full pl-4 mb-2 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      />
                      <p className="pl-2 text-sm mb-2 font-semibold text-red-500">
                        {errors.password && touched.password && errors.password}
                      </p>

                      <button
                        onClick={handleSubmit}
                        className="mt-5 text-white tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:shadow-md transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        {isSignUp ? (
                          <svg
                            className="w-6 h-6 -ml-2"
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                          </svg>
                        )}
                        <span className="ml-3 text-white">
                          {isSignUp ? "S'inscrire" : "Connexion"}
                        </span>
                      </button>
                    </form>
                  )}
                </Formik>
                {/* //! Email */}
                {/* <input
                      defaultValue="blick"
                      className="w-full pl-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                    /> */}
                {/* //! Password  */}
                {/* <input
                    onChange={passwordChangeHandler}
                    value={password}
                    className="w-full pl-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  /> */}

                {/* //! AUTH BUTTON  */}

                <p className="mt-6 text-sm text-gray-600 text-center font-semibold">
                  {isSignUp
                    ? "Avez-vous un compte ?"
                    : "Vous n'avez pas de compte?"}
                  <span
                    onClick={swithAuthMethod}
                    className="text-base cursor-pointer text-primary font-bold"
                  >
                    {isSignUp ? " Connexion" : " Créer un compte"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* // ! Background for desktop */}
        <div className="flex-1 bg-bgcolor text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${assets.headerSignUp})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
