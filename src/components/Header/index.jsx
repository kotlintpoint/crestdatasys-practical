import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function index({ heading, breadcrumbList }) {
  return (
    <>
      <h1 className="text-3xl font-bold">{heading}</h1>

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className="text-sky-500"
      >
        {breadcrumbList.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </Breadcrumbs>
    </>
  );
}

export default index;
