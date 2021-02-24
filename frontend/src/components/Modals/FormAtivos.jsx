import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import api from '../../sevices/api'

const FormAtivos = ({showModal,onHide,handleSave,ativo}) => {

    const [ativosSubmit,setAtivosSubmit] = useState({
        ticker:'',
        tipo:'c',
        tipoAtivo:0,
        preco:0.00,  
        quantidade:0,
        taxas:0.00,
        data:''

    })

    const handleChange = (ev)=>{
        ev.preventDefault();
        ev.target.name === 'ticker' ? setAtivosSubmit({...ativosSubmit,ticker:ev.target.value}) : 
        ev.target.name === 'tipo' ? setAtivosSubmit({...ativosSubmit,tipo:ev.target.value}) :
        ev.target.name === 'preco' ? setAtivosSubmit({...ativosSubmit,preco:ev.target.value}) :
        ev.target.name === 'quantidade' ? setAtivosSubmit({...ativosSubmit,quantidade:ev.target.value}) : 
        ev.target.name === 'taxas' ? setAtivosSubmit({...ativosSubmit,taxas:ev.target.value}) : 
        ev.target.name === 'data' ? setAtivosSubmit({...ativosSubmit,data:ev.target.value}) : 
        setAtivosSubmit({...ativosSubmit})
    }

    const handleSubmit = (ev) =>{

        ev.preventDefault();
        
        setAtivosSubmit({...ativosSubmit,tipoAtivo:ativo.id_tipo_ativo});
        console.log(ativo.id_tipo_ativo)
        handleSave('/movimentacao/',ativosSubmit);
    }

    return (
        <Modal show = {showModal} onHide={onHide}>
            <Modal.Header closeButton>
                Adicionar Ativos - {ativo.nome}
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId='formAtivo' onChange={handleChange}>
                        <Form.Label>Ticker Ativo</Form.Label>
                        <Form.Control type='' name='ticker'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control as='select' name='tipo'>
                        {['Compra','Venda'].map((x,index)=><option key={index} value={x === 'Compra' ? 'c' : 'v'}>{x} </option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo' onChange={handleChange}>
                        <Form.Label>Preço</Form.Label>
                        <Form.Control name='preco'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control type='number' name='quantidade'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Taxas</Form.Label>
                        <Form.Control type='number' placeholder='Informe as taxas,se houver' name='taxas'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Data</Form.Label>
                        <Form.Control type='date' placeholder='Informe a Data' name='data'></Form.Control>
                    </Form.Group>

                    <Button type='submit'>Adicionar Ativo</Button>

                </Form>
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
