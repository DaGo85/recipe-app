import React from "react";
import FooterImpressumSocialIcons from "./FooterImpressumSocialIcons";

function FooterImpressum() {
  return (
    <section className="flex gap-6 py-6">
      <span className="flex flex-col gap-4 w-full px-6">
        <h5>According to § 5 TMG:</h5>
        <hr />
        <p>
          D. Goergens
          <br />
          Dorstener Strasse 534
          <br />
          46119 Oberhausen
        </p>
      </span>
      <span className="flex flex-col gap-4 w-full px-6">
        <h5>Contact:</h5>
        <hr />
        <p>
          Tel. Nr.: +49 (0) 177 1234567
          <br />
          E-Mail: d.goergens@gmail.com
        </p>
        <hr />
      </span>
      <FooterImpressumSocialIcons />
    </section>
  );
}

export default FooterImpressum;
