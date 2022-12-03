/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ranking } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RankingUpdateFormInputValues = {
    rank?: number;
    name?: string;
    demo?: string;
    desc?: string;
    desc2?: string;
};
export declare type RankingUpdateFormValidationValues = {
    rank?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    desc2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RankingUpdateFormOverridesProps = {
    RankingUpdateFormGrid?: FormProps<GridProps>;
    rank?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    desc?: FormProps<TextFieldProps>;
    desc2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RankingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RankingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ranking?: Ranking;
    onSubmit?: (fields: RankingUpdateFormInputValues) => RankingUpdateFormInputValues;
    onSuccess?: (fields: RankingUpdateFormInputValues) => void;
    onError?: (fields: RankingUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RankingUpdateFormInputValues) => RankingUpdateFormInputValues;
    onValidate?: RankingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RankingUpdateForm(props: RankingUpdateFormProps): React.ReactElement;
