import { graphql, useStaticQuery, Link } from "gatsby";
import { FaInstagram, FaEtsy } from "react-icons/fa";
import React from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <div>
          <Link to="/">
            <h1 className="flex items-center text-white no-underline">
              <span className="text-xl font-bold text-shadow">
                {site.siteMetadata.title}
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex text-white text-xl">
          <a href="https://www.etsy.com/shop/ippoearrings/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline p-2">
            <FaEtsy className="icon-shadow" />
          </a>
          <a href="https://www.instagram.com/ippo.earrings/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline p-2">
            <FaInstagram className="icon-shadow" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
