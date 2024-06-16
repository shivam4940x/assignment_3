import React from "react";
import logo from "../svgs/logo.svg";
import search_logo from "../svgs/search-logo.svg";
export default function header() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="row height d-flex justify-content-center align-items-center" id="search-bar">
        <img src={search_logo} alt="" />
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
      </nav>
      <div id="create-acc">
        Create account. <span>It's free!</span>
      </div>
    </>
  );
}
