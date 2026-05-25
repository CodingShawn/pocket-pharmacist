function Footer() {
  function getDataLoadedDate() {
    try {
      const raw = localStorage.getItem("pp_therapeutic_products_v1");
      if (raw) {
        const { cachedAt } = JSON.parse(raw);
        if (typeof cachedAt === "number")
          return new Date(cachedAt).toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" });
      }
    } catch {}
    return new Date().toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" });
  }

  let attribution = `* Contains information from Listing of Registered Therapeutic Products accessed on ${getDataLoadedDate()} from Health Sciences Authority which is made available under the terms of the`;

  return (
    <footer id="footer">
      <div>
        {attribution}{" "}
        <a href="https://data.gov.sg/open-data-licence">
          Singapore Open Data Licence version 1.0
        </a>
      </div>
      <div>
        ** Data retrieved may be outdated. Refer to{" "}
        <a href="http://eservice.hsa.gov.sg/prism/common/enquirepublic/SearchDRBProduct.do?action=load">
          HSA website
        </a>{" "}
        for latest list of health products
      </div>
    </footer>
  );
}

export default Footer;
