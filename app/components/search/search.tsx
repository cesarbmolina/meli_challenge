import { useCallback, useEffect, useRef, useState } from "react";
import { GetServerSideProps } from 'next';
/*  */
import localStyles from "./search.module.css"
import Image from "next/image";
/* Util */
import { useFetch, Product } from "../../utils/useFetch";
import { useGlobalContext } from "../../utils/globalContext";

const Search = () => {
	const contentSearch = useRef<HTMLDivElement>(null)

	const { setSearchResults, setTextSearch, setAvailableFilters, textSearch } = useGlobalContext();

	const url = process.env.NEXT_PUBLIC_API_URL_PRODUCT
	const { data, isLoading } = useFetch(`${url}${textSearch}&limit=10`);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value.length > 2) {
			setTextSearch(value)
		} else {
			setTextSearch("")
		}
	};

	useEffect(() => {
		let result: any = data?.results;
		let available_filters: any = data?.available_filters
		let range = available_filters?.filter((e: any) => e.id === "price")[0]?.values
		setAvailableFilters(range)
		setSearchResults(result)
	}, [data, setAvailableFilters, setSearchResults, textSearch])

	return (
		<div className={localStyles.contentSearch} ref={contentSearch}>
			<input
				onInput={handleInputChange}
				className={localStyles.input} type="text" autoComplete="off" name="" id="input-search" placeholder="Buscar productos, marcas y más…" />
			<button className={localStyles.btnSearch} aria-label="Buscar">
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