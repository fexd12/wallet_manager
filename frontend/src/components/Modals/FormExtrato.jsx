import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const FormExtrato = ({showModal,onHide,ativo}) => {

    const FormatDate = (date) => {
        let miliseconds = Number(date)
        
        let DateFromMili = new Date(miliseconds)

        let DateFormat = DateFromMili.toLocaleDateString()

        return DateFormat
    }

    const ListExtrato = () => {

        return (
            ativo.extrato.map((x,idx) => (
                <ListGroup horizontal={x} className="my-2" key={idx}>
                    <ListGroup.Item>Preco: {x.preco} </ListGroup.Item>
                    <ListGroup.Item>Quantidade {x.quantidade} </ListGroup.Item>
                    <ListGroup.Item>Taxas: {x.taxas} </ListGroup.Item>
                    <ListGroup.Item>Data: {FormatDate(x.data)} </ListGroup.Item>

                </ListGroup>
            ))
        )
    }

    return (
        <Modal show = {showModal} onHide={onHide}>
            <Modal.Header closeButton>
                Extrato - {ativo.nome} <br></br>
                Ticker - {ativo.ticker}
            </Modal.Header>
            
            <Modal.Body>
                {ListExtrato()}

            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>

        </Modal>

    )
}

FormExtrato.propTypes ={
    showModal: PropTypes.bool,
    onHide: PropTypes.func,
    ativo: PropTypes.object
}

export default FormExtrato;
