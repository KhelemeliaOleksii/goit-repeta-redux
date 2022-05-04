import { Component } from "react";

import Controls from "./Controls/Contros";
import ValueContainer from "./ValueContainer/ValueContainer";

import styles from "./Counter.module.css"
class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    // static Proptypes = {

    // }
    state = {
        value: this.props.initialValue,
    }
    handleIncrement = () => {
        this.setState(
            (prevState) => ({
                value: prevState.value + 1
            }));
    };
    handleDecrement = () => {
        this.setState(
            (prevState) => ({
                value: prevState.value - 1
            }));
    }
    render() {
        const counterStyles = [styles.Counter];
        return (
            <div className={counterStyles}>
                <ValueContainer value = {this.state.value}/>
                <Controls onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} />
            </div>
        )
    }
}
export default Counter;