import { useEffect, useState } from 'react';

export interface Data {
	available_filters: [],
	available_sorts: [],
	results: [],
	paging: {
		limit: number
		offset: number
		primary_results: number
		total: number
	},
	sort: {
		id: string
		name: string
	}
}

export interface Product {
	id: string;
	title: string;
	installments: {
		quantity: number;
		amount: string;
	};
	address: {
		state_name: string;
		city_name: string;
	};
	picture: string;
	condition: string;
	free_shipping: boolean;
	thumbnail: string;
	price: string | any;
	shipping: {
		free_shipping: Boolean;
	};
}

export function useFetch(url: string) {
	const [data, setData] = useState<Data | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const json = await response.json();
				setData(json);
				setIsLoading(false);
			} catch (error) {
				setError("Fallo la carga");
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, error };
}