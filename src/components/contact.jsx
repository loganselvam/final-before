import React from "react";

const Contact = () => {
  return (
    <div className=" w-full ">
      <div className="w-full  grid grid-cols-2  p-8 rounded-xl shadow-lg">
        <div className=" ms-20  p-4  ">

        {/* Form */}
        <form className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
            id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Purpose of Contact</label>
            <textarea
              rows="3"
              id="info"
              placeholder="Type your message here..."
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600  hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all">
            Send Message
          </button>
        </form>
        </div>
        <div>

        {/* Resume Download Button */}
        <div className="text-center place-  mt-6">
          <a
            href="src/assets/LoganCV-SD.pdf" // Change this to your actual resume link
            download
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Download Resume
          </a>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
