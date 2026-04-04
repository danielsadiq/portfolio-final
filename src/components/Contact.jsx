import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Socials from "./Socials";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="contact"
    >
      <Motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </Motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">
        <Motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form className="w-full space-y-3 lg:space-y-5">
            <input
              className="border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-[#D4D4D8] text-sm w-full bg-white dark:bg-black text-black dark:text-white"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              className="border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-[#D4D4D8] text-sm w-full bg-white dark:bg-black text-black dark:text-white"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-[#D4D4D8] text-sm w-full bg-white dark:bg-black text-black dark:text-white"
              type="text"
              placeholder="Your website (If exists)"
            />
            <textarea
              className="resize-none border-2 px-5 py-3 h-32 border-black dark:border-white placeholder:text-[#71717A] dark:placeholder:text-[#D4D4D8] rounded text-sm w-full bg-white dark:bg-black text-black dark:text-white"
              placeholder="How can I help?*"
            ></textarea>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
            >
              <Motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-black dark:bg-white justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white dark:text-black px-3 py-2 rounded flex items-center gap-x-3 font-medium"
              >
                Get In Touch
              </Motion.button>

              <div className="flex items-center gap-x-2 lg:gap-x-5">
                <Socials/>
              </div>
            </Motion.div>
          </form>
        </Motion.div>

        <Motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">
            <h2>
              Let&apos;s{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                talk
              </span>{" "}
              for
            </h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">
            <Motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="mailto:Youremail@gmail.com"
            >
              <span className="border-2 border-transparent group-hover:border-black dark:group-hover:border-white rounded-full p-1">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              danielsadiq93@gmail.com
            </Motion.a>

            <Motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="tele:1234567890"
            >
              <span className="border-2 border-transparent group-hover:border-black dark:group-hover:border-white rounded-full p-1.25">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              1234567890
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  );
}
