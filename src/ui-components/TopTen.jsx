/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Ranking } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Collection } from "@aws-amplify/ui-react";
export default function TopTen(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.rank(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Ranking,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TopTen")}
    >
      {(item, index) => (
        <HeroLayout1
          ranking={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HeroLayout1>
      )}
    </Collection>
  );
}
