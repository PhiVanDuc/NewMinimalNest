"use client"

import { useState } from 'react';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

interface PropsType {
    children: React.ReactNode;
}

export default function TanstackqueryProvider({ children }: Readonly<PropsType>) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}