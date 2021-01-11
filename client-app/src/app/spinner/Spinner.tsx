import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='spinner'
        style={{ width: "120px", margin: "auto", display: "block" }}
      />
    </Fragment>
    // <div className="container container-split">
    //      <div className="container-main">

    //      </div>
    // </div>
  );
};

export default Spinner;
