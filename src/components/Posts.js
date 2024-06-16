import React, { useEffect, useState } from "react";
export default function Posts(props) {
   const [mobile, setmobile] = useState(false); 
  let posts_types = {
    artical: "✍️ Article",
    education: "🔬️ Education",
    job: "💼️ Job",
    event: "🗓️ Meetup",
  };
  let wrapper_style = {
    display: "flex",
    flexDirection: "column",
    border: "0.9px solid rgb(221, 221, 221)",
    margin: "15px 0",
    borderRadius: "5px",
    height: !!props.bg ? "492px" : "272px",  
  };
  if(mobile){
      wrapper_style.width = "100vw";
      wrapper_style.height = !!props.bg;
  }
  useEffect(()=>{
    if (window.innerWidth <= 400) {
      setmobile(true);
    }
  },[])
  if ((props.type === "event" || props.type === "job") && !props.location) {
    throw new Error(
      "The 'location' prop is required for event and job types."
    );
  }
  const renderContent = () => {
    if (props.type === "event") {
      return (
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <div
            className="d-flex"
            style={{
              width:"fit-content",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <div>
              <span className="mx-2">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8333 2.49998H13V0.833313H11.3333V2.49998H4.66667V0.833313H3V2.49998H2.16667C1.24167 2.49998 0.508333 3.24998 0.508333 4.16665L0.5 15.8333C0.5 16.75 1.24167 17.5 2.16667 17.5H13.8333C14.75 17.5 15.5 16.75 15.5 15.8333V4.16665C15.5 3.24998 14.75 2.49998 13.8333 2.49998ZM13.8333 15.8333H2.16667V6.66665H13.8333V15.8333ZM3.83333 8.33331H8V12.5H3.83333V8.33331Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>{props.time}</span>
            </div>
            <div className="mx-5">
              <span className="mx-2">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99996 0.666687C2.77496 0.666687 0.166626 3.27502 0.166626 6.50002C0.166626 10.875 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.875 11.8333 6.50002C11.8333 3.27502 9.22496 0.666687 5.99996 0.666687ZM1.83329 6.50002C1.83329 4.20002 3.69996 2.33335 5.99996 2.33335C8.29996 2.33335 10.1666 4.20002 10.1666 6.50002C10.1666 8.90002 7.76663 12.4917 5.99996 14.7334C4.26663 12.5084 1.83329 8.87502 1.83329 6.50002Z"
                    fill="black"
                  />
                  <path
                    d="M5.99996 8.58335C7.15055 8.58335 8.08329 7.65061 8.08329 6.50002C8.08329 5.34943 7.15055 4.41669 5.99996 4.41669C4.84937 4.41669 3.91663 5.34943 3.91663 6.50002C3.91663 7.65061 4.84937 8.58335 5.99996 8.58335Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>{props.location}</span>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center my-3"
            style={{
              height: "36px",
              width: "100%",
              margin: "auto",
              border: "1px solid #A9AEB8",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                color: "#E56135",
                fontWeight: "500",
              }}
            >
              Visit Website
            </div>
          </div>
        </div>
      );
    } else if (props.type === "job") {
      return (
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <div
            className="d-flex"
            style={{
              width: "fit-content",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <div>
              <span className="mx-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6666 4.00002V2.33335H7.33329V4.00002H10.6666ZM2.33329 5.66669V14.8334H15.6666V5.66669H2.33329ZM15.6666 4.00002C16.5916 4.00002 17.3333 4.74169 17.3333 5.66669V14.8334C17.3333 15.7584 16.5916 16.5 15.6666 16.5H2.33329C1.40829 16.5 0.666626 15.7584 0.666626 14.8334L0.674959 5.66669C0.674959 4.74169 1.40829 4.00002 2.33329 4.00002H5.66663V2.33335C5.66663 1.40835 6.40829 0.666687 7.33329 0.666687H10.6666C11.5916 0.666687 12.3333 1.40835 12.3333 2.33335V4.00002H15.6666Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>{props.companyName}</span>
            </div>
            <div className="mx-5">
              <span className="mx-2">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99996 0.666687C2.77496 0.666687 0.166626 3.27502 0.166626 6.50002C0.166626 10.875 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.875 11.8333 6.50002C11.8333 3.27502 9.22496 0.666687 5.99996 0.666687ZM1.83329 6.50002C1.83329 4.20002 3.69996 2.33335 5.99996 2.33335C8.29996 2.33335 10.1666 4.20002 10.1666 6.50002C10.1666 8.90002 7.76663 12.4917 5.99996 14.7334C4.26663 12.5084 1.83329 8.87502 1.83329 6.50002Z"
                    fill="black"
                  />
                  <path
                    d="M5.99996 8.58335C7.15055 8.58335 8.08329 7.65061 8.08329 6.50002C8.08329 5.34943 7.15055 4.41669 5.99996 4.41669C4.84937 4.41669 3.91663 5.34943 3.91663 6.50002C3.91663 7.65061 4.84937 8.58335 5.99996 8.58335Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>{props.location}</span>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center my-3"
            style={{
              height: "36px",
              width: "100%",
              margin: "auto",
              border: "1px solid #A9AEB8",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                color: "#02B875",
                fontWeight: "500",
              }}
            >
              Apply on Timesjobs
            </div>
          </div>
        </div>
      );
    }
    return <p>{props.content}</p>;
  };
  return (
    <div style={wrapper_style}>
      {props.bg && (
        <img
          src={props.bg}
          alt=""
          style={{
            width: "100%",
            height: mobile ? "120px" : "220px",
            marginBottom: "10px",
          }}
        />
      )}
      <div
        style={{
          flex: 1,
          padding: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="my-2"
          style={{
            fontWeight: "500",
          }}
        >
          {posts_types[props.type]}
        </div>
        <div
          className="d-flex justify-content-around"
          style={{
            flexGrow: "1",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "fit-content",
            }}
          >
            <h1 className="my-2">{props.heading}</h1>
            <span
              className="more-options d-flex justify-content-center align-items-center"
              style={{
                margin: "0 10px",
                width: "28px",
                height: "28px",
              }}
            >
              <svg
                width="20"
                height="6"
                viewBox="0 0 20 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6666 2.99999C14.6666 4.28332 15.7166 5.33332 17 5.33332C18.2833 5.33332 19.3333 4.28332 19.3333 2.99999C19.3333 1.71666 18.2833 0.666656 17 0.666656C15.7166 0.666656 14.6666 1.71666 14.6666 2.99999ZM12.3333 2.99999C12.3333 1.71666 11.2833 0.666656 9.99998 0.666656C8.71665 0.666656 7.66665 1.71666 7.66665 2.99999C7.66665 4.28332 8.71665 5.33332 9.99998 5.33332C11.2833 5.33332 12.3333 4.28332 12.3333 2.99999ZM5.33331 2.99999C5.33331 1.71666 4.28331 0.666656 2.99998 0.666656C1.71665 0.666656 0.666647 1.71666 0.666647 2.99999C0.666647 4.28332 1.71665 5.33332 2.99998 5.33332C4.28331 5.33332 5.33331 4.28332 5.33331 2.99999Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          {renderContent()}
        </div>
        <div className="my-3 d-flex justify-content-between align-items-center">
          <div className="author">
            <img src={props.pfp} alt="" />
            <span className="mx-3">
              <strong>{props.authorName}</strong>
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="views mx-2">
              <div>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
                    fill="#525252"
                  />
                </svg>
                1.4k views
              </div>
            </span>
            <span className="share mx-2">
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
                    fill="#2D2D2D"
                  />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
Posts.defaultProps = {
  bg: null,
};
