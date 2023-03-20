import { createContext, useContext, useState } from 'react';
import { Product } from './useFetch';

export interface SearchResult {
	Product: Product
}

export interface GlobalContextValue {
	searchResults: SearchResult[];
	setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
	textSearch: String;
	setTextSearch: React.Dispatch<React.SetStateAction<String>>;
}

const GlobalContext = createContext<GlobalContextValue>({
	searchResults: [],
	setSearchResults: () => { },
	textSearch: "",
	setTextSearch: () => { },

});

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalContextProviderProps {
	children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [textSearch, setTextSearch] = useState<String>("");

	return (
		<GlobalContext.Provider value={{ searchResults, setSearchResults, textSearch, setTextSearch }}>
			{children}
		</GlobalContext.Provider>
	);
};