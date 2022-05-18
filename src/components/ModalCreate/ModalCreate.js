import { Component } from "react";
import Modal from "components/Modal";

export default class ModalCreate extends Component {
    state = {
        showModal: false,
    }
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
    }
    render() {
        const { showModal } = this.state;

        return (
            <>
                <h1>Modal window</h1>
                {
                    showModal ? (
                        <Modal onClose={this.toggleModal}>
                            {this.props.children}
                            <button type="button" onClick={this.toggleModal}>Close modal</button>
                        </Modal>
                    ) : (<button type="button" onClick={this.toggleModal}> Open modal </button>)
                }
            </>
        )

    }


}