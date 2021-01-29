import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

const FormAtivos = ({showModal,onHide,handleSave,ativo}) => {
    return (
        <Modal show = {showModal} onHide={onHide}>
            <Modal.Header closeButton>
                Adicionar Ativos - {ativo.nome}
            </Modal.Header>
            
            <Modal.Body>
            
            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>

        </Modal>

    )
}

FormAtivos.propTypes ={
    showModal: PropTypes.bool,
    onHide: PropTypes.func,
    handleSave: PropTypes.func,
    ativo: PropTypes.object
}

export default FormAtivos;
