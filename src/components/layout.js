import PropTypes from "prop-types";
import React from "react";
import Particles from "react-particles-js";

import Header from "./header";
import star from "../images/star.png";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Particles className="particles bg-ippo-blue"
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": false
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
            },
            "shape": {
              "type": [
                "image",
              ],
              "image": [
                {
                  "src": star,
                  "height": 20,
                  "width": 20
                },
              ]
            },
            "size": {
              "value": 20,
              "random": true,
              "anim": {
                "speed": 4,
                "size_min": 10
              }
            },
          },
        }}
      />
      <Header />

      <main className="flex flex-grow items-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer>
        <nav className="flex justify-center max-w-4xl p-4 mx-auto text-lg md:p-8">
          <p className="text-white text-shadow">
            <a
              className="font-bold no-underline"
              href="https://www.instagram.com/ippo.earrings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ippo.earrings
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
