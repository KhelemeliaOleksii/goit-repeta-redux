import { connect } from "react-redux";
import Controls from "./Controls/Contros";
import ValueContainer from "./ValueContainer/ValueContainer";
import * as actions from '../../redux/counter/counter-actions'
import styles from "./Counter.module.css"

function Counter({ value, step, onDecrement, onIncrement }) {
    const counterStyles = [styles.Counter];
    return (
        <div className={counterStyles}>
            <ValueContainer value={value} />
            <Controls step={step} onDecrement={() => onDecrement(step)} onIncrement={() => onIncrement(step)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDecrement: (step) => dispatch(actions.decrement(step)),
        onIncrement: (step) => dispatch(actions.increment(step)),
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.counter.value,
        step: state.counter.step,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);