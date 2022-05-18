import { Component } from "react";
import styles from './Modal.module.css'
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    onEscapeClick = e => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }
    onClickBackDrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onEscapeClick);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscapeClick);

    }
    render() {
        return createPortal(
            <div className={styles["Modal__backdrop"]} onClick={this.onClickBackDrop}>
                <div className={styles["Modal__content"]}>
                    {this.props.children}
                </div>
            </div>
            , modalRoot);
    }
}

export default Modal