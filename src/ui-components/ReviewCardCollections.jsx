/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Workout } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ReviewCard from "./ReviewCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ReviewCardCollections(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Workout,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ReviewCardCollections")}
    >
      {(item, index) => (
        <ReviewCard
          workout={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ReviewCard>
      )}
    </Collection>
  );
}
