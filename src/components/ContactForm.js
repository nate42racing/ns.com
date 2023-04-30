import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send data to a backend API
    setSubmitted(true);
  };

  return (
    <div className="mx-20 flex flex-col items-center">
      <h1 className="text-5xl text-center font-semibold">
        Have a question?
      </h1>
      {submitted ? (
        <p className="text-black-500 text-lg mt-60 mb-60">
          Thank you for submitting your message! I will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-5/6 mx-auto my-40">
          <div className="flex justify-between">
            <div className="mb-4 mr-4 w-1/2">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            />
          </div>
          <div className="flex justify-center mt-20">
            <Button
              primary
              className="focus:outline-none focus:shadow-outline"
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;