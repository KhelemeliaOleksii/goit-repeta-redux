import { Component } from "react";

class DropDown extends Component {
    static defaultProps = {
        initialValue: false,
    };
    state = {
        visible: this.props.initialValue,
    };
    handleToggle = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
        }))
    };
    render() {
        return (
            <div className="DropDown">
                <button
                    type="button"
                    className="DropDown__button--toggle"
                    onClick={this.handleToggle}
                    >
                    {this.state.visible ? "Hide" : "Show"}
                </button>
                {this.state.visible && (
                    <div className="DropDownMenu">
                        It's a DropDown menu
                    </div>
                )}
            </div>
        )
    }
};

export default DropDown;