import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import ProfileOrderInvoice from "./ProfileOrderInvoice";

const ProfileOrders = () => {
  var rootStore = useContext(RootStoreContext);
  const { getInvoices, invoices } = rootStore.productStore;

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Fragment>
      <div className='factures'>
        <div className='upper'>
          <h2>Lista narudžbi</h2>
        </div>
        <div className='down'>
          {invoices &&
            invoices!.map((i) => (
              <ProfileOrderInvoice key={i.id} invoice={i} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default observer(ProfileOrders);
