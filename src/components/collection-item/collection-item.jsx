import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const Collection = ({ item, addItem }) => {
  const notify = () => toast("Item Added Successfully!");
  const { name, price, imageUrl } = item;

  return (
    // <CollectionItemContainer>
    //   <BackgroundImage imageUrl={imageUrl} />
    //   <CollectionFooterContainer>
    //     <NameContainer>{name}</NameContainer>
    //     <PriceContainer>${price}</PriceContainer>
    //   </CollectionFooterContainer>
    //   <AddButton text="Add to cart" onClick={() => addItem(item)} isInverted />
    // </CollectionItemContainer>
    <li
      key={name}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-10 xl:aspect-h-10">
          <img
            src={imageUrl}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-6 text-gray-900 text-lm font-medium">{name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Price</dt>
          <dd className="text-gray-500 text-lm">
            <b> Price: </b> $ {price}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <button
              onClick={() => {
                // notifier.success("Your items have been updated");
                notify();
                addItem(item);
              }}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <span className="ml-3">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Collection);
