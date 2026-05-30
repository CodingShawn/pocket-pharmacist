import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { pairIngredientsWithStrength, toTitleCase } from "../utils/utils";

function DisplayResults({ results, searchTerm }) {
  const detailFields = [
    { key: "dosage_form", label: "Dosage Form" },
    { key: "manufacturer", label: "Manufacturer" },
    { key: "country_of_manufacturer", label: "Country of Manufacturer" },
  ];

  return (
    <section id="results">
      <Typography variant="h6" id="results-title">
        Search Results for "{searchTerm}"
      </Typography>

      {results.length === 0 ? (
        <Typography id="no-results">
          No records found. Please check if you have spelt the name correctly.
        </Typography>
      ) : (
        results.map((result, index) => {
          const ingredients = pairIngredientsWithStrength(
            result.active_ingredients,
            result.strength
          );

          return (
            <Accordion key={index} className="result-card">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="result-summary">
                  <Typography className="result-name">
                    {toTitleCase(result.product_name)}
                  </Typography>

                  <div className="result-ingredients">
                    {ingredients.map(({ ingredient, strength }, i) => (
                      <Typography key={i} className="result-ingredient">
                        {strength
                          ? `${toTitleCase(ingredient)} — ${strength.toLowerCase()}`
                          : toTitleCase(ingredient)}
                      </Typography>
                    ))}
                  </div>

                  {result.forensic_classification && (
                    <Typography className="result-classification">
                      {toTitleCase(result.forensic_classification)}
                    </Typography>
                  )}
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className="result-details">
                  {detailFields.map(({ key, label }) => (
                    <div key={key} className="result-detail-row">
                      <span className="result-detail-label">{label}</span>
                      <span className="result-detail-value">
                        {result[key] ? toTitleCase(result[key]) : "—"}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })
      )}
    </section>
  );
}

export default DisplayResults;
