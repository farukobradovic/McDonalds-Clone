import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import {
  IProdsInvoices,
  IProduct,
  IProductInvoice,
} from "../../../app/models/product";

export interface IProps {
  prod: IProductInvoice;
}

const InvoiceProduct: React.FC<IProps> = ({ prod }) => {
  return (
    <Fragment>
      <div className='row'>
        <p>{prod.product.name}</p>
        <p>{prod.quantity}x</p>
        <p>{prod.product.price} BAM</p>
      </div>
    </Fragment>
  );
};

export default observer(InvoiceProduct);
