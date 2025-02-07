import React from "react";
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-[36px] md:text-4xl font-semibold text-[#000000] mb-8 text-center">
        Get in Touch With Us
      </h1>
      <p className="text-[#9F9F9F] text-center max-w-2xl font-normal text-[16px] mb-12">
        For more information about our products & services, feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Contact Details */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <div>
            <FaLocationDot />
              <h3 className="text-[24px] font-medium text-[#000000]">Address</h3>
              <p className="text-[#000000] text-[16px] font-normal
">
                236 5th SE Avenue, New York, NY 10000, United States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">
              <i className="fas fa-phone text-2xl"></i>
            </div>
            <div>
            <FaPhoneAlt />
              <h3 className="text-[24px] font-medium text-[#000000]">Phone</h3>
              <p className="text-[#000000] text-[16px] font-normal">Mobile: (+84) 546-6789</p>
              <p className="text-[#000000] text-[16px] font-normal">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">
              <i className="fas fa-clock text-2xl"></i>
            </div>
            <div>
            <FaClock />
              <h3 className="text-[24px] font-medium text-[#000000]">
                Working Time
              </h3>
              <p className="text-[#000000] text-[16px] font-normal">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-[#000000] text-[16px] font-normal">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Subject (Optional)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#029FAE] text-[#FFFFFF] py-2 px-4 rounded-lg font-medium hover:bg-teal-500 text-[16px]"  >
            Submit
          </button>
        </form>
      </div>
      {/* Bottom Features Section */}
      <div className="flex flex-col md:flex-row bg-[#F4F4F4] justify-around items-center mt-16 space-y-6 md:space-y-0">
          <div className="flex items-center justify-between space-x-4">
            <i className="fas fa-check-circle text-[#242424] text-[25px] font-semibold"></i>
            <LuTrophy />
            <p className="text-[#242424] text-[25px] font-semibold space-x-4">High Quality </p>
            <p className="text-[#898989] text-[20px] font-medium">Crafted from top materials</p>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
            <LuBadgeCheck />
            <p className="text-[#242424] text-[25px] font-semibold">Warranty Protection </p>
            <p className="text-[#898989] text-[20px] font-medium">Over 2 years</p>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-headset text-blue-600 text-2xl"></i>
           <p> <MdSupportAgent /></p>
            <p className="text-[#242424] text-[25px] font-semibold">24/7 Support </p>
            <p className="text-[#898989] text-[20px] font-medium"> Dedicated support team</p>
          </div>
 
</div>
    </div>
  );
};


export default ContactUs;