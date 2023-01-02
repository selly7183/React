import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainProducts from "./05.Query/src/components/MainProducts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MainProducts />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}
