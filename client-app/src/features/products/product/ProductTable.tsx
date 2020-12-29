import React, { Fragment } from "react";

export const ProductTable = () => {
  return (
    <Fragment>
      <table id='customers'>
        <tr>
          <th>NUTRITIVNA VRIJEDNOST</th>
          <th>NA 100G</th>
        </tr>
        <tr>
          <td>Masnoće</td>
          <td>11,5g</td>
        </tr>
        <tr>
          <td>Ugljikohidrati</td>
          <td>19,3g</td>
        </tr>
        <tr>
          <td>Bjelančevine</td>
          <td>12,3g</td>
        </tr>
      </table>
    </Fragment>
  );
};
