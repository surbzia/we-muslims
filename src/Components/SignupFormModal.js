"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { signupimg } from "@/Constant/Index"; // apne image path ke hisaab se adjust karen



const SignupFormModal = ({ isOpen, onClose }) => {

    // Accessibility: set app element for react-modal
 useEffect(() => {
    Modal.setAppElement('body');  // safe fallback
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Signup Modal"
      className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 outline-none relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Image */}
        <div className="hidden lg:block lg:w-1/2 pr-4">
          <Image
            src={signupimg}
            alt="Signup"
            className="rounded-l-lg w-full h-full object-cover"
            width={600}
            height={800}
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="calibri-bold color-6 level-2 mb-4 text-2xl font-bold">
            Call To Action
          </h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-transparent radius-100 w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-transparent radius-100 w-full border border-gray-300 rounded-lg p-2"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-transparent radius-100 w-full border border-gray-300 rounded-lg p-2"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-transparent radius-20 w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary radius-100 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 bg-transparent border-none cursor-pointer"
            aria-label="Close modal"
            type="button"
          >
            &times;
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SignupFormModal;
