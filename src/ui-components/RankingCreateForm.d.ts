/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RankingCreateFormInputValues = {
    rank?: number;
    name?: string;
    demo?: string;
    desc?: string;
    desc2?: string;
};
export declare type RankingCreateFormValidationValues = {
    rank?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    desc2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RankingCreateFormOverridesProps = {
    RankingCreateFormGrid?: FormProps<GridProps>;
    rank?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    desc?: FormProps<TextFieldProps>;
    desc2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RankingCreateFormProps = React.PropsWithChildren<{
    overrides?: RankingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onSuccess?: (fields: RankingCreateFormInputValues) => void;
    onError?: (fields: RankingCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onValidate?: RankingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RankingCreateForm(props: RankingCreateFormProps): React.ReactElement;
