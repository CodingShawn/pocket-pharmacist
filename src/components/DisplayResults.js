import MUIDataTable from "mui-datatables";
import parseString from "../utils/utils";

function DisplayResults({ results }) {
  if (results == null) {
    return <div>No results</div>;
  }
  console.log(results);
  const rows = results.map((result, index) => {
    return { ...result, id: index };
  });

  const parsedRows = rows.map((row) => {
    Object.keys(row).forEach(function (key) {
      if (typeof row[key] === "string") {
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
  ];

  return (
    <MUIDataTable
      data={parsedRows}
      columns={columns}
      options={{ resizableColumns: true }}
    />
  );
}

export default DisplayResults;
