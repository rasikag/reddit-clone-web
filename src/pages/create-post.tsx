import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import login from "./login";
import { useRouter } from "next/router";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, creatPost] = useCreatePostMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          await CreatePost({ input: values });
          router.push("/");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>
            <Button
              isLoading={isSubmitting}
              mt={4}
              type="submit"
              colorScheme="teal"
            >
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
