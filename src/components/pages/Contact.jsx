import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdCastConnected } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">
        {/* Contact Form */}
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-4">
              Send Me a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full border-0 mt-2 text-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500 hover:from-green-500 hover:to-sky-400 hover:scale-105 transition-all duration-300"
              >
                <LuMessageCircleMore />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="text-center lg:text-left w-full lg:pr-10 mt-10 lg:mt-0">
          <h1 className="flex items-center justify-center text-center text-5xl font-bold bg-gradient-to-r from-green-600 to-sky-500 text-transparent bg-clip-text mb-6 gap-3">
            <MdCastConnected className="text-5xl text-white" />
            Let's Connect
          </h1>

          <p className="mb-6">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to connect.
          </p>
          <div className="flex justify-center gap-4 text-3xl ">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <ImWhatsapp />
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <SiGmail />
            </a>
            <a
              href="mailto:yourmail@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <SiMinutemailer />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
