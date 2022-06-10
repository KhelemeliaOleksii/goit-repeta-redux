import styles from "./ToDoList.module.css"
import ButtonDelete from "../ButtonDelete";
import CheckBox from "../CheckBox";
import toDoActions from "redux/toDos/toDos-actions";
import { connect } from "react-redux";

const ToDoList = ({ todos, onClickDelete, changeStatus }) => {
    return (
        <ul className={styles.List}>
            {todos.map((item) => (
                <li key={item.id}>
                    <CheckBox id={item.id} isChecked={item.isDone} onClickChangeBox={changeStatus} />
                    {item.content}
                    <ButtonDelete id={item.id} onClickDelete={onClickDelete} />
                </li>
            ))}
        </ul>
    )
}


const filter = (items, filter) => {
    if (filter === '') {
        return items;
    }
    return items.filter(item => item.content.toLocaleLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => ({
    todos: filter(state.todos.items, state.todos.filter),
})
const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (id) => dispatch(toDoActions.removeToDo(id)),
    changeStatus: (id) => dispatch(toDoActions.toggleToDoActivity(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);