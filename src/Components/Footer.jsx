import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../Utils/Constants";

const style = {
  footer: `flex justify-between h-38 bg-black`,
  footer_Left: `flex pt-20 pl-20`,
  Logo: `mr-8 text-white`,
  textContainer: `p-20`,
  text: `text-lg text-white font-bold`,
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_Left">
        <a href={GITHUB_URL} className="Logo">
          <RiGithubLine size={40} />
        </a>
        <a href={LINKEDIN_URL} className="Logo">
          <FaLinkedin size={40} />
        </a>
      </div>
      <div className="textContainer">
        <p className="text">made with love @sachinarora</p>
      </div>
    </div>
  );
};

export default Footer;
