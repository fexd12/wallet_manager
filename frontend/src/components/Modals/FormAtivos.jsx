import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const FormAtivos = ({tipos,showModal,onHide,handleSave,ativo}) => {

    const [ativosSubmit,setAtivosSubmit] = useState({
        ticker:'',
        tipo:'C',
        tipoAtivo:1,
        preco:0,
        quantidade:0,
        taxas:0

    })

    const handleChange = (ev)=>{
        ev.preventDefault();
        ev.target.name === 'ticker' ? setAtivosSubmit({...ativosSubmit,ticker:ev.target.value}) : 
        ev.target.name === 'tipoAtivo'  ? setAtivosSubmit({...ativosSubmit,tipo:ev.target.value}) : 
        ev.target.name === 'preco' ? setAtivosSubmit({...ativosSubmit,preco:ev.target.value}) :
        ev.target.name === 'quantidade' ? setAtivosSubmit({...ativosSubmit,quantidade:ev.target.value}) : 
        ev.target.name === 'taxas' ? setAtivosSubmit({...ativosSubmit,taxas:ev.target.value}) : 
        setAtivosSubmit({...ativosSubmit})
    }


    return (
        <Modal show = {showModal} onHide={onHide}>
            <Modal.Header closeButton>
                Adicionar Ativos - {ativo.nome}
            </Modal.Header>
            
            <Modal.Body>
                <Form method='post' onSubmit={() => handleSave('/movimentacao/',ativosSubmit)}>

                    <Form.Group controlId='formAtivo' onChange={handleChange}>
                        <Form.Label>Ticker Ativo</Form.Label>
                        <Form.Control type='' name='ticker'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formTipo'  onChange={handleChange}>
                        <Form.Label>Tipo do Ativo</Form.Label>
                        <Form.Control as='select' name='tipoAtivo'>
                        {tipos.length > 0 ? tipos.map(x=><option key={x.id_tipo_ativo} value={x.id_tipo_ativo}>{x.nome} </option>) : null}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo' onChange={handleChange}>
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type='number' name='preco'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control type='number' name='quantidade'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formAtivo'  onChange={handleChange}>
                        <Form.Label>Taxas</Form.Label>
                        <Form.Control type='number' placeholder='Informe as taxas,se houver' name='taxas'></Form.Control>
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
    ativo: PropTypes.object,
    tipos:PropTypes.array
}

export default FormAtivos;
