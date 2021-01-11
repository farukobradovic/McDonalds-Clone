import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { LoadingComponent } from "../../app/layout/LoadingComponent";
import Spinner from "../../app/spinner/Spinner";
import { RootStoreContext } from "../../app/stores/rootStore";
import ProductsListing from "./ProductsListing";
import { ProductsSections } from "./ProductsSections";

const Products = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadProductsByCategories,
    loadingCategories,
    productsByCategories,
  } = rootStore.productStore;
  useEffect(() => {
    loadProductsByCategories();
  }, [loadProductsByCategories]);

  // if (loadingCategories) return <LoadingComponent content='Loading products' />;
  if (loadingCategories) return <Spinner />;

  return (
    <div className='container'>
      <main>
        <ProductsSections />
        {productsByCategories?.map((category) => (
          <ProductsListing category={category} key={category.id} />
        ))}
      </main>
    </div>
  );
};

export default observer(Products);
