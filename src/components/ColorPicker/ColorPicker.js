import { Component } from "react";
import './ColorPicker.css'
class ColorPicker extends Component {
    state = {
        activeOptionIdx : 0
    };
    setActiveState (index) {
        this.setState({activeOptionIdx : index});
    };
    makeItemClassName = (index) => {
        const styleItem = ["ColorPicker__item"]
        if (index === this.state.activeOptionIdx) {
            styleItem.push("ColorPicker__item--active")
        }
        return styleItem.join(' ');
    }
    render() {
        const {activeOptionIdx} = this.state;
        const { options } = this.props;
        const {label} = options[activeOptionIdx]; 
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Active colour: {label}</p>
                <div >
                    {
                        options.map(({ color, label }, index) => 
                            <span
                                key={label}
                                className={this.makeItemClassName(index)}
                                style={{ backgroundColor: color }}
                                onClick = {()=> this.setActiveState(index)}
                            ></span>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ColorPicker;