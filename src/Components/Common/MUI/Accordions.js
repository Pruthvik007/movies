import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordions = ({ items }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      {items &&
        items.length > 0 &&
        items.map((item, index) => {
          return (
            <Accordion
              key={item.label}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {item.label}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {item?.detail?.slice(
                    0,
                    item?.detail?.indexOf(",") !== -1
                      ? Math.min(
                          item?.detail?.indexOf(","),
                          item?.detail?.length / 2
                        )
                      : item?.detail?.length / 2
                  )}
                  ...
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </React.Fragment>
  );
};

export default Accordions;
