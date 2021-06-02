import MUIDataTable from "mui-datatables";
import parseString from "../utils/utils";

function DisplayResults({ results, searchTerm }) {
  const rows = results.map((result, index) => {
    return { ...result, id: index };
  });

  const parsedRows = rows.map((row) => {
    Object.keys(row).forEach(function (key) {
      if (typeof row[key] === "string" && key !== "forensic_classification") {
        row[key] = parseString(row[key]);
      }
    });
    return row;
  });

  const columns = [
    {
      name: "product_name",
      label: "Product Name",
    },
    {
      name: "active_ingredients",
      label: "Active Ingredients",
    },
    {
      name: "strength",
      label: "Strength",
    },
    {
      name: "dosage_form",
      label: "Dosage Form",
    },
    {
      name: "forensic_classification",
      label: "Forensic Classification",
      options: {
        display: false,
      },
    },
    {
      name: "manufacturer",
      label: "Manufacturer",
      options: {
        display: false,
      },
    },
    {
      name: "country_of_manufacturer",
      label: "Country of Manufacturer",
      options: {
        display: false,
      },
    },
  ];

  return (
    <MUIDataTable
      title={`Search Results for "${searchTerm}"`}
      data={parsedRows}
      columns={columns}
      options={{
        resizableColumns: true,
        filter: false,
        rowsPerPage: 20,
        rowsPerPageOptions: [20, 50],
        responsive: "standard",
        selectableRows: "none",
      }}
    />
  );
}

export default DisplayResults;
