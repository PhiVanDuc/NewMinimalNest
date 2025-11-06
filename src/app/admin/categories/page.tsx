import { Suspense } from "react";
import CategoriesClient from "./components/CategoriesClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <CategoriesClient />
        </Suspense>
    )
}