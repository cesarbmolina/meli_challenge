import { useCallback, useEffect, useRef, useState } from "react";
import localStyle from "./filter.module.css"
import { useFetch } from "../../utils/useFetch";
import { useGlobalContext } from "../../utils/globalContext";

const Filter = () => {
	const minRef = useRef<HTMLInputElement>(null)
	const maxRef = useRef<HTMLInputElement>(null)
	const [sortValue, setSortValue] = useState("relevance")

	const { textSearch, setSearchResults } = useGlobalContext()

	const url = process.env.NEXT_PUBLIC_API_URL_PRODUCT
	const { data, isLoading } = useFetch(`${url}${textSearch}&sort=${sortValue}&limit=10`);


	return (
		<>
			<div className={localStyle.contentFilter}>
				<h4 className={localStyle.filterTitle}>Precio</h4>
				<ol>
					{["1", "2", "3"].map((item, key) => (<li key={key} className={localStyle.filterItem}>Hasta $ 10.000 <span className={localStyle.filterItemQuantity}>(4455)</span></li>))}
				</ol>
				<div className={localStyle.contentPriceFilter}>
					<div className={localStyle.priceFilterColumn}>
						<label className={localStyle.priceFilterLabel} htmlFor="min_price">
							<input type="number" ref={minRef} min={0} className={localStyle.priceFilterValue} placeholder="Mínimo" />
						</label>
					</div>
					<div className={localStyle.priceFilterColumn}>
						<label className={localStyle.priceFilterLabel} htmlFor="max_price">
							<input type="number" ref={minRef} min={0} className={localStyle.priceFilterValue} placeholder="Máximo" />
						</label>
					</div>
					<button className={localStyle.actionLink} disabled={true} />
				</div>
			</div>
		</>
	);
}

export default Filter;