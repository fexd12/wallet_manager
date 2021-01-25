import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import CardGroup from 'react-bootstrap/CardGroup'

const CardDetail = ({ativo}) =>{

    const CardRender= (x) => {
        return (
            <div style={{marginTop:'30px',marginLeft:'30px'}} key = {"ativo-" + x.ativo_id}>
                <Card className="text-center" style={{ width: '18rem',padding:'auto',margin:'auto'}}>
                    <Card.Header>{x.ticker}</Card.Header>
                    <Card.Body>
                        <Card.Title>Empresa: {x.nome}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button>Ver Extrato</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Preço Médio : {x.preco_medio}</Card.Footer>
                </Card>
            </div>
        )
    }

    return (
        <CardGroup>
            {ativo.length > 0 ? (ativo.map(x => CardRender(x)))  : null}
        </CardGroup>
    )
}

CardDetail.propTypes = {
    ativo:PropTypes.array
}

export default CardDetail;