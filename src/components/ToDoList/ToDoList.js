import styles from "./ToDoList.module.css"
import ButtonDelete from "../ButtonDelete";
import CheckBox from "../CheckBox";
const ToDoList = (props) => {
    return (
        <ul className={styles.List}>
            {props.list.map((item) => (
                <li key={item.id}>
                    <CheckBox id={item.id} isChecked={item.isDone} onClickChangeBox={props.changeStatus} />
                    {item.content}
                    <ButtonDelete id={item.id} onClickDelete={props.onClickDelete} />
                </li>
            ))}
        </ul>
    )
}
export default ToDoList;