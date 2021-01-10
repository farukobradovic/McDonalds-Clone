import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { RootStoreContext } from "../../../app/stores/rootStore";
import InvoiceProduct from "./InvoiceProduct";

interface DetailParams {
  id: string;
}

const Invoice: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  var rootStore = useContext(RootStoreContext);
  const { getInvoice, invoice } = rootStore.productStore;
  useEffect(() => {
    getInvoice(match.params.id);
  }, [getInvoice]);
  return (
    <Fragment>
      <main>
        <div className='container-profile'>
          <div className='order-details'>
            <h2>
              Narudžba iz{" "}
              {invoice && new Date(invoice.createdAt).toDateString()}
            </h2>
            <div className='order-details-box'>
              {invoice &&
                invoice.products &&
                invoice.products.map((product) => {
                  {
                    <InvoiceProduct key={product.product.id} prod={product} />;
                  }
                })}

              <div className='row'>
                <p className='bold'>Ukupno: 33 BAM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default observer(Invoice);
