"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "@/services/auth/server";

export default function Page() {
    const handleClick = async () => {
        await signOut();
    }

    return (
        <div className="p-[20px]">
            <Button onClick={handleClick}>Test</Button>
        </div>
    )
}
