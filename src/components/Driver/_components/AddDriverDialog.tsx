"use client";

import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import AddDriverForm from './AddDriverForm'
import { CreateDriverInput, CreateNewDriverDocument, GetAllDriversDocument } from '@/graphql/generated/graphql'
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

const AddDriverDialog = () => {
    const [State, setState] = useState<CreateDriverInput>({
        name: "",
        phone: ""
    });
    const [createDriver] = useMutation(CreateNewDriverDocument);

    const handleAddDriver = () => {
        createDriver({
            variables: {
                input: {
                    ...State
                }
            },
            refetchQueries: [GetAllDriversDocument],
            onCompleted: () => {
                toast.success("Driver Added Successfully")
            },
            onError: () => {
                toast.error("Failed To Add Driver")
            }
        })
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button className="bg-button flex items-center gap-2" about="Add Driver">
                        <Plus size={15} />
                        Add Driver
                    </Button>
                </DialogTrigger>
                <DialogContent className='bg-brand border-none'>
                    <DialogHeader>
                        <DialogTitle>Add Driver</DialogTitle>
                        <DialogDescription>
                            Fill in the details to add a new driver.
                        </DialogDescription>
                    </DialogHeader>
                    <AddDriverForm setState={setState} />
                    <DialogFooter>
                        <Button className='bg-button' onClick={handleAddDriver}>Add Driver</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddDriverDialog
