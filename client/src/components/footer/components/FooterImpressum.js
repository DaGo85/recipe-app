import FooterSocialIcons from "./FooterSocialIcons";

function FooterImpressum() {
  return (
    <address className="flex flex-col md:flex-row gap-6">
      <span className="flex flex-col gap-4 w-full">
        <h3>According to § 5 TMG:</h3>
        <hr className="hr-setup" />
        <p>
          D. Goergens
          <br />
          Dorstener Strasse 534
          <br />
          46119 Oberhausen
        </p>
      </span>
      <span className="flex flex-col gap-4 w-full">
        <h3>Contact:</h3>
        <hr className="hr-setup" />
        <p>E-Mail: d.goergens@gmail.com</p>
        <FooterSocialIcons />
      </span>
    </address>
  );
}

export default FooterImpressum;
