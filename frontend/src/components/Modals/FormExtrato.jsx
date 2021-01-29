import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const FormExtrato = ({showModal,onHide,handleSave,ativo}) => {
    return (
        <Modal show = {showModal} onHide={onHide}>
            <Modal.Header closeButton>
                Extrato - {ativo.nome}
            </Modal.Header>
            
            <Modal.Body>
                {ativo.extrato.map(x => <div key={x.id_movimentacao}> {x.id_movimentacao} </div>)}
            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>

        </Modal>

    )
}

FormExtrato.propTypes ={
    showModal: PropTypes.bool,
    onHide: PropTypes.func,
    handleSave: PropTypes.func,
    ativo: PropTypes.object
}

export default FormExtrato;
