import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { IProduct } from "../../../app/models/product";

export interface IProps {
  product: IProduct;
  quantity: number;
}

const ProductOrder: React.FC<IProps> = ({ product, quantity }) => {
  return (
    <Fragment>
      <tr>
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={product.photo.url} alt='' />
          <span>{product.name}</span>
        </td>
        <td>
          <a href='#'>
            <i className='fas fa-trash-alt'></i>
          </a>
        </td>
        <td>{quantity}</td>
        <td>{product.price} BAM</td>
      </tr>
    </Fragment>
  );
};

export default observer(ProductOrder);
