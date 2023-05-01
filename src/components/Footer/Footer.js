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

        <div className="f_icons">
          <Insta color="black" size={"2.5rem"} />
          <Facebook color="black" size={"2.5rem" } />
          <Gitub color="black" size={"2.5rem"} />
        </div>
      </div>
    </div>
  );
};

