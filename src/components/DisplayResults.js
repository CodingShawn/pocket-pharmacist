import { Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

function DisplayResults({ results }) {
  if (results == null) {
    return <div>No results</div>;
  }
  console.log(results);
  const rows = results.map((result, index) => {
    return { ...result, id: index };
  });
  const columns = [
    { field: "product_name", headerName: "Product Name", flex: 0.5 },
    {
      field: "active_ingredients",
      headerName: "Active Ingredients",
      flex: 1,
    },
    { field: "strength", headerName: "Strength", flex: 1 },
    ,
    { field: "dosage_form", headerName: "Dosage Form", flex: 1 },
  ];

  return (
    <Grid container wrap="nowrap">
      <Grid item xs zeroMinWidth>
        <DataGrid rows={rows} columns={columns} autoHeight={true} />
      </Grid>
    </Grid>
  );
}

export default DisplayResults;
