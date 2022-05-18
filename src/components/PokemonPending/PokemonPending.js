import { ImgSpinner } from 'react-icons'
import styles from './PokemonPending.module.css'
const PokemonPending = (pokemon) => {
    return (
        <div>
            <div>
                <ImgSpinner size='32' className={styles.IconSpin} />
                "Loading..."
            </div>
        </div>
    )
}

export default PokemonPending