import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Fragment } from "react";
import { RootStoreContext } from "../../../app/stores/rootStore";
import ProductOrder from "./ProductOrder";

const ProductOrderBucket = () => {
  const rootStore = useContext(RootStoreContext);
  const { inBucket, inBucketSum, createInvoice } = rootStore.productStore;
  return (
    <Fragment>
      <div className='container'>
        <main>
          <div className='creating-order'>
            <h1 className='basket-order'>Vaša narudžba</h1>
            <table id='customers'>
              <thead>
                <tr>
                  <th>Proizvod</th>
                  <th>Ukloni</th>
                  <th>Količina</th>
                  <th>Cijena</th>
                </tr>
              </thead>
              <tbody>
                {inBucket &&
                  inBucket.map((product) => (
                    <ProductOrder
                      product={product.product}
                      quantity={product.quantity}
                      key={product.product.id}
                    />
                  ))}
              </tbody>
            </table>
            <div className='total-cost'>
              <div className='total-cost-all'>
                <h1>Ukupno: {inBucket && inBucketSum()} BAM</h1>
                <button
                  className='button-big'
                  onClick={() => createInvoice(inBucket)}
                >
                  Završi
                </button>
              </div>
              <p>
                Poštarina je besplatna. <i className='fas fa-smile'></i>
              </p>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default observer(ProductOrderBucket);
