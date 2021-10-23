import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DesAndReviewContainer } from "./DesAndReviewStyle";
import ReviewProduct from "./ReviewProduct/ReviewProduct";

export default function DesAndReview({description, title}) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DesAndReviewContainer>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description " value="1" />
              <Tab label="Reviews" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <article>{description}</article>
          </TabPanel>
          <TabPanel value="2"><ReviewProduct title={title}/></TabPanel>
        </TabContext>
      </Box>
    </DesAndReviewContainer>
  );
}
