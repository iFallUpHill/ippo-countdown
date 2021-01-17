import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Countdown from '../components/countdown';
import Socials from '../components/socials';
import ippoLogoLarge from "../images/ippo-logo-large.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`ippo`, `earrings`, `design`, `handmade`, `jewelry`, `customizable`, `stationery`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="ippo design logo"
          className="block w-3/5 md:w-1/2 mx-auto mb-8"
          src={ippoLogoLarge}
        />

        <Countdown />
        <Socials />
      </section>
    </Layout>
  );
}

export default IndexPage;
