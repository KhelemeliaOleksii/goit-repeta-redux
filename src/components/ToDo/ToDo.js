import { Component } from "react";
import Filter from "../Filter";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";

export default class ToDo extends Component {
    // componentDidMount() {
    //     const dataLS = localStorage.getItem("toDos");
    //     const parseData = JSON.parse(dataLS);
    //     if (parseData.length !== 0) {
    //         this.setState({ toDos: parseData });
    //     }
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.toDos !== this.state.toDos) {
    //         // console.log("toDos have been updated");
    //         localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
    //     }
    // }
    // toggleToDoActivity = (id) => {
    //     this.setState((prevState) => (
    //         {
    //             toDos: prevState.toDos.map(item => {
    //                 if (item.id === id) {
    //                     return {
    //                         ...item,
    //                         isDone: !item.isDone,
    //                     }
    //                 }
    //                 return item;
    //             })
    //         }
    //     ))
    // }
    render() {
        return (
            <>
                <h1>ToDo Form</h1>
                <ToDoForm />
                <Filter />
                <ToDoList />
            </>
        )
    }
}