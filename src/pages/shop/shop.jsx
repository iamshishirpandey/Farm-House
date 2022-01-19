import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import { StyledShop } from "./shop.styles";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <StyledShop>
        <section class="about-section relative padding-tb">
          <div class="container">
            <div class="row align-items-center mb-15">
              <div class="col-lg-6 col-12">
                <div class="about-thumb">
                  <img src="assets/images/about/01.png" alt="about-thumb" />
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="about-wrapper p-0">
                  <div class="about-title">
                    <h2>
                      <span class="d-lg-block">
                        {" "}
                        Welcome to Our BrookMeadow{" "}
                      </span>
                      Farm.
                    </h2>
                    <p>Our Weekly Opening time</p>
                  </div>
                  <div class="about-content">
                    <ul className="lab-ul list-group">
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-close-squared mr-2 color-theme"></i>
                        <b>Monday: </b>
                        <span>Closed</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-close-squared mr-2 color-theme"></i>
                        <b>Tuesday: </b>
                        <span>Closed</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        <b>Wednesday: </b>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        <b>Thursday: </b>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        <b>Friday: </b>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        <b>Saturday: </b>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        <b>Sunday: </b>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner
              isLoading={!isCollectionsLoaded} // I revert it here since the collection is null on page rendering, prior to componentDIdMount. It is thereby set to boolean (!!) in selector, which results to error since collections is initially null... which thereby throws error. with this, it loads spinner when it is true.
              {...props}
            />
          )}
        />
      </StyledShop>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
