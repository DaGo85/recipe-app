//Footer impressum

import { impressumData } from "../../../assets/data";
import FooterSocialIcons from "./FooterSocialIcons";

function FooterImpressum() {
  return (
    <section className="flex flex-col gap-6 md:flex-row">
      <span className="flex flex-col w-full gap-4">
        <h3>According to § 5 TMG:</h3>
        <hr className="hr-setup" />
        <address>
          {impressumData.address.name}
          <br />
          {impressumData.address.street}
          <br />
          {impressumData.address.city}
        </address>
      </span>
      <span className="flex flex-col w-full gap-4">
        <h3>Contact:</h3>
        <hr className="hr-setup" />
        <address>E-Mail: {impressumData.contact.email}</address>
        <FooterSocialIcons />
      </span>
    </section>
  );
}

export default FooterImpressum;
