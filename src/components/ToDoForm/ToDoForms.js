import { Component } from "react";
import { connect } from "react-redux";
import toDoActions from "redux/toDos/toDos-actions";
import styles from './ToDoForm.module.css'

class ToDoForm extends Component {
    initialState = {
        content: '',
    }
    state = {
        content: '',
    }
    reset = () => {
        this.setState(this.initialState);
    }
    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (const entry of formData.entries()) {
            data[entry[0]] = entry[1];
        }
        this.props.onSubmit(data);
        this.reset();
    }
    render() {
        return (
            <form className={styles.Form} onSubmit={this.onSubmit}>
                <label htmlFor="inputId"> ToDo </label>
                <input
                    type="text"
                    name="content"
                    id="inputId"
                    value={this.state.content}
                    onChange={this.onChangeInput}
                    autoComplete="off"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(toDoActions.addToDo(data))
})

export default connect(null, mapDispatchToProps)(ToDoForm);  