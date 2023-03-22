import { createContext, useContext, useState } from 'react';
import { Product } from './useFetch';

export interface SearchResult {
	Product: Product
}

export interface FilterResult {
	id: string;
	results: String;
	name: String;
	Value: {
		"id": String,
		"name": String,
		"results": Number
	}
}

export interface GlobalContextValue {
	searchResults: SearchResult[];
	setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
	textSearch: String;
	setTextSearch: React.Dispatch<React.SetStateAction<String>>;
	availableFilters: FilterResult[],
	setAvailableFilters: React.Dispatch<React.SetStateAction<FilterResult[]>>;
	filter: String,
	setFilter: React.Dispatch<React.SetStateAction<String>>;
	sort: String,
	setSort: React.Dispatch<React.SetStateAction<String>>;
}

const GlobalContext = createContext<GlobalContextValue>({
	searchResults: [],
	setSearchResults: () => { },
	textSearch: "",
	setTextSearch: () => { },
	availableFilters: [],
	setAvailableFilters: () => { },
	filter: "",
	setFilter: () => { },
	sort: "",
	setSort: () => { },

});

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalContextProviderProps {
	children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [textSearch, setTextSearch] = useState<String>("");
	const [availableFilters, setAvailableFilters] = useState<FilterResult[]>([]);
	const [filter, setFilter] = useState<String>("");
	const [sort, setSort] = useState<String>("");

	return (
		<GlobalContext.Provider value={{ filter, setFilter, sort, setSort, searchResults, setSearchResults, textSearch, setTextSearch, availableFilters, setAvailableFilters }}>
			{children}
		</GlobalContext.Provider>
	);
};