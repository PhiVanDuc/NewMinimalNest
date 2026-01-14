"use client"

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Error from "@/components/Error";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import ProductForm from "@/app/admin/products/components/form/ProductForm";

import { adminGetProduct } from "@/services/products/admin";

export default function Page() {
    const params = useParams();
    const id = params.productId;

    const query = useQuery({
        queryKey: ["adminProduct", { id }],
        queryFn: () => adminGetProduct(id),
        enabled: !!id
    });

    const isLoading = query.isPending;
    const isError = !id || query.isError || query.data?.success === false;
    const product = query.data?.data;

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cập nhật sản phẩm</h1>
                <p className="desc-basic">Vui lòng cập nhật sản phẩm tại đây.</p>
            </Header>

            {
                isLoading ? <Loading /> :
                    isError ? <Error /> :
                        (
                            <ProductForm
                                formType="update"
                                data={product}
                            />
                        )    
            }
        </div>
    )
}
