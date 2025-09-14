"use client";

import { Left, Loading, Right } from "@/components";
import { LoginDocument, SiteConfigDocument, SiteConfigQuery } from "@/graphql/generated/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Page = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { data, loading } = useQuery(SiteConfigDocument);
  const [loginUser] = useMutation(LoginDocument);

  const route = useRouter();

  const setCookies = async (token: string) => {
    await fetch("/api/cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
      credentials: "include"
    });
  };

  const handleLogin = async () => {
    loginUser({
      variables: {
        username: userName,
        password: password,
      },
      async onCompleted(data) {
        if (data.tokenAuth?.token) {
          await setCookies(data.tokenAuth.token);
        }
        toast.success("Login Successful");
        window.location.href = "/";
      },
      onError() {
        toast.error("Login Failed");
      }
    });
  }

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
            <Right
              Login={() => handleLogin()}
              setState={{ userName: setUserName, password: setPassword }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
