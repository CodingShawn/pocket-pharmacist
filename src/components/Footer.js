function Footer() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function formatDate(d) {
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function getDataLoadedDate() {
    try {
      const raw = localStorage.getItem("pp_therapeutic_products_v1");
      if (raw) {
        const { cachedAt } = JSON.parse(raw);
        if (typeof cachedAt === "number") return formatDate(new Date(cachedAt));
      }
    } catch {}
    return formatDate(new Date());
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
