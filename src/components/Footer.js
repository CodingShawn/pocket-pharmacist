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
  const d = new Date();
  let todayDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  let attribution = `* Contains information from Listing of Registered Therapeutic Products accessed on ${todayDate} from Health Sciences Authority which is made available under the terms of the Singapore Open Data Licence version 1.0 https://data.gov.sg/open-data-licence`;

  const style = {
    backgroundColor: "#d1b2e0",
    padding: "24px 24px 12px 24px",
    color: "rgba(0,0,0,0.87)",
  };

  return (
    <footer style={style}>
      <div>{attribution}</div>
      <div>
        ** Data retrieved may be outdated. Refer to{" "}
        <a href="http://eservice.hsa.gov.sg/prism/common/enquirepublic/SearchDRBProduct.do?action=load">
          HSA website
        </a>
        {" "}for latest list of health products
      </div>
    </footer>
  );
}

export default Footer;
