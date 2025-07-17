import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function SocialMediaLinks() {
  return (
    <div>
      {/* Desktop view */}
      <div className=" hidden md:flex absolute top-1/2 right-5 flex-col items-center space-y-5 text-white -translate-y-1/2">
        <a
          href="https://www.linkedin.com/in/monikakaurchoudhary"
          target="blank"
        >
          <FaLinkedinIn className="icon-size" />
        </a>
        <a href="https://github.com/Monika-Choudhary" target="_blank">
          <FaGithub className="icon-size" />
        </a>
        <a href="mailto:monikakauchoudhary@gmail.com">
          <FaEnvelope className="icon-size" />
        </a>
      </div>
      {/* Mobile view */}
      <div className="flex md:hidden fixed bottom-5 left-1/2 tranform -translate-x-1/2 space-x-5 bg-fuchsia-800 p-3 w-35 justify-center rounded-lg">
        <a
          href="https://www.linkedin.com/in/monikakaurchoudhary"
          target="blank"
        >
          <FaLinkedinIn className="text-white text-2xl" />
        </a>
        <a href="https://github.com/Monika-Choudhary" target="_blank">
          <FaGithub className="text-white text-2xl" />
        </a>
        <a href="mailto:monikakauchoudhary@gmail.com">
          <FaEnvelope className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
