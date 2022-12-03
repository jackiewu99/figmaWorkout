/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Workout2x2 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Workout2x2UpdateFormInputValues = {
    name?: string;
    demo?: string;
    rep?: string;
    area?: string;
    name2?: string;
    demo2?: string;
    rep2?: string;
};
export declare type Workout2x2UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    rep?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    name2?: ValidationFunction<string>;
    demo2?: ValidationFunction<string>;
    rep2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Workout2x2UpdateFormOverridesProps = {
    Workout2x2UpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    rep?: FormProps<TextFieldProps>;
    area?: FormProps<TextFieldProps>;
    name2?: FormProps<TextFieldProps>;
    demo2?: FormProps<TextFieldProps>;
    rep2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Workout2x2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Workout2x2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workout2x2?: Workout2x2;
    onSubmit?: (fields: Workout2x2UpdateFormInputValues) => Workout2x2UpdateFormInputValues;
    onSuccess?: (fields: Workout2x2UpdateFormInputValues) => void;
    onError?: (fields: Workout2x2UpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Workout2x2UpdateFormInputValues) => Workout2x2UpdateFormInputValues;
    onValidate?: Workout2x2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Workout2x2UpdateForm(props: Workout2x2UpdateFormProps): React.ReactElement;
