import { Component } from "react";
class PokemonInfo extends Component {

    componentDidUpdate(prevProps, preState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            console.log(this.props.pokemonName);
        }
    }

    render() {
        return (
            <>
                <h1>Pokemon Info</h1>
                <p>{this.props.pokemonName}</p>
            </>

        )
    }
}
export default PokemonInfo