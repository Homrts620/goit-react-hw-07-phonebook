import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
const dispatch = useDispatch();

const changeHandler = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
};

return (
    <label className={css.label}>
    <span className={css.span}>Find contacts by name</span>
    <input type="text" name="filter" onChange={changeHandler} />
    </label>
);
};

export default Filter;