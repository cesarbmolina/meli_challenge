import { useCallback, useEffect, useRef, useState } from "react";
import localStyle from "./filter.module.css"
import { useFetch } from "../../utils/useFetch";
import { useGlobalContext } from "../../utils/globalContext";

const Filter = () => {
	const minRef = useRef<HTMLInputElement>(null)
	const maxRef = useRef<HTMLInputElement>(null)
	const [minValue, setMinValue] = useState("")
	const [maxValue, setMaxValue] = useState("")

	const { textSearch, setSearchResults, availableFilters } = useGlobalContext()

	const price = () => {
		if (minValue.length > 0) {
			if (maxValue.length > 0) {
				return `${minValue}-${maxValue}`
			}
			return `${minValue}-*`
		}
		return `*-${maxValue}`
	}

	const handleClickRange = (value: string, index: number) => {
		if (index === 0) {
			return value
		}
		if (index === 1) {
			return value
		}
		if (index === 2) {
			return value
		}
	}

	/* const url = process.env.NEXT_PUBLIC_API_URL_PRODUCT
	const { data, isLoading } = useFetch(`${url}${textSearch}&price=${price()}&limit=10`); */

	/* 	useEffect(() => {
			console.log(price());
			if (data) {
				const newData = data?.results
				setSearchResults(newData);
			}
    
		}, [data, price, setSearchResults]) */

	return (
		<>
			<div className={localStyle.contentFilter}>
				<h4 className={localStyle.filterTitle}>Precio</h4>
				<ol>
					{availableFilters?.map((item, key) => (
						<li
							key={key}
							className={localStyle.filterItem}
							onClick={(e: any) => handleClickRange(item.id, key)}>
							{item?.name} <span className={localStyle.filterItemQuantity}>({item?.results})</span>
						</li>))}
				</ol>
				<div className={localStyle.contentPriceFilter}>
					<div className={localStyle.priceFilterColumn}>
						<label className={localStyle.priceFilterLabel} htmlFor="min_price">
							<input
								onChange={(e) => setMinValue(e.target.value)}
								type="number"
								ref={minRef}
								min={0}
								className={localStyle.priceFilterValue}
								placeholder="Mínimo" />
						</label>
					</div>
					<div className={localStyle.priceFilterColumn}>
						<label className={localStyle.priceFilterLabel} htmlFor="max_price">
							<input
								onChange={(e) => setMaxValue(e.target.value)}
								type="number"
								ref={maxRef}
								min={0}
								className={localStyle.priceFilterValue}
								placeholder="Máximo" />
						</label>
					</div>
					<button
						onClick={() => price()}
						className={localStyle.actionLink}
						disabled={minValue.length === 0 && maxValue.length === 0} />
				</div>
			</div>
		</>
	);
}

export default Filter;