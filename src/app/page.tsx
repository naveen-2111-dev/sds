"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteConfigDocument } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import React from "react";

const Page = () => {
  const { data, loading } = useQuery(SiteConfigDocument);

  console.log(data?.core?.siteConfig?.siteName);

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkbg">
      <Card className="w-full max-w-sm border-none bg-brand">
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="secondary" className="cursor-pointer">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
