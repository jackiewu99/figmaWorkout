/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Workout2x2 } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FeaturesText2x2 from "./FeaturesText2x2";
import { Collection } from "@aws-amplify/ui-react";
export default function BackTwo(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "area", operand: "back", operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Workout2x2,
    criteria: itemsFilter,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "BackTwo")}
    >
      {(item, index) => (
        <FeaturesText2x2
          workout2x2={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FeaturesText2x2>
      )}
    </Collection>
  );
}
