import { useState } from "react";
import Modal from "./Modal"; // assuming you have a Modal component in a separate file
import EmailSubmit from "../emailapi";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add email to mailing list here (e.g. using an API call)
    const emaildata = {
      email: email
    };
    EmailSubmit(emaildata)
    setEmail("");
    setShowModal(true);
  };

  return (
    <div>
      <form className="flex items-center justify-center" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          className="border border-gray-300 rounded-l-md px-4 py-2 w-64"
        />
        <button type="submit" className="bg-red-900 hover:bg-red-800 text-white font-bold rounded-r-md px-4 py-2">
          Subscribe
        </button>
      </form>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p className="text-lg font-medium mb-2">Success!</p>
          <p className="text-gray-700">You have been added to my mailing list.</p>
        </Modal>
      )}
    </div>
  );
}

export default EmailForm;