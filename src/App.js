import './App.css';
import './mediaQuery.css';
import { useEffect,useState } from 'react';
import Header from './components/Header'
import Post from './components/Posts'
import Signup from './components/Signup'

import image from './images/Rectangle 3.png';

import post1_img from './images/Rectangle 5.png';
import post2_img from './images/Rectangle 6.png';
import post3_img from './images/Rectangle 7.png';

import pfp1 from './images/pfp/Rectangle 3.png';
import pfp2 from './images/pfp/Rectangle 4.png';
import pfp3 from './images/pfp/Rectangle 5.png';
import pfp4 from './images/pfp/Rectangle 6.png';

import join_group from "./svgs/join_group.svg";
function App() {
   const [formType, setFormType] = useState("signup"); 
   const [mobile, setmobile] = useState(false); 

   useEffect(() => {
     if (window.innerWidth <= 400) {
       setmobile(true);
      }
      const signupWrapper = document.getElementById("signup-wrapper");
const join_group_span = document.querySelector("header.mobile span");
const signup_mobile = document.querySelector(".mobile.icon");
if(signup_mobile){
  signup_mobile.addEventListener("click",function(){
     setFormType("signup");
     signupWrapper.classList.add("active");
  })
}
if(join_group_span){
  join_group_span.addEventListener("click",()=>{
    let content  = join_group_span.textContent.toLocaleLowerCase();
    if(content === "join group"){
      join_group_span.textContent = "Leave Group"
    }else{
      join_group_span.textContent = "Join Group"
    }
  })
}
     const createAccElement = document.querySelector("#create-acc span");
     const signinBtn = document.getElementById("signin-btn");
     const signinBtn_mobile = document.getElementById("signin-btn-mobile");
     const signupBtn_mobile = document.getElementById("signup-btn-mobile");
     const signupBtn = document.getElementById("signup-btn");
     const removeSignupBtn = document.getElementById("remove-signup");

     if (createAccElement) {
       createAccElement.addEventListener("click", () => {
         setFormType("signup");
         signupWrapper.classList.add("active");
       });
     }
const setSignIn = () => {
  setFormType("signin");
};
const setSignUp = () => {
  setFormType("signup");
};
     if (signinBtn) {
       signinBtn.addEventListener("click",setSignIn);
     }
     if (signinBtn_mobile) {
       signinBtn_mobile.addEventListener("click", setSignIn);
     }
     if (signupBtn_mobile) {
       signupBtn_mobile.addEventListener("click", setSignUp);
     }
     if (signupBtn) {
       signupBtn.addEventListener("click", setSignUp);
     }

     if (removeSignupBtn) {
       removeSignupBtn.addEventListener("click", () => {
         signupWrapper.classList.remove("active");
         setFormType("signup");
       });
     }
   }, [formType, mobile]);
const options = ()=>{
  if(mobile){
  return (
    <>
      <span>
        <strong>posts(306)</strong>
      </span>
      <div className="center">
        Filter:&nbsp; <span> All</span>
      </div>
    </>
  );
  }else{
    return (
      <>
        <div>
          <ul className="d-flex justify-content-between align-items-center">
            <li className="active">all posts &#40;32&#41;</li>
            <li>event</li>
            <li>artical</li>
            <li>education</li>
            <li>job</li>
          </ul>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-secondary mx-2">
            <span className="mx-2">Write a Post</span>
            <i></i>
          </button>
          <button type="button" className="btn btn-primary mx-2">
            <img src={join_group} alt="" />
            <span className="mx-2">Join Group</span>
          </button>
        </div>
      </>
    );
  }
}
  return (
    <>
      {!mobile && (
        <header className="d-flex justify-content-between align-items-center">
          <Header />
        </header>
      )}
      <section id="bg-cover">
        {mobile && (
          <header className="mobile">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="white"
                />
              </svg>
            </div>
            <span>Join Group</span>
          </header>
        )}
        <img src={image} alt="" />
        <div>
          <h1>Computer Engineering</h1>
          <span>142,765 Computer Engineers follow this</span>
        </div>
      </section>
      <div
        id="options"
        className="d-flex justify-content-between align-items-center"
      >
        {options()}
      </div>
      <section id="posts">
        <div
          style={{
            width: "fit-content",
          }}
        >
          <Post
            bg={post1_img}
            pfp={pfp1}
            authorName="Sarthak Kamra"
            type="artical"
            heading="What if famous brands had regular fonts? Meet RegulaBrands!"
            content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          />
          <Post
            bg={post2_img}
            pfp={pfp2}
            authorName="Sarah West"
            type="education"
            heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
            content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          />
          <Post
            pfp={pfp3}
            bg={post3_img}
            authorName="Ronal Jones"
            type="event"
            heading="Finance & Investment Elite Social Mixer @Lujiazui"
            location="Ahmedabad, India"
            time="Fri, 12 Oct, 2018"
          />
          <Post
            pfp={pfp4}
            authorName="Joseph Gray"
            type="job"
            heading="Software Developer"
            location="Noida, India"
            companyName="Innovaccer Analytics Private Ltd."
          />
        </div>
        {!mobile && (
          <aside>
            <div className="d-flex justify-content-between align-items-center my-3">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_82_1395)">
                    <path
                      d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_1395">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Noida, India</span>
              </span>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_82_1401)">
                    <path
                      d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_1401">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div
              className="d-flex my-2"
              style={{
                fontSize: "0.75em",
                color: "#8C8C8C",
              }}
            >
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33331 8.99998H7.66665V10.3333H6.33331V8.99998ZM6.33331 3.66665H7.66665V7.66665H6.33331V3.66665ZM6.99331 0.333313C3.31331 0.333313 0.333313 3.31998 0.333313 6.99998C0.333313 10.68 3.31331 13.6666 6.99331 13.6666C10.68 13.6666 13.6666 10.68 13.6666 6.99998C13.6666 3.31998 10.68 0.333313 6.99331 0.333313ZM6.99998 12.3333C4.05331 12.3333 1.66665 9.94665 1.66665 6.99998C1.66665 4.05331 4.05331 1.66665 6.99998 1.66665C9.94665 1.66665 12.3333 4.05331 12.3333 6.99998C12.3333 9.94665 9.94665 12.3333 6.99998 12.3333Z"
                    fill="#8C8C8C"
                  />
                </svg>
              </span>
              <span className="mx-2">
                Your location will help us serve better and extend a
                personalised experience.
              </span>
            </div>
          </aside>
        )}
      </section>
      {formType && <Signup type={formType} />}
      {mobile && (
        <div className='center mobile icon'
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6588 0C14.4088 0 14.1488 0.1 13.9588 0.29L12.1288 2.12L15.8788 5.87L17.7088 4.04C18.0988 3.65 18.0988 3.02 17.7088 2.63L15.3688 0.29C15.1688 0.09 14.9188 0 14.6588 0ZM11.0588 6.02L11.9788 6.94L2.91878 16H1.99878V15.08L11.0588 6.02ZM-0.0012207 14.25L11.0588 3.19L14.8088 6.94L3.74878 18H-0.0012207V14.25Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </>
  );
}

export default App;
