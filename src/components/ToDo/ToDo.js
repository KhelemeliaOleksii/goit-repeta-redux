import { Component } from "react";
import nextId from "react-id-generator";
import Filter from "../Filter";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";

export default class ToDo extends Component {
    state = {
        toDos: [],
        filter: '',
    }
    componentDidMount() {
        const dataLS = localStorage.getItem("toDos");
        const parseData = JSON.parse(dataLS);
        if (parseData.length !== 0) {
            this.setState({ toDos: parseData });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.toDos !== this.state.toDos) {
            // console.log("toDos have been updated");
            localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
        }
    }
    addToDo = ({ content }) => {
        const newItem = {
            id: nextId(),
            content: content,
            isDone: false,
        }
        const newStateToDos = [newItem, ...this.state.toDos];
        this.setState({ toDos: newStateToDos });
    }
    removeToDo = (id) => {
        this.setState({
            toDos: this.state.toDos.filter((item) => item.id !== id),
        })
    }
    toggleToDoActivity = (id) => {
        this.setState((prevState) => (
            {
                toDos: prevState.toDos.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            isDone: !item.isDone,
                        }
                    }
                    return item;
                })
            }
        ))
    }
    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    filter = () => {
        if (this.state.filter === '') {
            return this.state.toDos;
        }
        return this.state.toDos.filter(item => item.content.toLocaleLowerCase().includes(this.state.filter.toLowerCase()))
    }
    render() {
        return (
            <>
                <h1>ToDo Form</h1>
                <ToDoForm onSubmit={this.addToDo} />
                <Filter onChangeInput={this.onChangeInput} />
                <ToDoList list={this.filter()} onClickDelete={this.removeToDo} changeStatus={this.toggleToDoActivity} />
            </>

        )

    }
}