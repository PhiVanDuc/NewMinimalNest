"use client"

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Error from "@/components/Error";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import CategoryForm from "@/app/admin/categories/components/CategoryForm";

import { adminGetCategory } from "@/services/categories/admin";

export default function Page() {
    const params = useParams();
    const id = params.categoryId;

    const query = useQuery({
        queryKey: ["adminCategory", { id }],
        queryFn: () => adminGetCategory(id),
        enabled: !!id
    });

    const isLoading = query.isPending;
    const isError = !id || query.isError || query.data?.success === false;

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cập nhật danh mục</h1>
                <p className="desc-basic">Vui lòng cập nhật danh mục tại đây.</p>
            </Header>

            {
                isLoading ? <Loading /> :
                    isError ? <Error /> :
                        (
                            <CategoryForm
                                formType="update"
                                data={query.data?.data}
                            />
                        )    
            }
        </div>
    )
}
