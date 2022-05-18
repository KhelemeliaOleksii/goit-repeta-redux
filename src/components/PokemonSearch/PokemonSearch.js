import { Component } from "react";
import styles from './PokemonSearch.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PokemonDisplay from "components/PokemonDisplay";
import PockemonSearchForm from "components/PokemonSearchForm/PokemonSearchForm";
import PokemonInfo from "components/PokemonInfo";

class PokemonSearch extends Component {
    state = {
        pokemonName: '',
    }

    onSearchSubmit = ({ pokemonName }) => {
        this.setState({ pokemonName: pokemonName });
    }

    render() {
        return (
            <div className={styles.PokemonSearchForm}>
                <PockemonSearchForm onSubmit={this.onSearchSubmit} />
                <PokemonInfo pokemonName={this.state.pokemonName} />
                <ToastContainer />
            </div>
        )
    }
}

export default PokemonSearch