import localStyles from "./search.module.css"
import Image from "next/image";

const Search = () => {

	return (<div className={localStyles.contentSearch}>
		<input className={localStyles.input} type="text" autoComplete="off" name="" id="input-search" placeholder="Buscar productos, marcas y más…" />
		<button className={localStyles.btnSearch} aria-label="Buscar">
			<Image
				className={localStyles.searchIcon}
				src="/search_icon.svg"
				width={20}
				height={20}
				alt="search" />
		</button>
		<div className={localStyles.searchingResult}>
			<ul className={localStyles.list}>
				<li className={localStyles.listItem}>Rock</li>
				<li>Vinilo Rock</li>
				<li>Hard Rock Cafe</li>
			</ul>
		</div>
	</div>);
}

export default Search;