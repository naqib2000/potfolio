import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/naqib2000/" target="_blank">
            <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://github.com/naqib2000" target="_blank">
            <BsGithub />
            </a>
        </div>
    </div>
  );
};

export default SocialMedia;