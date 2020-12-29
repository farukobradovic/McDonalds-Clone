import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { AboutUs } from "../../features/articles/AboutUs";
import { Career } from "../../features/articles/Career";
import { Family } from "../../features/articles/Family";
import { MobileApp } from "../../features/articles/MobileApp";
import { RestaurantM17 } from "../../features/articles/RestaurantM17";
import { RestaurantMepasMall } from "../../features/articles/RestaurantMepassMall";
import { RestaurantPlaza } from "../../features/articles/RestaurantPlaza";
import { Restaurants } from "../../features/articles/Restaurants";
import { RestaurantTitova } from "../../features/articles/RestaurantTitova";
import { Footer } from "../../features/footer/Footer";
import { HomePage } from "../../features/home/HomePage";
import { NavBar } from "../../features/nav/NavBar";
import ProductDetails from "../../features/products/product/ProductDetails";
import Products from "../../features/products/Products";

const App = () => {
  return (
    <Fragment>
      <Route
        render={() => (
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/mobile-app' component={MobileApp} />
              <Route exact path='/family' component={Family} />
              <Route exact path='/about-us' component={AboutUs} />
              <Route exact path='/restaurants' component={Restaurants} />
              <Route exact path='/career' component={Career} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/products/:id' component={ProductDetails} />
              <Route
                exact
                path='/restaurant-Titova'
                component={RestaurantTitova}
              />
              <Route
                exact
                path='/restaurant-Mostar-M17'
                component={RestaurantM17}
              />
              <Route
                exact
                path='/restaurant-Mepas-Mall'
                component={RestaurantMepasMall}
              />
              <Route
                exact
                path='/restaurant-Plaza'
                component={RestaurantPlaza}
              />
            </Switch>
            <Footer />
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default observer(App);
