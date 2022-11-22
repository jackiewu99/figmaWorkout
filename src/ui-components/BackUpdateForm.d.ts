/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Back } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BackUpdateFormInputValues = {
    name?: string;
    demo?: string;
    steps?: string;
    area?: string;
};
export declare type BackUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    steps?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackUpdateFormOverridesProps = {
    BackUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    steps?: FormProps<TextFieldProps>;
    area?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BackUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    back?: Back;
    onSubmit?: (fields: BackUpdateFormInputValues) => BackUpdateFormInputValues;
    onSuccess?: (fields: BackUpdateFormInputValues) => void;
    onError?: (fields: BackUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BackUpdateFormInputValues) => BackUpdateFormInputValues;
    onValidate?: BackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackUpdateForm(props: BackUpdateFormProps): React.ReactElement;
