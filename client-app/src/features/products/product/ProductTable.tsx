import React, { Fragment } from "react";
import { IProduct } from "../../../app/models/product";

interface IProps {
  product: IProduct;
}

export const ProductTable: React.FC<IProps> = ({ product }) => {
  return (
    <Fragment>
      <table id='customers'>
        <thead>
          <tr>
            <th>NUTRITIVNA VRIJEDNOST</th>
            <th>NA 100G</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Masnoće</td>
            <td>{product.fat}g</td>
          </tr>
          <tr>
            <td>Ugljikohidrati</td>
            <td>{product.carbohydrates}g</td>
          </tr>
          <tr>
            <td>Bjelančevine</td>
            <td>{product.protein}g</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
