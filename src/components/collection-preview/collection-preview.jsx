import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainerStyles,
  CollectionPreviewStyles,
  CollectionPreviewTitleStyles,
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <CollectionPreviewContainerStyles>
    <CollectionPreviewTitleStyles
    // onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      {title.toUpperCase()}
    </CollectionPreviewTitleStyles>
    {/* <CollectionPreviewStyles> */}
    <div className="m-3">
      <div className="mt-0"></div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
    {/* <div className="product-list-item"> */}
    {/* <div className="col-lg-4 col-md-6 col-12"> */}
    {/* {items
        .filter((item, idx) => idx > 0)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))} */}
    {/* </div>
      </div> */}
    {/* </CollectionPreviewStyles> */}
  </CollectionPreviewContainerStyles>
);

export default withRouter(CollectionPreview);
