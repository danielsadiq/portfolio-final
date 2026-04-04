import { motion as Motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../hooks/ThemeContext";
import { FaXTwitter } from "react-icons/fa6";

function Socials() {
  const { theme } = useTheme();
  const baseBg = theme === "light" ? "#fff" : "#000";
  const baseText = theme === "light" ? "#000" : "#fff";
  const hoverBg = theme === "light" ? "#000" : "#fff";
  const hoverText = theme === "light" ? "#fff" : "#000";
  const socials = [
    { icon: BiLogoGmail, link: "mailto:danielsadiq93@gmail.com" },
    { icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/daniel-sadiq-590313227/" },
    { icon: FaXTwitter, link: "https://x.com/_danielsadiq" },
    { icon: BsGithub, link: "https://github.com/danielsadiq" },
  ];
  return (
    <>
      {socials.map((social, index) => (
        <Motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            backgroundColor: baseBg,
            color: baseText,
          }}
          transition={{
            duration: 0,
          }}
          className="p-2 lg:p-3 rounded border-2 border-black dark:border-white flex items-center justify-center"
          whileHover={{
            scale: 1.1,
            backgroundColor: hoverBg,
            color: hoverText,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
        </Motion.a>
      ))}
    </>
  );
}

export default Socials;
