import React, { useRef } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdCastConnected } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail, SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieConnect from "../../assets/Lotti/Email.json";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbipbx1",
        "template_oql9prr",
        form.current,
        "8Nm3bYxFEu1HbM6J3"
      )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: "Successfully Sent Message!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div id="contact" className="hero bg-base-200 min-h-screen py-20">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">
        {/* Contact Form */}
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-4">
              Send Me a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
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
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Your Message"
                  required
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
        <div className="text-center lg:text-left w-full lg:pr-10 mt-5 lg:mt-0">
          <h1 className="flex items-center justify-center text-center text-5xl font-bold bg-gradient-to-r from-green-600 to-sky-500 text-transparent bg-clip-text mb-2">
            <MdCastConnected className="text-5xl text-white" />
            Let's Connect
          </h1>
          <Lottie className="h-[350px]" animationData={lottieConnect}></Lottie>
          <div className="flex justify-center gap-4 text-3xl">
            <a
              href="https://www.facebook.com/mahbubaislam.priya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
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
              href="https://www.linkedin.com/in/mahaboba-islam-priya-67789a1ab/"
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
