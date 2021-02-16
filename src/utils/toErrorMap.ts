import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};

  // destructed the FieldError { field, message }
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  console.log(errorMap);

  return errorMap;
};
