"use client";

import { GetAllDriversDocument } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import React from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Loading, Navbar, getInitials, getAvatarColor, AddDriverDialog } from "@/components";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

const Page = () => {
    const { data, loading } = useQuery(GetAllDriversDocument);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="w-full min-h-screen p-6">
            <Navbar title="Drivers" other={
                <>
                    <Button className="bg-button flex items-center gap-2" about="Edit Driver">
                        <PencilIcon size={15} />
                        Edit Driver
                    </Button>
                    <AddDriverDialog />
                </>
            } />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.driver?.allDrivers?.map((s, i) => (
                    <Card
                        key={s?.id || i}
                        className="bg-darkbg shadow-lg rounded-2xl flex flex-col hover:shadow-xl transition-all duration-300 border-0 hover:scale-105 aspect-[3/2]"
                    >
                        <CardContent className="p-6 flex-1 flex items-center">
                            <div className="flex items-center w-full">
                                <div className={`w-16 h-16 rounded-full ${getAvatarColor(s?.name as string)} flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0`}>
                                    {getInitials(s?.name as string)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-color font-semibold text-lg mb-1">
                                        {s?.name || "Unnamed Driver"}
                                    </h3>
                                    <p className="text-color text-sm">
                                        {s?.phone || s?.id || "No phone number"}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Page;