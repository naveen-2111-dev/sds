import { CreateDriverInput } from "@/graphql/generated/graphql"

export interface AddDriverFormProps {
    setState: React.Dispatch<React.SetStateAction<CreateDriverInput>>
    State?: CreateDriverInput
}
