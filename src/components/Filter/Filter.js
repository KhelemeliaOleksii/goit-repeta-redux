const Filter = (props) => {
    return (
        <div>
            <label htmlFor="Filter">Filter</label>
            <input type="text" name="filter" id="Filter" onChange={props.onChangeInput} />
        </div>
    )
};
export default Filter;