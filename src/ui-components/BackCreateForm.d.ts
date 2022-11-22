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
export declare type BackCreateFormInputValues = {
    name?: string;
    demo?: string;
    steps?: string;
    area?: string;
};
export declare type BackCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    steps?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackCreateFormOverridesProps = {
    BackCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    steps?: FormProps<TextFieldProps>;
    area?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BackCreateFormProps = React.PropsWithChildren<{
    overrides?: BackCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BackCreateFormInputValues) => BackCreateFormInputValues;
    onSuccess?: (fields: BackCreateFormInputValues) => void;
    onError?: (fields: BackCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BackCreateFormInputValues) => BackCreateFormInputValues;
    onValidate?: BackCreateFormValidationValues;
} & React.CSSProperties>;
export default function BackCreateForm(props: BackCreateFormProps): React.ReactElement;
