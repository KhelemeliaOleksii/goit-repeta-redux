import { Component } from "react";
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
class PockemonSearchForm extends Component {
    state = {
        pokemonName: '',
    }
    onChange = (event) => {
        this.setState({ pokemonName: event.target.value.toLowerCase() });
        // console.log(event.target);
    }
    onSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast("Input pokemon name");
            this.reset();
            return;
        }

        this.props.onSubmit(this.state);
        this.reset();
    }
    reset() {
        this.setState({ pokemonName: '' });
    }
    render() {
        return (
            <form className="PockemonSearchForm" onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.onChange}
                />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Search Pokemon
                </button>
            </form>
        )
    }
}
export default PockemonSearchForm;