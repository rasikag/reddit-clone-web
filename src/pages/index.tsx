import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello world!!!</div>
      {!data ? (
        <div>Loading ...</div>
      ) : (
        data.posts.map((p) => {
          return <div key={p.id}>{p.title}</div>;
        })
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
