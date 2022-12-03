/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Workout2x2 } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function Workout2x2UpdateForm(props) {
  const {
    id,
    workout2x2,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    demo: undefined,
    rep: undefined,
    area: undefined,
    name2: undefined,
    demo2: undefined,
    rep2: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [demo, setDemo] = React.useState(initialValues.demo);
  const [rep, setRep] = React.useState(initialValues.rep);
  const [area, setArea] = React.useState(initialValues.area);
  const [name2, setName2] = React.useState(initialValues.name2);
  const [demo2, setDemo2] = React.useState(initialValues.demo2);
  const [rep2, setRep2] = React.useState(initialValues.rep2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...workout2x2Record };
    setName(cleanValues.name);
    setDemo(cleanValues.demo);
    setRep(cleanValues.rep);
    setArea(cleanValues.area);
    setName2(cleanValues.name2);
    setDemo2(cleanValues.demo2);
    setRep2(cleanValues.rep2);
    setErrors({});
  };
  const [workout2x2Record, setWorkout2x2Record] = React.useState(workout2x2);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Workout2x2, id) : workout2x2;
      setWorkout2x2Record(record);
    };
    queryData();
  }, [id, workout2x2]);
  React.useEffect(resetStateValues, [workout2x2Record]);
  const validations = {
    name: [],
    demo: [{ type: "URL" }],
    rep: [],
    area: [],
    name2: [],
    demo2: [{ type: "URL" }],
    rep2: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          demo: demo || undefined,
          rep,
          area,
          name2,
          demo2: demo2 || undefined,
          rep2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Workout2x2.copyOf(workout2x2Record, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "Workout2x2UpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              demo,
              rep,
              area,
              name2,
              demo2,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Demo"
        isRequired={false}
        isReadOnly={false}
        defaultValue={demo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo: value,
              rep,
              area,
              name2,
              demo2,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.demo ?? value;
          }
          if (errors.demo?.hasError) {
            runValidationTasks("demo", value);
          }
          setDemo(value);
        }}
        onBlur={() => runValidationTasks("demo", demo)}
        errorMessage={errors.demo?.errorMessage}
        hasError={errors.demo?.hasError}
        {...getOverrideProps(overrides, "demo")}
      ></TextField>
      <TextField
        label="Rep"
        isRequired={false}
        isReadOnly={false}
        defaultValue={rep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo,
              rep: value,
              area,
              name2,
              demo2,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.rep ?? value;
          }
          if (errors.rep?.hasError) {
            runValidationTasks("rep", value);
          }
          setRep(value);
        }}
        onBlur={() => runValidationTasks("rep", rep)}
        errorMessage={errors.rep?.errorMessage}
        hasError={errors.rep?.hasError}
        {...getOverrideProps(overrides, "rep")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        defaultValue={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo,
              rep,
              area: value,
              name2,
              demo2,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Name2"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo,
              rep,
              area,
              name2: value,
              demo2,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.name2 ?? value;
          }
          if (errors.name2?.hasError) {
            runValidationTasks("name2", value);
          }
          setName2(value);
        }}
        onBlur={() => runValidationTasks("name2", name2)}
        errorMessage={errors.name2?.errorMessage}
        hasError={errors.name2?.hasError}
        {...getOverrideProps(overrides, "name2")}
      ></TextField>
      <TextField
        label="Demo2"
        isRequired={false}
        isReadOnly={false}
        defaultValue={demo2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo,
              rep,
              area,
              name2,
              demo2: value,
              rep2,
            };
            const result = onChange(modelFields);
            value = result?.demo2 ?? value;
          }
          if (errors.demo2?.hasError) {
            runValidationTasks("demo2", value);
          }
          setDemo2(value);
        }}
        onBlur={() => runValidationTasks("demo2", demo2)}
        errorMessage={errors.demo2?.errorMessage}
        hasError={errors.demo2?.hasError}
        {...getOverrideProps(overrides, "demo2")}
      ></TextField>
      <TextField
        label="Rep2"
        isRequired={false}
        isReadOnly={false}
        defaultValue={rep2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              demo,
              rep,
              area,
              name2,
              demo2,
              rep2: value,
            };
            const result = onChange(modelFields);
            value = result?.rep2 ?? value;
          }
          if (errors.rep2?.hasError) {
            runValidationTasks("rep2", value);
          }
          setRep2(value);
        }}
        onBlur={() => runValidationTasks("rep2", rep2)}
        errorMessage={errors.rep2?.errorMessage}
        hasError={errors.rep2?.hasError}
        {...getOverrideProps(overrides, "rep2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
