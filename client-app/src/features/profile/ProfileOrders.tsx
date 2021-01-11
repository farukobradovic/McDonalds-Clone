import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import Spinner from "../../app/spinner/Spinner";
import { RootStoreContext } from "../../app/stores/rootStore";
import ProfileOrderInvoice from "./ProfileOrderInvoice";

const ProfileOrders = () => {
  var rootStore = useContext(RootStoreContext);
  const { getInvoices, invoices, loadingInvoicesGet } = rootStore.productStore;

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  if (loadingInvoicesGet) return <Spinner />;
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
