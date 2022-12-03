/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Ranking } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RankingUpdateForm(props) {
  const {
    id,
    ranking,
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
    rank: undefined,
    name: undefined,
    demo: undefined,
    desc: undefined,
    desc2: undefined,
  };
  const [rank, setRank] = React.useState(initialValues.rank);
  const [name, setName] = React.useState(initialValues.name);
  const [demo, setDemo] = React.useState(initialValues.demo);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [desc2, setDesc2] = React.useState(initialValues.desc2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...rankingRecord };
    setRank(cleanValues.rank);
    setName(cleanValues.name);
    setDemo(cleanValues.demo);
    setDesc(cleanValues.desc);
    setDesc2(cleanValues.desc2);
    setErrors({});
  };
  const [rankingRecord, setRankingRecord] = React.useState(ranking);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Ranking, id) : ranking;
      setRankingRecord(record);
    };
    queryData();
  }, [id, ranking]);
  React.useEffect(resetStateValues, [rankingRecord]);
  const validations = {
    rank: [],
    name: [],
    demo: [{ type: "URL" }],
    desc: [],
    desc2: [],
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
          rank,
          name,
          demo: demo || undefined,
          desc,
          desc2,
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
            Ranking.copyOf(rankingRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RankingUpdateForm")}
    >
      <TextField
        label="Rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={rank}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              rank: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              rank: value,
              name,
              demo,
              desc,
              desc2,
            };
            const result = onChange(modelFields);
            value = result?.rank ?? value;
          }
          if (errors.rank?.hasError) {
            runValidationTasks("rank", value);
          }
          setRank(value);
        }}
        onBlur={() => runValidationTasks("rank", rank)}
        errorMessage={errors.rank?.errorMessage}
        hasError={errors.rank?.hasError}
        {...getOverrideProps(overrides, "rank")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              rank,
              name: value,
              demo,
              desc,
              desc2,
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
              rank,
              name,
              demo: value,
              desc,
              desc2,
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
        label="Desc"
        isRequired={false}
        isReadOnly={false}
        defaultValue={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              rank,
              name,
              demo,
              desc: value,
              desc2,
            };
            const result = onChange(modelFields);
            value = result?.desc ?? value;
          }
          if (errors.desc?.hasError) {
            runValidationTasks("desc", value);
          }
          setDesc(value);
        }}
        onBlur={() => runValidationTasks("desc", desc)}
        errorMessage={errors.desc?.errorMessage}
        hasError={errors.desc?.hasError}
        {...getOverrideProps(overrides, "desc")}
      ></TextField>
      <TextField
        label="Desc2"
        isRequired={false}
        isReadOnly={false}
        defaultValue={desc2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              rank,
              name,
              demo,
              desc,
              desc2: value,
            };
            const result = onChange(modelFields);
            value = result?.desc2 ?? value;
          }
          if (errors.desc2?.hasError) {
            runValidationTasks("desc2", value);
          }
          setDesc2(value);
        }}
        onBlur={() => runValidationTasks("desc2", desc2)}
        errorMessage={errors.desc2?.errorMessage}
        hasError={errors.desc2?.hasError}
        {...getOverrideProps(overrides, "desc2")}
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
