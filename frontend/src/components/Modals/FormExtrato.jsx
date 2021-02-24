import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const FormExtrato = ({showModal,onHide,ativo}) => {

    const FormatDate = (date) => {
        let DateFormat;

        if(date != null){
            let miliseconds = Number(date)
            
            let DateFromMili = new Date(miliseconds)
    
            DateFormat = DateFromMili.toLocaleDateString()
                
        }else{
            DateFormat = 'Não foi inserido data'
        }

        return DateFormat
    }

    const ListExtrato = () => {

        return (
            ativo.extrato.map((x,idx) => (
                <ListGroup horizontal={x} className="my-2" key={idx}>
                    <ListGroup.Item>Preco: R${parseFloat(x.preco).toFixed(2)} </ListGroup.Item>
                    <ListGroup.Item>Quantidade {x.quantidade} </ListGroup.Item>
                    <ListGroup.Item>Taxas: R${parseFloat(x.taxas).toFixed(2)} </ListGroup.Item>
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
