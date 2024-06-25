"use client"
import { memberType } from "@/types/memberTypes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamCombobox } from "./team-combobox"
import { useState } from "react"

type Props = {
    data: memberType
}

export const Member = ({ data }: Props) => {

    const [ role, setRole] = useState(data.role)


    return (
        <div className="flex items-center gap-5">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback></AvatarFallback>
                </Avatar>

            </div>

            <div className="flex-1">
                <div className="truncate">{data.name}</div>
                <div className="truncate text-sm text-muted-foreground">{data.email}</div>

            </div>

            <div>
                <TeamCombobox/>
            </div>

        </div>
    )
}