import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function SocialMediaLinks() {
  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex flex-col items-end space-y-5">
      <a href="https://www.linkedin.com/in/monikakaurchoudhary" target="blank">
        <FaLinkedinIn className="icon-size" />
      </a>
      <a href="https://github.com/Monika-Choudhary" target="_blank">
        <FaGithub className="icon-size" />
      </a>
      <a href="mailto:monikakaurchoudhary@gmail.com" className="rotate-90">
        monikakaurchoudhary@gmail.com
      </a>
    </div>
  );
}

export default SocialMediaLinks;
