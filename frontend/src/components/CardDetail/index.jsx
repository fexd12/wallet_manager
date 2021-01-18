import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const CardDetail = ({ativos}) =>{

    return ( 
        ativos ? (
            <div style={{marginTop:'30px',marginLeft:'30px'}}>
                <Card className="text-center" style={{ width: '18rem',padding:'auto',margin:'auto'}}>
                    <Card.Header>{ativos.ticker}</Card.Header>
                    <Card.Body>
                        <Card.Title>{ativos.nome}</Card.Title>
                        <Card.Text>
                            {}
                        </Card.Text>
                        <Button>Ver Extrato</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Preço Médio : {}</Card.Footer>
                </Card>
            </div>
            ) : null
    )
}

CardDetail.propTypes = {
    ativos:PropTypes.object
}

export default CardDetail;