//Footer impressum

import FooterSocialIcons from "./FooterSocialIcons";

function FooterImpressum() {
  return (
    <section className="flex flex-col md:flex-row gap-6">
      <span className="flex flex-col gap-4 w-full">
        <h3>According to § 5 TMG:</h3>
        <hr className="hr-setup" />
        <address>
          D. Goergens
          <br />
          Dorstener Strasse 534
          <br />
          46119 Oberhausen
        </address>
      </span>
      <span className="flex flex-col gap-4 w-full">
        <h3>Contact:</h3>
        <hr className="hr-setup" />
        <address>E-Mail: d.goergens@gmail.com</address>
        <FooterSocialIcons />
      </span>
    </section>
  );
}

export default FooterImpressum;
