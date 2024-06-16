import React,{useEffect,useState} from "react";
import "./css/signup.css";
import bg from "../svgs/513049 PI8X2J 876.svg";

// import { useEffect } from "react";

export default function Signup(props) {
  const [mobile, setmobile] = useState(false); 
  const signup = props.type === "signup" ? true : false;
  useEffect(() => {
    const handleResize = () => setmobile(window.innerWidth <= 400);
    if (window.innerWidth <= 400) {
      handleResize();
    }
           window.addEventListener("resize", handleResize);
  }, [])
  function action() {
    if (signup) {
      return (
        <section className="signup-content">
          <h1>Create Account</h1>
          <form className="my-4">
            <div className="d-flex">
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                placeholder="First name"
              />
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
                placeholder="Last name"
              />
            </div>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password"
            />
            <input
              type="password"
              className="form-control"
              id="confirmPass"
              placeholder="Confirm Password"
            />
            <div className="d-grid gap-2 my-4" style={{
              gridTemplateColumns: mobile ? "3fr 1fr" : "auto"
            }}>
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  borderRadius: "20px",
                  width:mobile ? "90%" : "100%"
                }}
              >
                Create Account
              </button>
              {mobile && <div className="center" id="signin-btn-mobile">or, Sign In</div>}
            </div>
          </form>
          <div
            className="col-12 col-lg-5 d-flex align-items-center"
            style={{
              width: "100%",
            }}
          >
            <div className="d-flex gap-3 w-100 flex-column">
              <a
                href="#!"
                className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center justify-content-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="ms-2 fs-6 ">Continue with Facebook</span>
              </a>
              <a
                href="#!"
                className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center justify-content-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_82_2770)">
                    <path
                      d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894938L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M13.0081 14.2381L13.0086 14.2385C11.6376 15.3405 9.89602 15.9999 8.00021 15.9999C4.95361 15.9999 2.30483 14.297 0.953613 11.7911L3.54614 9.66888C4.22174 11.4719 5.96108 12.7555 8.00021 12.7555C8.87668 12.7555 9.6978 12.5185 10.4024 12.1049L13.0081 14.2381Z"
                      fill="#28B446"
                    />
                    <path
                      d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z"
                      fill="#F14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_2770">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ms-2 fs-6">Continue with Google</span>
              </a>
            </div>
          </div>
          {mobile && (
            <div
              style={{
                padding: "10px",
                fontSize: "65%",
                textAlign: "center"
              }}
            >
              By signing up, you agree to our Terms & conditions, Privacy policy
            </div>
          )}
        </section>
      );
    } else {
      return (
        <section className="signin-content">
          <h1>Sign In</h1>
          <form className="my-4">
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password"
            />
            <div
              className="d-grid gap-2 my-4"
              style={{
                gridTemplateColumns: mobile ? "3fr 1fr" : "auto",
              }}
            >
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  borderRadius: "20px",
                  width: mobile ? "90%" : "100%",
                  // height:"80%"
                }}
              >
                Sign In
              </button>
              {mobile && (
                <div className="center" id="signup-btn-mobile">
                  or, Create Account
                </div>
              )}
            </div>
          </form>
          <div
            className="col-12 col-lg-5 d-flex align-items-center"
            style={{
              width: "100%",
            }}
          >
            <div className="d-flex gap-3 w-100 flex-column">
              <a
                href="#!"
                className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center justify-content-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="ms-2 fs-6 ">Continue with Facebook</span>
              </a>
              <a
                href="#!"
                className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center justify-content-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_82_2770)">
                    <path
                      d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894938L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M13.0081 14.2381L13.0086 14.2385C11.6376 15.3405 9.89602 15.9999 8.00021 15.9999C4.95361 15.9999 2.30483 14.297 0.953613 11.7911L3.54614 9.66888C4.22174 11.4719 5.96108 12.7555 8.00021 12.7555C8.87668 12.7555 9.6978 12.5185 10.4024 12.1049L13.0081 14.2381Z"
                      fill="#28B446"
                    />
                    <path
                      d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z"
                      fill="#F14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_2770">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ms-2 fs-6">Continue with Google</span>
              </a>
            </div>
          </div>
          <div className="center my-3">
            <strong>Forgot Password?</strong>
          </div>
        </section>
      );
    }
  }
  const helper = () => {
    if (signup) {
      return (
        <span>
          Already have an account?{" "}
          <a id="signin-btn" href="/#">
            sign in
          </a>
        </span>
      );
    } else {
      return (
        <span>
          Don’t have an account yet? <a id="signup-btn" href="/#">Create new for free!</a>
        </span>
      );
    }
  };
  return (
    <div
      id="signup-wrapper"
      className="d-flex justify-content-center align-items-center"
    >
      <div >
        <div id="remove-signup">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="path"
              d="M11.9999 0.333252C5.54825 0.333252 0.333252 5.54825 0.333252 11.9999C0.333252 18.4516 5.54825 23.6666 11.9999 23.6666C18.4516 23.6666 23.6666 18.4516 23.6666 11.9999C23.6666 5.54825 18.4516 0.333252 11.9999 0.333252ZM17.8333 16.1882L16.1883 17.8332L11.9999 13.6449L7.81159 17.8332L6.16659 16.1882L10.3549 11.9999L6.16659 7.81158L7.81159 6.16658L11.9999 10.3549L16.1883 6.16658L17.8333 7.81158L13.6449 11.9999L17.8333 16.1882Z"
              fill="white"
            />
          </svg>
        </div>
        {!mobile &&       
        <div className="signup-head center my-2">
          <span>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
        </div>
}
        <main className="signup">
          {action()}
          {!mobile &&<aside>
            <div
              className="signin my-2"
              style={{
                textAlign: "end",
                whiteSpace: "nowrap",
                fontSize: "0.85em",
              }}
            >
              {helper()}
            </div>
            <div className="img my-5 center">
              <img src={bg} alt="" />
            </div>
            {signup && (
              <div
                className="bottom"
                style={{
                  color: "#5E5E5E",
                  fontSize: "0.7em",
                  marginLeft: "2em",
                  whiteSpace: "nowrap",
                }}
              >
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            )}
          </aside>
}
        </main>
      </div>
    </div>
  );
}
