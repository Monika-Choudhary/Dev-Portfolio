import { FaGithub, FaInstagram } from "react-icons/fa";

function SocialMediaLinks() {
  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex flex-col items-end space-y-5">
      <a href="https://github.com/Monika-Choudhary" target="_blank">
        {" "}
        <FaGithub className="w-9 h-9" />
      </a>
      <FaInstagram className="w-9 h-9 " />
    
    </div>
  );
}

export default SocialMediaLinks;
