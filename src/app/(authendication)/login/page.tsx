"use client";

import { Left, Loading, Right } from "@/components";
import { SiteConfigDocument, SiteConfigQuery } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import React from "react";

const Page = () => {
  const { data, loading } = useQuery(SiteConfigDocument);

  return (
    <div className="flex min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex-2 bg-darkbg flex flex-col items-center justify-center space-y-2">
            <Left data={data as SiteConfigQuery} />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Right />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
