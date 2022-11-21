/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Workout } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkoutUpdateFormInputValues = {
    name?: string;
    demo?: string;
    steps?: string;
    area?: string;
};
export declare type WorkoutUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    demo?: ValidationFunction<string>;
    steps?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutUpdateFormOverridesProps = {
    WorkoutUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    demo?: FormProps<TextFieldProps>;
    steps?: FormProps<TextFieldProps>;
    area?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workout?: Workout;
    onSubmit?: (fields: WorkoutUpdateFormInputValues) => WorkoutUpdateFormInputValues;
    onSuccess?: (fields: WorkoutUpdateFormInputValues) => void;
    onError?: (fields: WorkoutUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorkoutUpdateFormInputValues) => WorkoutUpdateFormInputValues;
    onValidate?: WorkoutUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutUpdateForm(props: WorkoutUpdateFormProps): React.ReactElement;
