import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filters/slice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
