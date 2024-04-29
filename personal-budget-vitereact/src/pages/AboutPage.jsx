import React from "react";
import Hero from "../components/Hero";
import { Card, CardContent, Typography } from "@mui/material";

function AboutPage() {
  return (
    <>
      <Hero />
      <Card sx={{ margin: "20px", padding: "20px" }}>
        <CardContent className="incrFont">
          <Typography variant="h5" component="div">
            About The Personal Budget App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Explore the About Page of our Personal Budget App, crafted to support you in effectively managing your finances.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}
          >
            Key Features:
            <ul>
              <li>Easily track your monthly budgets</li>
              <li>Effortlessly monitor your expenses</li>
              <li>Receive timely alerts to help you stay on budget</li>
              <li>Gain valuable insights with detailed charts</li>
              <li>Enjoy the benefits of a free and secure platform</li>
              <li>Access user-friendly tutorials and support resources</li>
            </ul>
          </Typography>
        </CardContent>

      </Card>
    </>
  );
}

export default AboutPage;
