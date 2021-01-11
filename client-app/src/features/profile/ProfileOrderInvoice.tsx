import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IInvoice } from "../../app/models/product";

export interface IProps {
  invoice: IInvoice;
}

const ProfileOrderInvoice: React.FC<IProps> = ({ invoice }) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='left'>
          <p>
            Datum narudžbe:{" "}
            {new Date(invoice.createdAt).toLocaleDateString("en-US")}
          </p>
        </div>
        <div className='middle'>
          <p>Cijena: {invoice.sum} BAM</p>
        </div>
        <div className='right'>
          <Link to={`/invoice/${invoice.id}`} className='button'>
            Pogledaj
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default observer(ProfileOrderInvoice);
