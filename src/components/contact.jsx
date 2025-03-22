import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 tablet:grid-cols-1 laplarge:grid-cols-2 lapsmall:grid-cols-2 gap-8 p-6 tablet:p-8 rounded-xl shadow-lg ">
        
        {/* Form Section */}
        <div className="">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Purpose of Contact</label>
              <textarea
                rows="3"
                placeholder="Type your message here..."
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Resume Download Section */}
        <div className="flex justify-center items-center">
          <a
            href="src/assets/LoganCV-SD.pdf" // Change this to the actual resume path
            download
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
