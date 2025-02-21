import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b bg-gray-800 text-white lg:px-60 py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Div */}
          <div className="bg-gray-800 p-6 rounded-lg md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-center">Follow Us</h2>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>

              {/* Twitter */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>

              {/* YouTube */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </button>

              {/* Telegram */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.514.26l.204-3.005 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
          </div>
          <hr className="lg:hidden" />
          <div className="bg-gray-800 p-6 rounded-lg md:col-span-3">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Fantasy Cricket
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Fantasy Football
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Fantasy Sports
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Fantasy Cricket App
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Cric Opinion Team Today
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Security Vulnerability Disclosure Program
                </p>
              </div>

              {/* Right Column */}
              <div>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  About Us
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Private Contest
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Jobs
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Help & Support
                </p>
                <p className="text-white hover:text-gray-300 cursor-pointer mt-4">
                  Community and Guidelines
                </p>
              </div>
            </div>
          </div>

          <hr className="lg:hidden" />
          {/* Right Div */}
          <div className="bg-gray-800 p-6 rounded-lg md:col-span-1">
            <h1 className="mt-2 font-bold">FOUNDING MEMBER</h1>
            <img src="" alt="founding" className="mb-10" />
            <h1 className="mt-2 font-bold">FAIRPLAY POLICY</h1>
            <img src="" alt="fairplay policy" />
          </div>
        </div>

        {/* Bottom Section: Privacy Policy & Terms */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-6">
            <button className="hover:text-gray-300">Privacy Policy</button>
            <button className="hover:text-gray-300">Terms & Conditions</button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cric Opinion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}