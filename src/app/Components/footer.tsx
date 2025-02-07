import { Sofa } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-teal-500 text-white p-2 rounded-md">
              <Sofa />
            </div>
            <span className="font-bold text-xl text-gray-800">Comforty</span>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-teal-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-gray-800">Category</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Sofa</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Armchair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Wing Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Desk Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Wooden Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-teal-500">Park Bench</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
          <p className="text-gray-600 mt-4 text-sm">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-l-md w-full sm:w-auto sm:mr-2 mb-2 sm:mb-0"
              placeholder="Your email"
            />
            <button className="px-6 py-2 bg-teal-500 text-white rounded-r-md w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
