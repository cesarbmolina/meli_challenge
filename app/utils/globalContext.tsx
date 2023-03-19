import { createContext, useContext, useState } from 'react';
import { Product } from './useFetch';

export interface SearchResult {
	Product: Product
}

export interface GlobalContextValue {
	searchResults: SearchResult[];
	setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

const GlobalContext = createContext<GlobalContextValue>({
	searchResults: [],
	setSearchResults: () => { },
});

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalContextProviderProps {
	children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

	return (
		<GlobalContext.Provider value={{ searchResults, setSearchResults }}>
			{children}
		</GlobalContext.Provider>
	);
};