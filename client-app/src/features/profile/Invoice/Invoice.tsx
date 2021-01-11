import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../../../app/spinner/Spinner";
import { RootStoreContext } from "../../../app/stores/rootStore";
import InvoiceProduct from "./InvoiceProduct";

interface DetailParams {
  id: string;
}

const Invoice: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  var rootStore = useContext(RootStoreContext);
  const { getInvoice, invoice, loadingInvoiceDetails } = rootStore.productStore;
  useEffect(() => {
    getInvoice(match.params.id);
  }, [getInvoice, match.params.id]);

  if (loadingInvoiceDetails) return <Spinner />;
  return (
    <Fragment>
      <main>
        <div className='container-profile'>
          <div className='order-details' style={{ marginBottom: "0" }}>
            <h2>
              Narudžba iz{" "}
              {invoice &&
                new Date(invoice.createdAt).toLocaleDateString("en-US")}
            </h2>
            <div className='order-details-box'>
              {invoice &&
                invoice.products &&
                invoice.products.map((p) => (
                  <InvoiceProduct key={p.product.id} prod={p} />
                ))}

              <div className='row'>
                <p className='bold'>Ukupno: {invoice && invoice!.sum} BAM</p>
              </div>
            </div>
          </div>
          <Link
            to='/user'
            className='button'
            style={{ marginBottom: "15rem", display: "inline-block" }}
          >
            Vrati na profil
          </Link>
        </div>
      </main>
    </Fragment>
  );
};

export default observer(Invoice);
