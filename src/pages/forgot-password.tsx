import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import {
  useForgotPasswordMutation,
} from "../generated/graphql";

const ForgotPassword: React.FC<{}> = ({}) => {
  
  const [complete, setComplete] = userState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              we sent a password reset link to your email. Please check.
            </Box>
          ) : (
            <Form>
              <InputField
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />

              <Button
                isLoading={isSubmitting}
                mt={4}
                type="submit"
                colorScheme="teal"
              >
                Forgot Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default ForgotPassword;
function userState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
