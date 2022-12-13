/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductCardProps } from "./ProductCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type AbsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProductCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Abs(props: AbsProps): React.ReactElement;