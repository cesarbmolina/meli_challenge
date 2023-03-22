import { useCallback, useEffect, useRef, useState } from "react";
import { GetServerSideProps } from 'next';
/*  */
import localStyles from "./search.module.css"
import Image from "next/image";
/* Util */
import { useFetch, Product } from "../../utils/useFetch";
import { useGlobalContext } from "../../utils/globalContext";

interface SeachValueI {
	searchValue?: String;
	onSearchValue: React.Dispatch<React.SetStateAction<String>>;
}

const Search = ({ searchValue, onSearchValue }: SeachValueI) => {
	const contentSearch = useRef<HTMLDivElement>(null)

	const [value, setValue] = useState("")


	const { setSearchResults, setTextSearch, setAvailableFilters, textSearch } = useGlobalContext();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value.length > 2) {
			setValue(value)
		} else {
			setValue("")
		}
	};

	useEffect(() => {
		onSearchValue(textSearch)
	}, [onSearchValue, setAvailableFilters, setSearchResults, textSearch])


	const handleSearch = () => {
		setTextSearch(value)
	}

	return (
		<div className={localStyles.contentSearch} ref={contentSearch}>
			<input
				onInput={handleInputChange}
				className={localStyles.input} type="text" autoComplete="off" name="" id="input-search" placeholder="Buscar productos, marcas y más…" />
			<button
				onClick={handleSearch}
				className={localStyles.btnSearch}
				aria-label="Buscar"
			>
				<Image
					className={localStyles.searchIcon}
					src="/search_icon.svg"
					width={20}
					height={20}
					alt="search" />
			</button>
		</div>
	);
}

export default Search;