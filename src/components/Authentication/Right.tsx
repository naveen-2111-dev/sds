import React from 'react'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ShieldUser } from 'lucide-react';

interface RightProps {
    Login: () => void;
    setState: {
        userName: React.Dispatch<React.SetStateAction<string>>;
        password: React.Dispatch<React.SetStateAction<string>>;
    };
}

const Right = ({ Login, setState }: RightProps) => {
    return (
        <Card className="w-full max-w-sm border-none">
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className='flex items-center gap-3 border px-2 rounded-md'>
                        <Input id="username" type="text" placeholder="Enter your username" className='border-none outline-none' onChange={(e) => setState.userName(e.target.value)} />
                        <ShieldUser />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className='flex items-center gap-3 border px-2 rounded-md'>
                        <Input id="password" type="password" placeholder="Enter your password" className='border-none outline-none' onChange={(e) => setState.password(e.target.value)} />
                        <Lock />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="secondary" className="bg-black text-white" onClick={Login}>Login</Button>
            </CardFooter>
        </Card>
    )
}

export default Right;
