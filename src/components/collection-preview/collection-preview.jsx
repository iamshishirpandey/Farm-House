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
    <CollectionPreviewStyles>
      {/* <div className="product-list-item"> */}
      {/* <div className="col-lg-4 col-md-6 col-12"> */}
      {items
        .filter((item, idx) => idx > 0)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      {/* </div>
      </div> */}
    </CollectionPreviewStyles>
  </CollectionPreviewContainerStyles>
);

export default withRouter(CollectionPreview);
