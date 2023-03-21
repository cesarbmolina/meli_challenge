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

}

const GlobalContext = createContext<GlobalContextValue>({
	searchResults: [],
	setSearchResults: () => { },
	textSearch: "",
	setTextSearch: () => { },
	availableFilters: [],
	setAvailableFilters: () => { }

});

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalContextProviderProps {
	children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [textSearch, setTextSearch] = useState<String>("");
	const [availableFilters, setAvailableFilters] = useState<FilterResult[]>([]);

	return (
		<GlobalContext.Provider value={{ searchResults, setSearchResults, textSearch, setTextSearch, availableFilters, setAvailableFilters }}>
			{children}
		</GlobalContext.Provider>
	);
};