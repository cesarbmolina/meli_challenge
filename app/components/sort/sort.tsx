import { useCallback, useEffect, useRef, useState } from "react";
import localStyle from "./sort.module.css"
import { useFetch } from "../../utils/useFetch";
import { useGlobalContext } from "../../utils/globalContext";

const Sort = () => {
  const sortRef = useRef<HTMLDivElement>(null)
  const [clickedInside, setClickedInside] = useState(false)
  const [listSort, setListSort] = useState(['relevance', 'price_desc', 'price_asc']);

  const handleClickOutside = useCallback((e: any) => {
    if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
      setClickedInside(false);
    }
  }, [sortRef]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleClickInside = () => {
    setClickedInside(true);
  };

  const { setSort, sort } = useGlobalContext()

  const handleSortClick = (value: string) => {
    const selectedString = value;
    setSort(value)
    handleClickOutside(() => null)
    const index = listSort.indexOf(selectedString);
    if (index !== -1) {
      const newList = [selectedString, ...listSort.slice(0, index), ...listSort.slice(index + 1)];
      setListSort(newList);
    }
  }

  return (
    <>
      <div className={localStyle.contentSort}>
        <span className={localStyle.textSort}>Ordenar por</span>
        <div className={localStyle.contentSelected}>
          <div className={localStyle.textContentSelected} onClick={handleClickInside}>
            <span className={localStyle.textSelected}>
              {(sort === "relevance" || sort === "") && "Más relevantes"}
              {sort === "price_desc" && "Mayor precio"}
              {sort === "price_asc" && "Menor precio"}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path fillOpacity="1" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path></svg>
          </div>
          {clickedInside && <div className={localStyle.contentSelect} ref={sortRef}>
            <ul className={localStyle.contentSelectList}>
              {listSort && listSort.map((item, key) => (
                <li key={key}
                  className={`${localStyle.contentSelectItem} ${key === 0 ? localStyle.contentSelectItemActive : null}`}
                  onClick={() => handleSortClick(item)}>
                  {item === "relevance" && "Más relevantes"}
                  {item === "price_desc" && "Mayor precio"}
                  {item === "price_asc" && "Menor precio"}
                </li>
              ))}
            </ul>
          </div>}
        </div>
      </div >
    </>
  );
}

export default Sort;