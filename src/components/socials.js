import React from "react";
import { FaInstagram, FaEtsy } from "react-icons/fa";

function Socials() {
  return(
    <div className="flex justify-center text-white font-semibold text-lg mb-8">
      <a href="https://www.etsy.com/shop/ippoearrings/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center no-underline mr-4 px-4 py-2 bg-star-yellow text-instagram-blue shadow-md rounded-full">
        <FaEtsy className="mr-2" />
        <p>Shop on Etsy</p>
      </a>
      <a href="https://www.instagram.com/ippo.earrings/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center no-underline px-4 py-2 bg-instagram-blue shadow-md rounded-full">
        <FaInstagram className="mr-2"/> 
        <p>Instagram</p>
      </a>
    </div>
  )
}

export default Socials;
