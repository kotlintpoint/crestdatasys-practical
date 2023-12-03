import React from "react";
import Button from "@mui/material/Button";

function Index({ heading, subHeading }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">{heading}</h1>
      <p className="text-center text-slate-500">{subHeading}</p>
      <div className="flex justify-center gap-2 py-2 flex-wrap">
        <Button color="success" variant="contained" className="!rounded-full">
          All
        </Button>
        <Button
          variant="outlined"
          color="success"
          className="!rounded-full !text-black"
        >
          Branding
        </Button>
        <Button
          variant="outlined"
          color="success"
          className="!rounded-full !text-black"
        >
          Design
        </Button>
        <Button
          variant="outlined"
          color="success"
          className="!rounded-full !text-black"
        >
          Development
        </Button>
      </div>
    </>
  );
}

export default Index;
