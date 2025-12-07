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
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 5 * 60 * 1000,
                    retry: false
                }
            }
        });
    });

    return (
        <QueryClientProvider
            client={queryClient}

        >
            {children}
        </QueryClientProvider>
    )
}