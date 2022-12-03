/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeaturesText2x2Props } from "./FeaturesText2x2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type FeaturesText2x2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeaturesText2x2Props;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FeaturesText2x2Collection(props: FeaturesText2x2CollectionProps): React.ReactElement;
