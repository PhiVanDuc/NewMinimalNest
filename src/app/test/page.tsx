"use client"

import { Button } from "@/components/ui/button";

import { toast } from "@pheralb/toast";
import publicFetch from "@/libs/fetch/public-fetch";

export default function Page() {
    const handleGet = async () => {
        const result = await publicFetch.get("/test");

        console.log("Kiểm thử GET");
        console.log(result);
    }

    const handlePost = async () => {
        const result = await publicFetch.post("/test");

        console.log("Kiểm thử POST");
        console.log(result);
    }

    const handlePut = async () => {
        const result = await publicFetch.put("/test");

        console.log("Kiểm thử PUT");
        console.log(result);
    }

    const handlePatch = async () => {
        const result = await publicFetch.patch("/test");

        console.log("Kiểm thử PATCH");
        console.log(result);
    }

    const handleDelete = async () => {
        const result = await publicFetch.delete("/test");

        console.log("Kiểm thử DELETE");
        console.log(result);
    }

    const handleToast = async () => {
        toast.success({
            text: "Thành công",
            description: 'Thành công thực hiện hành động!'
        });
    }

    return (
        <div className="flex gap-[5px] p-[20px]">
            <Button
                onClick={handleGet}
            >
                GET
            </Button>

            <Button
                onClick={handlePost}
            >
                POST
            </Button>

            <Button
                onClick={handlePut}
            >
                PUT
            </Button>

            <Button
                onClick={handlePatch}
            >
                PATCH
            </Button>

            <Button
                onClick={handleDelete}
            >
                DELETE
            </Button>

            <Button
                onClick={handleToast}
            >
                Toast
            </Button>
        </div>
    )
}