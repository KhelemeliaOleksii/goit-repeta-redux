import { connect } from "react-redux";
import toDoActions from "redux/toDos/toDos-actions";

const Filter = ({ value, onChangeInput }) => {
    return (
        <div>
            <label htmlFor="Filter">Filter</label>
            <input
                type="text"
                name="filter"
                id="Filter"
                value={value}
                onChange={onChangeInput} />
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        value: state.todos.filter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (e) => {
            return dispatch(toDoActions.filterToDO(e.target.value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);