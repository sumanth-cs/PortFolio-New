import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
    return (
    <div className="footer" id="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f_content">
        <span>sumanthshetty698@gmail.com</span>
        <div className="f-icons">
          <Insta color="black" size={"3rem"} />
          <Facebook color="black" size={"3rem"} />
          <Gitub color="black" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

