"use client"

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Error from "@/components/Error";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import ColorForm from "@/app/admin/colors/components/ColorForm";

import { adminGetColor } from "@/services/admin-color";

export default function Page() {
    const params = useParams();

    const id = !Array.isArray(params.colorId) && params.colorId;
    const isValidId = typeof id === 'string' && id.length > 0;

    const query = useQuery({
        queryKey: ["adminColor", { id }],
        queryFn: () => adminGetColor(id),
        enabled: isValidId
    });

    const isLoading = query.isLoading;
    const isError = !isValidId || query.isError || !query.data?.success

    if (!isValidId || query.isError || !query.data?.success) {
        if (!isValidId) console.log("Id không hợp lệ!");
        else if (query.isError) console.log(query.error);
        else console.log(query.data?.message);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cập nhật màu sắc</h1>
                <p className="desc-basic">Vui lòng cập nhật màu sắc tại đây.</p>
            </Header>

            {
                isLoading ? <Loading /> :
                    isError ? <Error /> :
                        (
                            <ColorForm
                                formType="update"
                                data={query.data?.data}
                            />
                        )
            }
        </div>
    )
}