'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient()

interface IProps {
    initalState: Array<{key: string[], value: unknown}>
}

const ReactQueryWrapper: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    initalState = []
}) => {
    for (const element of initalState) {
        queryClient.setQueryData(element.key, element.value)
    }
    
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default ReactQueryWrapper;