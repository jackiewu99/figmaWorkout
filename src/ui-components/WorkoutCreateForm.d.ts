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
export declare type WorkoutCreateFormInputValues = {
    name?: string;
    demo?: string;
    steps?: string;
    area?: string;
};
export declare type WorkoutCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    steps?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutCreateFormOverridesProps = {
    WorkoutCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    steps?: FormProps<TextFieldProps>;
    area?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onSuccess?: (fields: WorkoutCreateFormInputValues) => void;
    onError?: (fields: WorkoutCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onValidate?: WorkoutCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutCreateForm(props: WorkoutCreateFormProps): React.ReactElement;
